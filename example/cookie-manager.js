/** 
 * author : Ngum buka  fon nyuydze
 * name: cookie-manager.js
 * Description: simple, easy and lightweight management library
 * 7/26/2020 -version 1.0
 * Repository: https://github.com/MERCUREGIT/cookie-manager-js.git
 * Licence: Copyright 2018 mercury <contact@mercury-cm.com>
 * Released under the MIT license
 * {LICENSE URL}
 * 
 * 
 **/


(function(window, document) {
    //local scope (IIFE javascript)
    'use strict';

    var cookieManager = {
        /**
         * Description:  Creates cookie with given parametters
         * @param {String} name cookie name
         * @param {String} value cookie value
         * @param {Number} [expires] cookie expiration in days
         * @param {String} [domain] cookie domain
         * @param {String} [path] cookie path
         * @param {Boolean} [secure] cookie ssl flag
         */
        set: function(name, value, expires, domain, path, secure) {

            var cookiesString = name + '=' + value;
            if (expires) {
                var now = new Date();
                now.setTime(now.getTime() + expires * 24 * 60 * 60 * 1000);
                cookiesString += ';' + 'expires=' + now.toUTCString();
            }

            if (domain) {

                cookiesString += ';' + 'domain=' + domain;

            }

            if (path) {
                cookiesString += ';' + 'path=' + path;

            }

            if (secure) {
                cookiesString += ';' + 'secure=' + secure;

            }


            document.cookie = cookiesString;
        },
        /**
         * Descriptio: This function gets the cookie name and returns its value, if it does notexist it returns undefined
         * @param {String} name cookie name
         */

        get: function(name) {
            var cookies = document.cookie.split(';').map(function(cookie) {
                return cookie.trim();
            });
            console.log(cookies);

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].split('=');
                var key = cookie[0];
                var value = cookie[1];

                if (key === name) {
                    return value;
                }
            }

            return undefined;
        },
        /**
         * Description:  Updates the cookie with given parametters
         * @param {String} name cookie name
         * @param {String} value cookie value
         * @param {Number} [expires] cookie expiration in days
         * @param {String} [domain] cookie domain
         * @param {String} [path] cookie path
         * @param {Boolean} [secure] cookie ssl flag
         */
        update: function(name, value, expires, domain, path, secure) {

            this.set(name, value, expires, domain, path, secure);
        },

        /**
         * Description: Deletes exisiting cookie
         * @param {String} name 
         */
        delete: function(name) {
            this.set(name, '', -1);
        },
        /**
         * Description This function gets all the cookies stored
         */

        getAll: function() {
            var cookies = document.cookie.split(';').map(function(cookie) {
                return cookie.trim();
            });
            var cookiesList = [];

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].split('=');
                var key = cookie[0];
                var value = cookie[1];
                cookiesList.push({ key: key, value: value });
            }

            return undefined;
        },
        /**
         * Description This function gets all the cookies stored
         */

        clear: function() {
            var cookies = document.cookie.split(';').map(function(cookie) {
                return cookie.trim();
            });

            for (var i = 0; i < cookies.length; i++) {
                var cookie = cookies[i].split('=');
                var key = cookie[0];
                this.delete(key);
            }
        }
    };
    //https://auth0.com/blog/javascript-module-systems-showdown/
    //https://gist.github.com/crocodillon/9990078

    //AMD support
    if (typeof define === 'function' && define.amd) {
        define(function() { return cookieManager; });

        //Common.js and node.js module support.
    } else if (typeof exports !== "undefined") {
        // support Node.js specific `module.exports` (which can be a function)
        if (typeof module !== 'undefined' && module.exports) {
            exports = module.exports = cookieManager;
        }
        // But always support CommonJS module 1.1.1 spec (`exports` can not be a function)
        exports.cookieManager = cookieManager;
    } else {
        window.cookieManager = cookieManager;
    }


    window.cookieManager = cookieManager;
})(window, document);