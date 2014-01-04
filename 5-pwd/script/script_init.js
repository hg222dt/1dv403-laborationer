"use strict";

var temp = temp || {};

temp.init = function () {
    var galleryButton = document.getElementById("galleryButton");
    
    
    galleryButton.onclick = function (e) {
        e.preventDefault();
        temp.newGalleryWindow();
    };
};
    
temp.newGalleryWindow = function () {
    var galleryWindow = new temp.GalleryWindow();
    galleryWindow.open();
};

window.onload = temp.init;