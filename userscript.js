// ==UserScript==
// @name         akatsuki redirect
// @namespace    isak
// @version      0.1
// @description  redirects you to the osu.ppy.sh beatmap page
// @author       isak løvås
// @match        http://akatsuki.pw/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @noframes
// @include      http://osu.ppy.sh*
// @include      https://old.ppy.sh*
// @include      https://akatsuki.pw*
// @grant        GM.xmlHttpRequest
// @grant        GM_xmlhttpRequest
// @grant        GM.xmlHttpRequest
// @grant        GM.setValue
// @grant        GM.getValue
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @require      https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js
// @require      http://timeago.yarp.com/jquery.timeago.js
// ==/UserScript==

/*global GM, $, GM_xmlhttpRequest, GM_setValue, GM_getValue, unsafeWindow */

(() => {
    'use strict';

    // Your code here...
    var url = window.location.hostname;
    var urlPathname = window.location.pathname;

    if (url === "akatsuki.pw" && urlPathname[1] === "b") {
        let a = confirm("Do you want to redirect to osu.ppy.sh beatmap page?")
        if (a == true && url === "akatsuki.pw" && urlPathname[1] === "b") {
            window.location.href = "https://osu.ppy.sh" + urlPathname;
    } else {
        return false;
    }
        }

})();
