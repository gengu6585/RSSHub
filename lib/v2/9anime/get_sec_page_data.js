const got = require('@/utils/got');
const cheerio = require('cheerio');

const rootUrl = 'https://9anime.to';

async function sync_detail(link) {
    // 主选择器
    const main_seleclt = ".body  .watch-main>div.watch-containe";
    const info_select = "#info .poster .info";
    const anime_pic_select = '#player';
    // 分条选择器
    // 下载
    const response = await got(link);
    const $ = cheerio.load(response.data);
    // 创建列表
    const tags = [];
    const authors = [];
    const origins = [];
    const characters = [];
    // 筛选
    const raw_pic_link = rootUrl + $(anime_pic_select).attr('style');

    raw_pic_link = raw_pic_link.match(/url\('(.*)'\)/)[1];
    anime_name = $(main_seleclt).find(".title").text();
    broadcast_time = $(info_select).find(".bemata div.meta:first-child div:nth-child(3) span").text();
    genre = $(info_select).find(".bemata div.meta:first-child div:last-child span").text();
    score = $(info_select).find(".bemata div.meta:last-child div:nth-child(2) span").text();

    // 存为列表
    $(sec_page_selector)
        .find(author_selector)
        .each(function (i) {
            authors[i] = $(this).text();
            authors[i].replace(' ', ''); // 去空格
            authors[i].trim(); // 去首尾空格
        });
    $(sec_page_selector)
        .find(origins_selector)
        .each(function (i) {
            origins[i] = $(this).text();
            origins[i].replace(' ', '');
            origins[i].trim();
        });
    $(sec_page_selector)
        .find(characters_selector)
        .each(function (i) {
            characters[i] = $(this).text();
            characters[i].replace(' ', '');
            characters[i].trim();
        });
    $(sec_page_selector)
        .find(tags_selector)
        .each(function (i) {
            tags[i] = $(this).text();
            tags[i].replace(' ', '');
            tags[i].trim();
        });
    // 筛选
    const desc = $(sec_page_selector).find(desc_selector).text();
    const iwara_link = $(iwara_link_selector).attr('href');
    // 打包
    return {
        raw_pic_link,
        video_name,
        authors: authors.join(' '),
        origins: origins.join(' '),
        characters: characters.join(' '),
        tags: tags.join(' '),
        desc,
        iwara_link,
        oreno3d_link: link,
    };
}

module.exports = sync_detail;
