"use strict";

var PRDT = PRDT || {};

PRDT.init = function () {
    var galleryButton = document.getElementById("galleryButton");
    
    galleryButton.onclick = function () {
        PRDT.galleryWindow();
    };
    
    PRDT.galleryWindow = function () {
        var galleryWindow = new PRDT._galleryWindow();
        galleryWindow.openWindow();
    };
};

window.onload = PRDT.init;