"use strict";

var HEDE = HEDE || {};

HEDE.clickCounter = 0;
//ett objekt som ska veta var alla öppnade fönster ligger, samt var föster stängts. dvs var det sista fönstret ligger.
//Ska även ge funktionalitet för att veta vilka fönster som är de sista som få plats innan kanten på fönstret.
    

//Initierande funktionen
HEDE.init = function () {
    var galleryButton = document.getElementById("galleryButton");
    
    galleryButton.onclick = function (e) {
        e.preventDefault();
        var galleryWindow = new HEDE.GalleryWindow();
        galleryWindow.open();
        HEDE.clickCounter++;
        console.log(HEDE.clickCounter);
        HEDE.getImages();
    };
};

window.onload = HEDE.init;
//ett objekt som ska veta var alla öppnade fönster ligger, samt var föster stängts. dvs var det sista fönstret ligger.
//Ska även ge funktionalitet för att veta vilka fönster som är de sista som få plats innan kanten på fönstret.
    