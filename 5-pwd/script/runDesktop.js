"use strict";

var temp = temp || {};

//Initierande funktionen
temp.init = function () {
    var galleryButton = document.getElementById("galleryButton");
    
    
    galleryButton.onclick = function (e) {
        e.preventDefault();
        var galleryWindow = new temp.GalleryWindow();
        galleryWindow.open();
    };
};

window.onload = temp.init;