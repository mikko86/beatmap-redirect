// ==UserScript==
// @name         beatmap-redirect
// @namespace    isak
// @version      1.0
// @description  redirects you to the osu.ppy.sh beatmap page
// @author       isak løvås
// @match        https://*/*
// @icon         
// @grant        none
// @include      http://osu.ppy.sh*
// @include      https://ripple.moe* 
// @include      https://osu.gatari.pw*
// @include      https://akatsuki.pw*
// @include      https://kawata.pw*
// @include      https://ainu.pw*
// @include      https://lemres.de*
// @include      https://enjuu.click*
// @include      https://kurikku.pw*
// @include      https://osu.datenshi.pw*
// @include      https://ez-pp.farm*
// @include      https://ussr.pl*
// @include      https://iteki.pw*
// @updateURL    https://github.com/isaklovas/beatmap-redirect/raw/main/redirect.user.js
// @downloadURL  https://github.com/isaklovas/beatmap-redirect/raw/main/redirect.user.js
// ==/UserScript==


(() => { 
    "use strict";


    var url = window.location.hostname;
    var urlPathname = window.location.pathname;


    function redirect(urlPathname) { 
        if (urlPathname.slice(-1) != "s" && (urlPathname.includes("rank_request") == false)) {
            if (urlPathname.slice(-1) != "/") { // kinda messy but didnt work in the same if statement for whatever reason, idk javascript is weird
                if (confirm("Do you want to redirect to osu.ppy.sh beatmap page?")) {
                    location.href = "https://osu.ppy.sh" + urlPathname;
                }
            }
        }   
    }

    /* 
    
    thought there was gonna be alot more edge cases with beatmap url's but i forgot every server runs on the same ripple code lmao
    so im just going to keep it an if else hell

    ---

    no idea if it works since im too lazy to sign up for all the private servers, should work since every server runs on ripple code

    tbh who even plays on these random-ass servers lol
    
    */

    // probably super buggy
    // yanderedev
    if (url.includes("ripple.moe") && urlPathname.includes("beatmaps")) {
        redirect(urlPathname);
    } 
    else if (url.includes("osu.gatari.pw") && urlPathname.includes("b")) {
        redirect(urlPathname);
    }
    else if (url.includes("akatsuki.pw") && urlPathname.includes("b")) {
        redirect(urlPathname);
    }
    else if (url.includes("kawata.pw") && urlPathname.includes("b")) {
        redirect(urlPathname);
    }
    else if (url.includes("ainu.pw") && urlPathname.includes("b")) {
        redirect(urlPathname);
    }
    else if (url.includes("osu.lemres.de") && urlPathname.includes("beatmaps")) {
        redirect(urlPathname);
    }
    else if (url.includes("enjuu.click") && urlPathname.includes("b")) {
        redirect(urlPathname);
    }
    else if (url.includes("kurikku.pw") && urlPathname.includes("b")) {
        redirect(urlPathname);
    }
    else if (url.includes("osu.datenshi.pw") && urlPathname.includes("b")) {
        redirect(urlPathname);
    }
    else if (url.includes("ez-pp.farm") && urlPathname.includes("beatmaps")) {
        redirect(urlPathname);
    }
    else if (url.includes("ussr.pl") && urlPathname.includes("beatmaps")) {
        redirect(urlPathname);
    }
    // what the hell iteki has auto redirect very poggers !!!
    else if (url.includes("iteki.pw") && urlPathname.includes("")) {

    }

})();