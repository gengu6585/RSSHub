const got = require('@/utils/got');
const { art } = require('@/utils/render');
const path = require('path');
const cheerio = require('cheerio');
const get_page_data = require('./get_page_data');
const root_url = 'https://9anime.to';


function get_real_url(root_url, ctx,first_router) {
    let userUrl = '';
    // 判断userurl获取位置

    switch (first_router) {
        case "top_rated_anime":
            return  `${root_url}/newest`;
        case "newest":
            return `${root_url}/newest`;
        default:
            return root_url
    }
}
function get_state_data(real_url,first_router) {
    switch (first_router) {
        case "top_rated_anime":
            return  `${root_url}/newest`;
        case "newest":
            return `${root_url}/newest`;
        default:
            return root_url
    }

}

async crawl_data() {
    // 数据爬取和分析
    let response = await got(this.url);
    const $ = cheerio.load(response.data);
    title_selector=".main .head .title>div"
    item_selector=".body .list-items>.item"
    const title=$(title_selector).text()
    itemList=$(item_selector)
    const data_items= itemList.map(async (index,item)=>{
        anime_url=$(item).attr("href")

        const sec_data = await get_page_data(link);

        const raw_pic_link = sec_data.raw_pic_link;
        const video_name = sec_data.video_name;
        const authors = sec_data.authors;
        const origins = sec_data.origins;
        const characters = sec_data.characters;
        const tags = sec_data.tags;
        const desc = sec_data.desc;
        const iwara_link = sec_data.iwara_link;
        const oreno3d_link = sec_data.oreno3d_link;
        return null
    }).get()
    const description = art(path.join(__dirname, 'templates/description.art'), {
                            raw_pic_link,
                            video_name,
                            authors,
                            origins,
                            characters,
                            tags,
                            desc,
                            iwara_link,
                            oreno3d_link,
                        });
                        const title = `${video_name} - ${authors}`;
                        const realData = await ctx.cache.tryGet(oreno3d_link, () => {
                            const result = {
                                title,
                                author: authors,
                                link: oreno3d_link,
                                category: tags.split(' '),
                                description,
                            };
                            return result;
                        });
                        return realData;
                    })
                    .get()
            );
    return {title,data_items}
    //     const items = await Promise.all(
    //         list
    //             .map(async (_, item) => {
    //                 // 第一页，获取搜各视频地址
    //                 const link = $(item).attr('href');
    //                 // 第二页数据分析+缓存
    //                 const sec_data = await get_sec_page_data(link);
    //                 // 传递
    //                 const raw_pic_link = sec_data.raw_pic_link;
    //                 const video_name = sec_data.video_name;
    //                 const authors = sec_data.authors;
    //                 const origins = sec_data.origins;
    //                 const characters = sec_data.characters;
    //                 const tags = sec_data.tags;
    //                 const desc = sec_data.desc;
    //                 const iwara_link = sec_data.iwara_link;
    //                 const oreno3d_link = sec_data.oreno3d_link;
    //                 // 打包,缓存HTML
    //
    // }
    // // 参数定义
    // const sort = ctx.params.sort;
    // let pagelimit = ctx.params.pagelimit ?? 1;
    // // 根链接
    // const userUrl = get_user_url(root_url, ctx, sort);
    // // 确认最大页数并比较修改(同时也是获取第一页的内容)
    // const response = await got(userUrl);
    // const $ = cheerio.load(response.data);
    // const maxPageSelector = 'div.container > main > div.g-main-list > ul.pagination > li:last-child > a';
    // 页码判断
    // if ($(maxPageSelector)) {
    //     const pageLink = new URLSearchParams($(maxPageSelector).attr('href'));
    //     const actualNum = pageLink.get('page'); // 获取最大页数
    //     if (parseInt(pagelimit) >= parseInt(actualNum)) {
    //         pagelimit = actualNum;
    //     }
    // } else {
    //     pagelimit = 1;
    // }
    // // 构造网页数据的对应数组
    // const responseList = [];
    // // 将第一页的数据加入数组
    // responseList.push(response);
    // // 创建不含第一页链接的数组
    // const Links = [];
    // for (let i = 1; i < pagelimit; i++) {
    //     Links.push(`${userUrl}&page=${i + 1}`);
    // }
    // // 由数组索引添加response
    // await Promise.all(
    //     Links.map(async (link) => {
    //         const response = await got(link);
    //         responseList.push(response);
    //     })
    // );
    // // 由数组索引获取初步分析数据
    // const tempData = [];
    // await Promise.all(
    //     responseList.map(async (response) => {
    //         const result = await getData(response);
    //         tempData.push(result);
    //     })
    // );
    // // 拼接多页面item
    // let realItem = [];
    // for (const data of tempData) {
    //     realItem = realItem.concat(data.items);
    // }
    // // 构造最终data
    // const data = {
    //     title: tempData[0].title,
    //     item: realItem,
    // };
}

render_items() {
    return null
}
module.exports = async (ctx) => {
    // function getLinksTitle(response) {
    //     const selector = 'a.box';
    //     const $ = cheerio.load(response.data);
    //     const title = $('div.g-main-list').find('h1.main-h').text();
    //     const list = $(selector);
    //     return { title, list };
    // }

    let originalUrl = ctx.originalUrl;
    let split = originalUrl.split("/");
    first_router = split[0];
    let realUrl = get_real_url(root_url,ctx,first_router);
    data=get_state_data(realUrl,first_router)

    // 生成RSS源码
    ctx.state.data = {
        title: `${data.title} - ${sortRename[sort]}(Page 1-${pagelimit})`,
        link: userUrl,
        item: data.item,
    };
};
