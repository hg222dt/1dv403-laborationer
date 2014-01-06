"use strict";

var HEDE = HEDE || {};

//ett objekt som ska veta var alla öppnade fönster ligger, samt var föster stängts. dvs var det sista fönstret ligger.
//Ska även ge funktionalitet för att veta vilka fönster som är de sista som få plats innan kanten på fönstret.

HEDE.windowStats = {
    clickCounter: 0,
    
    windowNodes: function () {
        var nodeList = document.getElementsByClassName("windowContainer");
        
        //var imageDiv = nodeList[nodeList.length-1];
        
        return nodeList;
    },
    
    clickCounter2: 0
};

//Initierande funktionen
HEDE.init = function () {
    var galleryButton = document.getElementById("galleryButton");
    
    galleryButton.onclick = function (e) {
        e.preventDefault();
        var galleryWindow = new HEDE.GalleryWindow();
        galleryWindow.open();
        HEDE.windowStats.clickCounter++;
        console.log(HEDE.clickCounter);
        HEDE.getImages();
    };
};

window.onload = HEDE.init;
//ett objekt som ska veta var alla öppnade fönster ligger, samt var föster stängts. dvs var det sista fönstret ligger.
//Ska även ge funktionalitet för att veta vilka fönster som är de sista som få plats innan kanten på fönstret.
    