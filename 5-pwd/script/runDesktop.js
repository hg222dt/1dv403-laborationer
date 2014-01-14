"use strict";

var HEDE = HEDE || {};

//ett objekt som ska veta var alla öppnade fönster ligger, samt var föster stängts. dvs var det sista fönstret ligger.
//Ska även ge funktionalitet för att veta vilka fönster som är de sista som få plats innan kanten på fönstret.

HEDE.windowStats = {
    clickCounter: 0,
    
    windowArray: [],
    
    windowNumbers: [],
    
    windowAmount: 0,
    
    windowNodes: function () {
        var nodeList = document.getElementsByClassName("windowContainer");
        
        //var imageDiv = nodeList[nodeList.length-1];
        
        return nodeList;
    },
    
    clickCounter2: 0,
    
    standardWidth: 400,
    
    standardHeight: 400,
    
    offsetX: 50,
    
    offsetY: 0,
    
    firstWindowPosX: 500,
    
    firstWindowPosY: 50,
    
    row: 1,
    
    windowsPlace: [],
    
    openReverse: false,
    
    count: 0
    
};

//Initierande funktionen
HEDE.init = function () {
    
    //var galleryButton = document.getElementById("galleryButton");
    var container = document.getElementById("container");
    
    var transDiv = document.createElement("div");
    transDiv.setAttribute("id", "transTitleDiv");
    
    var mainTitle = document.createElement("h1");
    var titleText = document.createTextNode("Henkes Streetview");
    mainTitle.appendChild(titleText);
    
    var menuBar = document.createElement("div");
    menuBar.setAttribute("id", "menuBar");
    
    //Galleri-länk
    var link1 = document.createElement("a");
    link1.setAttribute("href","#");
    link1.setAttribute("id", "galleryButton");
    var imgLink1 = document.createElement("img");
    imgLink1.setAttribute("src","pics/imagesIcon.png");
    
    var span1 = document.createElement("span");
    var span1Text = document.createTextNode("Galleri");
    
    link1.appendChild(imgLink1);
    link1.appendChild(span1);
    span1.appendChild(span1Text);
    
    //RSS-länk
    var link2 = document.createElement("a");
    link2.setAttribute("href","#");
    link2.setAttribute("id", "rssButton");
    var imgLink2 = document.createElement("img");
    imgLink2.setAttribute("src","pics/imagesIcon.png");
    
    var span2 = document.createElement("span");
    var span2Text = document.createTextNode("RSS - dn.se");
    
    link2.appendChild(imgLink2);
    link2.appendChild(span2);
    span2.appendChild(span2Text);
    
    //Memory-länk
    var link3 = document.createElement("a");
    link3.setAttribute("href","#");
    link3.setAttribute("id", "memoryButton");
    var imgLink3 = document.createElement("img");
    imgLink3.setAttribute("src","pics/imagesIcon.png");
    
    var span3 = document.createElement("span");
    var span3Text = document.createTextNode("Memory");
    
    link3.appendChild(imgLink3);
    link3.appendChild(span3);
    span3.appendChild(span3Text);
    
    
    
    setTimeout(function() {
        container.appendChild(transDiv);
    }, 2000);
    
    setTimeout(function() {
        container.appendChild(mainTitle);
    }, 3000);
    
    setTimeout(function() {
        container.appendChild(menuBar);
    }, 4000);
    
    setTimeout(function() {
        menuBar.appendChild(link1);
    }, 4200);
    
    setTimeout(function() {
        menuBar.appendChild(link2);
    }, 4400);
    
    setTimeout(function() {
        menuBar.appendChild(link3);
    }, 4600);
    
    
    link1.onclick = function (e) {
        e.preventDefault();
        var galleryWindow = new HEDE.GalleryWindow();
        HEDE.windowStats.clickCounter++;
        HEDE.windowStats.windowAmount++;
        galleryWindow.open();
        HEDE.getImages();
    };
    
    link2.onclick = function (e) {
        e.preventDefault();
        var rssWindow = new HEDE.RssWindow();
        HEDE.windowStats.clickCounter++;
        HEDE.windowStats.windowAmount++;
        rssWindow.open();
        HEDE.getRSSFeed();
    };
    
    link3.onclick = function (e) {
        e.preventDefault();
        var memoryWindow = new HEDE.MemoryWindow();
        HEDE.windowStats.clickCounter++;
        HEDE.windowStats.windowAmount++;
        memoryWindow.open();
        memoryWindow.startGame();
    };

};

window.onload = HEDE.init;


