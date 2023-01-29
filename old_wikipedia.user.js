// ==UserScript==
// @name         Old Wikipedia Layout
// @namespace    http://melashri.net/wikipedia
// @version      0.2
// @description  Changes the layout of Wikipedia to the old version
// @author       Mohamed Elashri
// @match        https://*.wikipedia.org/*
// @run-at       document-start
// @grant        none
// @homepage     https://github.com/MohamedElashri/old_wikipedia_layout
// @downloadURL  https://github.com/MohamedElashri/old_wikipedia_layout/raw/main/old_wikipedia.user.js 
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';
    var currentURL = window.location.href;
    var questionMarkIndex = currentURL.indexOf('?');
    var hashIndex = currentURL.indexOf('#');
    if(currentURL.includes("useskin=vector")===false){
        if(questionMarkIndex !== -1){
            if(hashIndex !== -1){
                window.location.replace (currentURL.substring(0, hashIndex) + "&useskin=vector" + currentURL.substring(hashIndex));
            }
            else{
                window.location.replace (currentURL + "&useskin=vector");
            }
        }
        else if(hashIndex !== -1){
            window.location.replace (currentURL.substring(0, hashIndex) + "?useskin=vector" + currentURL.substring(hashIndex));
        }
        else{
            window.location.replace (currentURL + "?useskin=vector");
        }
    }

})();
