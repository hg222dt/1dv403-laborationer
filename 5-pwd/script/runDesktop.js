"use strict";

var HEDE = HEDE || {};

HEDE.clickCounter = 0;

//Initierande funktionen
HEDE.init = function () {
    var galleryButton = document.getElementById("galleryButton");
    
    galleryButton.onclick = function (e) {
        e.preventDefault();
        var galleryWindow = new HEDE.GalleryWindow();
        galleryWindow.open();
        HEDE.clickCounter++;
        console.log(HEDE.clickCounter);
    };
};

window.onload = HEDE.init;