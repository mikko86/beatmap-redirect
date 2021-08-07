// ==UserScript==
// @name         akatsuki redirect
// @namespace    isak
// @version      1.5
// @description  redirects you to the osu.ppy.sh beatmap page
// @author       isak løvås
// @match        http://akatsuki.pw/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @include      http://osu.ppy.sh*
// @include      https://old.ppy.sh*
// @include      https://akatsuki.pw*
// @updateURL    https://github.com/isaklovas/beatmap-redirect/raw/main/userscript.user.js
// @downloadURL  https://github.com/isaklovas/beatmap-redirect/raw/main/userscript.user.js
// ==/UserScript==

(() => {
    "use strict";

    var url = window.location.hostname;
    var urlPathname = window.location.pathname;

    if (url == "akatsuki.pw" && urlPathname[7] == "p" && urlPathname[9] == "/") {
        let a = confirm("Do you want to redirect to osu.ppy.sh beatmap page?");
        if (a) {
            window.open("https://osu.ppy.sh" + urlPathname);
        }
    } else if (url == "akatsuki.pw" && urlPathname[1] == "b" && urlPathname[2] == "/") {
        let a = confirm("Do you want to redirect to osu.ppy.sh beatmap page?");
        if (a) {
            window.open("https://osu.ppy.sh" + urlPathname);
    } else {
        console.log("false");
    }
}

})();
