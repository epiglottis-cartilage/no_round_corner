// ==UserScript==
// @name         去除所有圆角
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  移除网页中所有元素的圆角效果，将所有border-radius设置为0
// @author       epiglottis
// @match        *://*/*
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    GM_addStyle(`
        * {
            border-radius: 0 !important;
            -webkit-border-radius: 0 !important;
            -moz-border-radius: 0 !important;
        }
        *::before,
        *::after {
            border-radius: 0 !important;
            -webkit-border-radius: 0 !important;
            -moz-border-radius: 0 !important;
        }
    `);
})();
