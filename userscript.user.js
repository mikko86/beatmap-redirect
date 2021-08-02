// ==UserScript==
// @name         akatsuki redirect
// @namespace    isak
// @version      1.2
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
// @updateURL    https://raw.githubusercontent.com/isaklovas/beatmap-redirect/master/userscript.js
// @downloadURL  https://raw.githubusercontent.com/isaklovas/beatmap-redirect/master/userscript.js
// ==/UserScript==

(() => {
    "use strict";

    var url = window.location.hostname;
    var urlPathname = window.location.pathname;

    if (url === "akatsuki.pw" && urlPathname[1] === "b" && urlPathname[2] == "/" && urlPathname[10] == "1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9") {
        let a = confirm("Do you want to redirect to osu.ppy.sh beatmap page?")
        if (a === true && url === "akatsuki.pw" && urlPathname[1] === "b") {
            window.open("https://osu.ppy.sh" + urlPathname);
    } else {
        return false;
    }
        }

})();
