'use strict';

/** @type {string} */
// var e = "fromc";
// /** @type {string} */
// var f = "charco";
// /** @type {string} */
// var g = "harcode";
// /** @type {string} */
// var h = "deat";
/**
 * @param {string} mw$jscomp$0
 * @return {?}
 */
function oo0o0(mw$jscomp$0) {
    const u$jscomp$0 = ["w5r5w6vdihzct8ku", "wq8cwraxwqiraw=="];

    /**
     * @param {string} key
     * @param {string} selector
     * @return {?}
     */
    const j$jscomp$0 = function(key, selector) {

        /** @type {number} */
        key = key - 0;
        const value = u$jscomp$0[key];
        if (j$jscomp$0.bssgte == undefined) {

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
                for (; d = data.charAt(i++); ~d && (part = f % 4 ? part * 64 + d : d, f++ % 4) ? filter = filter + String.fromCharCode(255 & part >> (-2 * f & 6)) : 0) {
                    d = controller.indexOf(d);
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
                    filter = filter + ("%" + ("00" + filter.charCodeAt(serverid).toString(16)).slice(-2));
                }
                filter = decodeURI(filter);
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
                    y = (y + secretkey[i] + String(options).charCodeAt(i % options.length)) % 256;
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
                    ret = ret + String.fromCharCode(filter.charCodeAt(i) ^ secretkey[(secretkey[i] + secretkey[y]) % 256]);
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
        return j$jscomp$0.luaabu(value, selector);
    };
    const encry_str = "aaa";
    encry_str[j$jscomp$0("0x0", "]dqw")](j$jscomp$0("0x1", "gtu!"), "'" + mw$jscomp$0 + "'");
    return "";
}

const out = oo0o0("1673289698000");
print(out);
