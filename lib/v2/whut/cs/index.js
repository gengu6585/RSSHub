const got = require('@/utils/got');
const cheerio = require('cheerio');
const config = require('@/config').value;

const iconv = require('iconv-lite');
const { URLSearchParams } = require('url');
const { CookieJar } = require('tough-cookie');
const { parseDate } = require('@/utils/parse-date');
const timezone = require('@/utils/timezone');

const cookieJar = new CookieJar();
const session = got.extend({
    headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.167 Safari/537.36',
    },cookieJar

});

const yjsjy = 'http://cst.whut.edu.cn/yjsjy/';
const bksjy = 'http://cst.whut.edu.cn/bksjy/';


module.exports = async (ctx) => {
    const type = ctx.params && ctx.params.type;
    let request_ur = "yjsjy" === type ? yjsjy : bksjy;
    let aList=null
    let $=null
    try {
        let response = await session.get(request_ur);
        $ = cheerio.load(response.body);
        aList=$("div.text_list_cont ul.normal_list2 li")
    }catch (error){
        await get_graduate_news_url()
    }

    let list= aList.map((index, item)=>{
        return {
            title: $('a', item).text(),
            link: $('a', item).attr('href'),
            pubDate: timezone(parseDate($('strong', item).text().trim(), 'YYYY-MM-DD'), +8),
            type:"whut_home",
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
                    console.log(item);
                    return item;
                } catch (e) {
                    // ignore error handler
                }
                return item;
            });


        })
    )
    ctx.state.data = {
        title: '武汉理工信息综合',
        link: base_url,
        item: items,
    };

}
