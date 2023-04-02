const got = require('@/utils/got');
const cheerio = require('cheerio');

class Base {
    constructor() {
        this.url = "";
        this.param = {};
    }

    crawl_data() {
        throw "Not Implemented";
    }

    render_items() {
        return null;
    }

}

module.exports = Base;
