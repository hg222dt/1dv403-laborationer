"use strict";

var HEDE = HEDE || {};

//Initierande funktionen
HEDE.init = function () {
    var galleryButton = document.getElementById("galleryButton");
    
    
    galleryButton.onclick = function (e) {
        e.preventDefault();
        var galleryWindow = new HEDE.GalleryWindow();
        galleryWindow.open();
    };
};

window.onload = HEDE.init;