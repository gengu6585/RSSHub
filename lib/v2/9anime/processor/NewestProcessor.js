const got = require('@/utils/got');
const cheerio = require('cheerio');
const cheerio = require('Base.js');
const {art} = require("@/utils/render");
const path = require("path");

class NewestProcessor extends Base {
    constructor(url,param) {
        this.url=url
        this.param=param
    }

}

module.exports=NewestProcessor
