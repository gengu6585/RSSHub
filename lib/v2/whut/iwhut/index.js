const got = require('@/utils/got');
const cheerio = require('cheerio');
const config = require('@/config').value;

const iconv = require('iconv-lite');
const { URLSearchParams } = require('url');
const { CookieJar } = require('tough-cookie');
const { parseDate } = require('@/utils/parse-date');
const timezone = require('@/utils/timezone');
const {error} = require("winston");

const cookieJar = new CookieJar();
const session = got.extend({
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.167 Safari/537.36',
    },cookieJar

});

const repo_url = 'https://github.com/DIYgod/RSSHub/issues';

//1.发登录请求，获取webvpn的三个cookie
//https://webvpn.whut.edu.cn/do-login application/x-www-form-urlencoded
//auth_type=local&username=318805&sms_code=&password=Ejiy2063580%2F&captcha=&needCaptcha=false&captcha_id=QLb0YmwxgFGQHtm
//2.请求综合信息网站，研究生院网站
// https://webvpn.whut.edu.cn/user/portal_groups?_t=1680530164823
//3.数据包装成需要的格式
let base_url="https://webvpn.whut.edu.cn"
let web_vpn_url=base_url+"/do-login"
let username=config.whut.username
let password=config.whut.password
const urlParams = `auth_type=local&username=${username}&sms_code=&password=${encodeURIComponent(password)}&captcha=&needCaptcha=false&captcha_id=`
const params = new URLSearchParams(urlParams);
const data = Object.fromEntries(params.entries());
var home_url=""
var school_notification_url=""
var graduate_news_url=""
async function parse_home_url_response() {
    if (!home_url || home_url.length === 0) {
        throw Error("home url is null");
    }
    let response=await session.get(home_url+`?wrdrecordvisit=${Date.now()/1000|0}`);
    const $ = cheerio.load(response.body);
    let aLink=$('div.tit_box2 a')
    for (let i = 0; i < aLink.length; i++) {
        if ($(aLink[i].prev).text().includes("学校通知")) {
            school_notification_url=$(aLink[i]).attr("href")
            break
        }
    }
}

async function refresh_home_url(){
    console.log("登录vpn...");
    return session.post(web_vpn_url, { form: data,headers:{Accept: 'application/json, text/plain, */*'} })
        .then(resonse=>{
            console.log("登录结果:"+resonse.toString());
            let resouces_url=`${base_url}/user/portal_groups?_t=${Date.now()/1000|0}`
            console.log("登录成功,开始请求vpn首页获取新闻综合url...");
            return session.get(resouces_url)
        }).then(response=>{
            console.log("请求vpn首页成功，开始解析dom树，获取新闻综合url...");
            let json = JSON.parse(response.body);
            let array= json["data"][0]["resource"]
            for (let i = 0; i < array.length; i++) {
                if (array[i] && array[i]["name"] === "校内主页") {
                    console.log('获取新闻综合url成功:'+base_url+array[i]["redirect"]);
                    return base_url+array[i]["redirect"]
                }
            }
            console.log('获取新闻综合url为空:');
            return ""
        })
}

async function get_school_notification_url(){
    for (let i = 0; i < 3; i++) {
        try {
            console.log("请求刷新校内新闻首页...");
            home_url = await refresh_home_url();
            break
        } catch (e){
            console.log("请求刷新校内失败");
            console.log("重试中...");
        }
    }
    return session.get(home_url).then(
        response=>parse_home_url_response()
    )
}
async function get_graduate_news_url(){
    console.log("请求刷新学校通知url...");
    await get_school_notification_url()
    if (!school_notification_url || school_notification_url.length === 0) {
        console.log("school_notification_url is null");
        throw Error("school_notification_url is null")
    }
    let response=await session.get(school_notification_url)
    const $ = cheerio.load(response.body);
    let aList=$(".main_box div.text_list_menu2 li a")
    for (let i = 0; i < aList.length; i++) {
        if ($(aList[i]).text().includes("研究生院")) {
            graduate_news_url=$(aList[i]).attr("href")
            console.log("获得研究生院新闻页面url: "+graduate_news_url);
            break
        }
    }
}

async function getNewLinkList(retry_times) {
    console.log("当前剩余重试次数："+retry_times);
    if (retry_times <= 0) {
        console.log("重试已达最大次数");
        return Promise.reject("重试已达最大次数")
    }
    if (!graduate_news_url || graduate_news_url.length === 0) {
        console.log("研究生新闻url为空，请求新闻url...");
        await get_graduate_news_url();
    }
    if (!graduate_news_url || graduate_news_url.length === 0) {
        throw Error("graduate_news_url is null")
    }
    let aList=null
    let $=null
    try {
        let response = await session.get(graduate_news_url);
        $ = cheerio.load(response.body);
        aList=$("div.text_list_cont ul.normal_list2 li")
        if (aList.length === 0) {
            await get_graduate_news_url();
            return getNewLinkList(retry_times-1)
        }
    }catch (error){
        console.log("获取新闻列表失败");
        console.log("重试中...");
        await get_graduate_news_url();
        return getNewLinkList(retry_times-1)
    }
    console.log("获取新闻列表成功");

    return [aList,$]
}

module.exports = async (ctx) => {
    let alist = null;
    let $ = null;
    console.log("开始解析新闻");
    [aList, $] = await getNewLinkList(3);
    let list = aList.map((index, item) => {
        return {
            title: $('a', item).text(),
            link: $('a', item).attr('href'),
            pubDate: timezone(parseDate($('strong', item).text().trim(), 'YYYY-MM-DD'), +8),
            type: "whut_home",
        };
    }).get();
    const items = await Promise.all(
        list.map(async (item, index)=>{
            let link=item.link
            return ctx.cache.tryGet(item.link, async () => {
                let detailResponse = null;
                try {
                    let response = await session.get(link);
                    const $ = cheerio.load(response.body);
                    $('div.main_box div.font_print').remove()
                    item.description = $('div.main_box div.text_cont').html();
                    console.log(`获取文章:${item.title},链接${item.link}`);
                    return item;
                } catch (e) {
                    // ignore error handler
                }
                return item;
            });


        })
    );
    console.log("解析完成");
    ctx.state.data = {
        title: '武汉理工信息综合',
        link: base_url,
        item: items,
    };

}
