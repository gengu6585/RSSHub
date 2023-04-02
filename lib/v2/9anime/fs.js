'use strict';

/** @type {string} */
document.e = "fromc";

/** @type {string} */
document.f = "charco";

/** @type {string} */
document.g = "harcode";

/** @type {string} */
document.h = "deat";
$(".");
w();
dd();

/**
 * @param {string} mw$jscomp$0
 * @return {?}
 */
function oo0o0(mw$jscomp$0) {

    /** @type {string} */
    window.b = "";

    /** @type {number} */
    let i$jscomp$3 = 0;
    const len$jscomp$0 = window.a.length;
    for (; i$jscomp$3 < len$jscomp$0; i$jscomp$3++) {
        console.log(window.a[i$jscomp$3]);
        window.b += string[document.e + document.g](window.a[i$jscomp$3][document.f + document.h]() - i$jscomp$3 - window.c);
    }

    /** @type {!array} */
    const u$jscomp$0 = ["w5r5w6vdihzct8ku", "wq8cwraxwqiraw=="];

    /**
     * @param {string} key
     * @param {string} selector
     * @return {?}
     */
    const j$jscomp$0 = function(key, selector) {

        /** @type {number} */
        key = key - 0;
        let value = u$jscomp$0[key];
        if (j$jscomp$0.bssgte === undefined) {

            /**
             * @param {string} d
             * @return {?}
             */
            const toodatafilter = function(d) {

                /** @type {string} */
                const controller = "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz0123456789+/=";
                const data = d.replace(/=+$/, "");

                /** @type {string} */
                let filter = "";

                /** @type {number} */
                let f = 0;
                let part;

                /** @type {number} */
                let i = 0;
                for (; d = data.charat(i++); ~d && (part = f % 4 ? part * 64 + d : d, f++ % 4) ? filter = filter + string.fromcharcode(255 & part >> (-2 * f & 6)) : 0) {
                    d = controller.indexof(d);
                }
                return filter;
            };

            /**
             * @param {string} filter
             * @param {!object} options
             * @return {?}
             */
            const filter = function(filter, options) {

                /** @type {!array} */
                const secretkey = [];

                /** @type {number} */
                let y = 0;
                let temp;

                /** @type {string} */
                let ret = "";

                /** @type {string} */
                filter = "";
                filter = toodatafilter(filter);

                /** @type {number} */
                let serverid = 0;
                const name = filter.length;
                for (; serverid < name; serverid++) {
                    filter = filter + ("%" + ("00" + filter.charcodeat(serverid).tostring(16)).slice(-2));
                }
                filter = decodeuricomponent(filter);
                let i;

                /** @type {number} */
                i = 0;
                for (; i < 256; i++) {

                    /** @type {number} */
                    secretkey[i] = i;
                }

                /** @type {number} */
                i = 0;
                for (; i < 256; i++) {

                    /** @type {number} */
                    y = (y + secretkey[i] + options.charcodeat(i % options.length)) % 256;
                    temp = secretkey[i];
                    secretkey[i] = secretkey[y];
                    secretkey[y] = temp;
                }

                /** @type {number} */
                i = 0;

                /** @type {number} */
                y = 0;

                /** @type {number} */
                i = 0;
                for (; i < filter.length; i++) {

                    /** @type {number} */
                    i = (i + 1) % 256;

                    /** @type {number} */
                    y = (y + secretkey[i]) % 256;
                    temp = secretkey[i];
                    secretkey[i] = secretkey[y];
                    secretkey[y] = temp;
                    ret = ret + string.fromcharcode(filter.charcodeat(i) ^ secretkey[(secretkey[i] + secretkey[y]) % 256]);
                }
                return ret;
            };

            /** @type {function(string, !object): ?} */
            j$jscomp$0.luaabu = filter;
            j$jscomp$0.qlvpzg = {};

            /** @type {boolean} */
            j$jscomp$0.bssgte = !![];
        }
        const newvalue = j$jscomp$0.qlvpzg[key];
        return newvalue === undefined ? (j$jscomp$0.tudbij === undefined && (j$jscomp$0.tudbij = !![]), value = j$jscomp$0.luaabu(value, selector), j$jscomp$0.qlvpzg[key] = value) : value = newvalue, value;
    };

    eval(atob(window.b)[j$jscomp$0("0x0", "]dqw")](j$jscomp$0("0x1", "gtu!"), "'" + mw$jscomp$0 + "'"));
    return "";
}
window.url = "/api/" + "match" + "/1", request = function() {
    const ymain = date.parse(new date) + (16798545 + -72936737 + 156138192);
    const ytitle = oo0o0(ymain["tostr" + "ing"]()) + window.f;
    const data = {};
    data.page = window.page;

    /** @type {string} */
    data.m = ytitle + "丨" + ymain / (-1 * 3483 + -9059 + 13542);
    const datatosend = data;
    $.ajax({
        "url" : window.url,
        "datatype" : "json",
        "async" : ![],
        "data" : datatosend,
        "type" : "get",
        "beforesend"(xhr) {
        },
        "success"(data) {
            data = data.data;
            let artisttrack = "";
            const _this9 = "<div " + "class" + '="b-a' + "irfly" + '"><di' + "v cla" + 'ss="e' + "-airf" + 'ly"da' + "ta-re" + "actid" + '=".1.' + "3.3.2" + ".0.$k" + "n5911" + '.0"><' + "div c" + "lass=" + '"col-' + 'trip"' + "data-" + "react" + 'id=".' + "1.3.3" + ".2.0." + "$kn59" + "11.0." + '0"><d' + "iv cl" + 'ass="' + "s-tri" + 'p"dat' + "a-rea" + "ctid=" + '".1.3' + ".3.2." + "0.$kn" + "5911." + "0.0.0" + '"><di' + "v cla" + 'ss="c' + "ol-ai" + "rline" + '"data' + "-reac" + 'tid="' + ".1.3." + "3.2.0" +
                ".$kn5" + "911.0" + ".0.0." + '0"><d' + "iv cl" + 'ass="' + "d-air" + '"data' + "-reac" + 'tid="' + ".1.3." + "3.2.0" + ".$kn5" + "911.0" + ".0.0." + "0.0:$" + '0"><d' + "iv cl" + 'ass="' + 'air"d' + "ata-r" + "eacti" + 'd=".1' + ".3.3." + "2.0.$" + "kn591" + "1.0.0" + ".0.0." + "0:$0." + '0"><s' + "pan d" + "ata-r" + "eacti" + 'd=".1' + ".3.3." + "2.0.$" + "kn591" + "1.0.0" + ".0.0." + "0:$0." + '0.1">' + "中国联合航" + "空</sp" + "an></" + "div><" + "div c" + "lass=" +
                '"num"' + "data-" + "react" + 'id=".' + "1.3.3" + ".2.0." + "$kn59" + "11.0." + "0.0.0" + ".0:$0" + '.1"><' + "span " + "class" + '="n"d' + "ata-r" + "eacti" + 'd=".1' + ".3.3." + "2.0.$" + "kn591" + "1.0.0" + ".0.0." + "0:$0." + '1.0">' + "kn591" + "1</sp" + "an><s" + "pan c" + "lass=" + '"n"da' + "ta-re" + "actid" + '=".1.' + "3.3.2" + ".0.$k" + "n5911" + ".0.0." + "0.0.0" + ":$0.1" + '.1">波' + "音737(" + "中)</s" + "pan><" + "noscr" + "ipt d" + "ata-r" + "eacti" + 'd=".1' +
                ".3.3." + "2.0.$" + "kn591" + "1.0.0" + ".0.0." + "0:$0." + '1.2">' + "</nos" + "cript" + "></di" + "v></d" + "iv><n" + "oscri" + "pt da" + "ta-re" + "actid" + '=".1.' + "3.3.2" + ".0.$k" + "n5911" + ".0.0." + "0.0.1" + '"></n' + "oscri" + "pt></" + "div><" + "div c" + "lass=" + '"col-' + 'time"' + "data-" + "react" + 'id=".' + "1.3.3" + ".2.0." + "$kn59" + "11.0." + "0.0.1" + '"><di' + "v cla" + 'ss="s' + "ep-lf" + '"data' + "-reac" + 'tid="' + ".1.3." + "3.2.0" + ".$kn5" + "911.0" + ".0.0." +
                '1.0">' + "<h2 d" + "ata-r" + "eacti" + 'd=".1' + ".3.3." + ("2.0.$" + "kn591" + "1.0.0" + ".0.1." + '0.0">' + "13:50" + "</h2>" + "<p cl" + 'ass="' + "airpo" + 'rt"da' + "ta-re" + "actid" + '=".1.' + "3.3.2" + ".0.$k" + "n5911" + ".0.0." + "0.1.0" + '.1"><' + "span " + "data-" + "react" + 'id=".' + "1.3.3" + ".2.0." + "$kn59" + "11.0." + "0.0.1" + ".0.1." + '0">大兴' + "国际机场<" + "/span" + "><spa" + "n dat" + "a-rea" + "ctid=" + '".1.3' + ".3.2." + "0.$kn" + "5911." +
                    "0.0.0" + ".1.0." + '1.1">' + "</spa" + "n></p" + "></di" + "v><di" + "v cla" + 'ss="s' + "ep-ct" + '"data' + "-reac" + 'tid="' + ".1.3." + "3.2.0" + ".$kn5" + "911.0" + ".0.0." + '1.1">' + "<div " + "class" + '="ran' + 'ge"da' + "ta-re" + "actid" + '=".1.' + "3.3.2" + ".0.$k" + "n5911" + ".0.0." + "0.1.1" + '.0">3' + "小时40分" + "钟</di" + "v><di" + "v cla" + 'ss="l' + 'ine"d' + "ata-r" + "eacti" + 'd=".1' + ".3.3." + "2.0.$" + "kn591" + "1.0.0" + ".0.1." + '1.1">' + "</div" +
                    "></di" + "v><di" + "v cla" + 'ss="s' + "ep-rt" + '"data' + "-reac" + 'tid="' + ".1.3." + "3.2.0" + ".$kn5" + "911.0" + ".0.0." + '1.2">' + "<nosc" + "ript " + "data-" + "react" + 'id=".' + "1.3.3" + ".2.0." + "$kn59" + "11.0." + "0.0.1" + '.2.0"' + "></no" + "scrip" + "t><h2" + " data" + "-reac" + 'tid="' + ".1.3." + "3.2.0" + ".$kn5" + "911.0" + ".0.0." + "1.2.1" + '">17:' + "30</h" + "2><p " + "class" + '="air' + 'port"' + "data-" + "react" + 'id=".' + "1.3.3" + ".2.0." + "$kn59" + "11.0." +
                    "0.0.1" + '.2.2"' + "><spa" + "n dat" + "a-rea" + "ctid=" + '".1.3' + ".3.2." + "0.$kn" + "5911." + "0.0.0" + ".1.2." + '2.0">' + "宝安机场<" + "/span" + "></p>" + "</div" + "><nos" + "cript" + " data" + "-reac" + 'tid="' + ".1.3." + "3.2.0" + ".$kn5" + "911.0" + ".0.0." + '1.3">' + "</nos" + "cript" + "></di" + "v></d" + "iv></" + "div><" + "div c" + "lass=" + '"col-' + "price" + '"data' + "-reac" + 'tid="' + ".1.3." + "3.2.0" + ".$kn5" + "911.0" + '.1"><' + "p cla" + 'ss="p' +
                    'rc"da' + "ta-re" + "actid" + '=".1.' + "3.3.2" + ".0.$k" + "n5911" + ".0.1." + '0"><s' + "pan d" + "ata-r" + "eacti" + 'd=".1') + (".3.3." + "2.0.$" + "kn591" + "1.0.1" + '.0.0"' + "><i c" + "lass=" + '"rmb"' + "data-" + "react" + 'id=".' + "1.3.3" + ".2.0." + "$kn59" + "11.0." + "1.0.0" + '.0">&' + "yen;<" + "/i><s" + "pan c" + "lass=" + '"fix_' + "price" + '"data' + "-reac" + 'tid="' + ".1.3." + "3.2.0" + ".$kn5" + "911.0" + ".1.0." + '0.1">' + "<span" + " clas" + 's="pr' + 'c_wp"' + "style" +
                    '="wid' + "th:48" + 'px">p' + "rice_" + "sole<" + "/span" + "></sp" + "an></" + "span>" + "</p><" + "div c" + "lass=" + '"vim"' + "data-" + "react" + 'id=".' + "1.3.3" + ".2.0." + "$kn59" + "11.0." + '1.1">' + "<span" + " clas" + 's="v ' + 'dis"d' + "ata-r" + "eacti" + 'd=".1' + ".3.3." + "2.0.$" + "kn591" + "1.0.1" + ".1.$0" + '"></s' + "pan><" + "/div>" + "</div" + "><div" + " clas" + 's="co' + "l-fol" + 'd"dat' + "a-rea" + "ctid=" + '".1.3' + ".3.2." + "0.$kn" + "5911." + '0.2">' + "<p cl" +
                    'ass="' + 'fd"da' + "ta-re" + "actid" + '=".1.' + "3.3.2" + ".0.$k" + "n5911" + ".0.2." + '0">收起' + "</p><" + "/div>" + "</div" + "><nos" + "cript" + " data" + "-reac" + 'tid="' + ".1.3." + "3.2.0" + ".$kn5" + "911.1" + '"></n' + "oscri" + "pt></" + "div>");
            const pallvertexlocations = ["中国南方航" + "空", "吉祥航空", "奥凯航空", "九元航空", "长龙航空", "东方航空", "中国国际航" + "空", "深圳航空", "海南航空", "春秋航空", "上海航空", "西部航空", "重庆航空", "西藏航空", "中国联合航" + "空",
                "云南祥鹏航" + "空", "云南英安航" + "空", "厦门航空", "天津航空", "山东航空", "四川航空", "华夏航空", "长城航空", "成都航空有", "北京首都航" + "空", "中华航空", "意大利国家" + "航空公司", "印度百捷航" + "空", "越南航空",
                "远东航空", "印度航空公" + "司", "印度捷特航" + "空有限公司", "以色列航空" + "公司", "意大利航空", "伊朗航空公" + "司", "印度尼西亚" + "鹰航空公司", "英国航空公" + "司", "西方天空航" + "空", "西捷航空", "西班牙欧洲" + "航空公司",
                "西班牙航空" + "公司", "中国南方航" + "空", "吉祥航空", "奥凯航空", "九元航空", "长龙航空", "东方航空", "中国国际航" + "空", "深圳航空", "海南航空", "春秋航空", "上海航空", "西部航空", "重庆航空", "西藏航空", "中国联合航" +
                "空", "云南祥鹏航" + "空", "云南英安航" + "空", "厦门航空", "天津航空", "山东航空", "四川航空", "华夏航空", "长城航空", "成都航空有", "北京首都航" + "空", "中华航空", "意大利国家" + "航空公司", "印度百捷航" + "空", "越南航空",
                "远东航空", "印度航空公" + "司", "印度捷特航" + "空有限公司", "以色列航空" + "公司", "意大利航空", "伊朗航空公" + "司", "印度尼西亚" + "鹰航空公司", "英国航空公" + "司", "西方天空航" + "空", "西捷航空", "西班牙欧洲" + "航空公司",
                "西班牙航空" + "公司"];
            let tnewindex = 22 * 251 + -1721 + -3800;
            const lx = ["北京首都国" + "际机场", "上海虹桥国" + "际机场", "上海浦东国" + "际机场", "天津滨海国" + "际机场", "太原武宿机" + "场", "呼和浩特白" + "塔机场", "沈阳桃仙国" + "际机场", "大连周水子" + "国际机场", "长春大房身" +
            "机场", "哈尔滨阎家" + "岗国际机场", "齐齐哈尔三" + "家子机场", "佳木斯东郊" + "机场", "厦门高崎国" + "际机场", "福州长乐国" + "际机场", "杭州萧山国" + "际机场", "合肥骆岗机" + "场", "宁波栎社机" + "场", "南京禄口国" +
            "际机场", "广州白云国" + "际机场", "深圳宝安国" + "际机场", "长沙黄花机" + "场", "海口美亚机" + "场", "武汉天河机" + "场", "济南遥墙机" + "场", "青岛流亭机" + "场", "南宁吴墟机" + "场", "三亚凤凰国" + "际机场", "重庆江北国" +
            "际机场", "成都双流国" + "际机场", "昆明巫家坝" + "国际机场", "昆明长水国" + "际机场", "桂林两江国" + "际机场", "西安咸阳国" + "际机场", "兰州中川机" + "场", "贵阳龙洞堡" + "机场", "拉萨贡嘎机" + "场", "乌鲁木齐地" + "窝堡机场",
                "南昌向塘机" + "场", "郑州新郑机" + "场", "北京首都国" + "际机场", "上海虹桥国" + "际机场", "上海浦东国" + "际机场", "天津滨海国" + "际机场", "太原武宿机" + "场", "呼和浩特白" + "塔机场", "沈阳桃仙国" + "际机场", "大连周水子" +
                "国际机场", "长春大房身" + "机场", "哈尔滨阎家" + "岗国际机场", "齐齐哈尔三" + "家子机场", "佳木斯东郊" + "机场", "厦门高崎国" + "际机场", "福州长乐国" + "际机场", "杭州萧山国" + "际机场", "合肥骆岗机" + "场", "宁波栎社机" +
                "场", "南京禄口国" + "际机场", "广州白云国" + "际机场", "深圳宝安国" + "际机场", "长沙黄花机" + "场", "海口美亚机" + "场", "武汉天河机" + "场", "济南遥墙机" + "场", "青岛流亭机" + "场", "南宁吴墟机" + "场", "三亚凤凰国" + "际机场",
                "重庆江北国" + "际机场", "成都双流国" + "际机场", "昆明巫家坝" + "国际机场", "昆明长水国" + "际机场", "桂林两江国" + "际机场", "西安咸阳国" + "际机场", "兰州中川机" + "场", "贵阳龙洞堡" + "机场", "拉萨贡嘎机" + "场", "乌鲁木齐地" +
                "窝堡机场", "南昌向塘机" + "场", "郑州新郑机" + "场"];
            if (window.page) {
            } else {

                /** @type {number} */
                window.page = 2333 * 3 + 458 * -5 + -4708;
            }
            $.each(data, (cancreatediscussions, type) => {
                artisttrack = artisttrack + _this9["repla" + "ce"]("price" + "_sole", type.value)["repla" + "ce"]("中国联合航" + "空", pallvertexlocations[tnewindex * window.page])["repla" + "ce"]("大兴国际", lx[parseint(tnewindex * window.page / (659 + 785 * -7 + 4838)) + (5666 * 1 + 2 * -4161 + 2657)])["repla" + "ce"]("宝安机场", lx[lx["lengt" + "h"] - parseint(tnewindex * window.page / (8357 + -323 * 1 + -8032)) - (350 + -9 * 295 + 2306)]);
                tnewindex = tnewindex + (-156 * -53 + -78 * -111 + -16925);
            });
            $(".m-ai" + "rfly-" + "lst").text("")["appen" + "d"](artisttrack);
        },
        "complete"() {
        },
        "error"() {
            alert("数据拉取失" + "败。可能是" + "触发了风控" + "系统，若您" + "是正常访问" + "，请使用谷" + "歌浏览器无" + "痕模式，并" + "且校准电脑" + "的系统时间" + "重新尝试");
            alert("生而为虫，" + "我很抱歉，" + "请刷新页面" + "，查看问题" + "是否存在");
            $(".page" + "-mess" + "age").eq(17 * -94 + 1014 + -4 * -146)["addcl" + "ass"]("activ" + "e");
            $(".page" + "-mess" + "age")["remov" + "eclas" + "s"]("activ" + "e");
        }
    });
}, request();

