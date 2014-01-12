"use strict";

var HEDE = HEDE || {};

//ett objekt som ska veta var alla öppnade fönster ligger, samt var föster stängts. dvs var det sista fönstret ligger.
//Ska även ge funktionalitet för att veta vilka fönster som är de sista som få plats innan kanten på fönstret.

HEDE.windowStats = {
    clickCounter: 0,
    
    windowArray: [],
    
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

HEDE.windowPlacement = function () {
    var windowXYR = [];
    
    var xPos = HEDE.windowStats.firstWindowPosX + ((HEDE.windowStats.clickCounter-1) * 50 - (HEDE.windowStats.offsetX * (HEDE.windowStats.row - 1)));
    var yPos = HEDE.windowStats.firstWindowPosY + ((HEDE.windowStats.clickCounter-1) * 30 - (HEDE.windowStats.offsetY * (HEDE.windowStats.row - 1)));
    
    if(HEDE.windowStats.openReverse === false){
        HEDE.windowStats.count++;
        if((xPos + HEDE.windowStats.standardWidth > 1024) || (yPos + HEDE.windowStats.standardHeight > 570)){
            HEDE.windowStats.row++;
            HEDE.windowStats.clickCounter = 1;
        }
        
        xPos = HEDE.windowStats.firstWindowPosX + ((HEDE.windowStats.clickCounter-1) * 50);
        yPos = HEDE.windowStats.firstWindowPosY + ((HEDE.windowStats.clickCounter-1) * 30);
        
        xPos = xPos - HEDE.windowStats.offsetX * (HEDE.windowStats.row - 1);
        yPos = yPos - HEDE.windowStats.offsetY * (HEDE.windowStats.row - 1);
        
        windowXYR[0] = xPos;
        windowXYR[1] = yPos;
        
        HEDE.windowStats.windowsPlace.push(windowXYR);
    
        if(xPos < 0 || yPos + HEDE.windowStats.standardHeight > 570){
            HEDE.windowStats.openReverse = true;
            HEDE.windowStats.count = 1;
        }
    }
    
    if(HEDE.windowStats.openReverse === true){
            
        if(HEDE.windowStats.count===1 && ((yPos + HEDE.windowStats.standardHeight > 570) || (xPos + HEDE.windowStats.standardWidth > 1024))){
            HEDE.windowStats.row = HEDE.windowStats.row - 2;
            HEDE.windowStats.clickCounter = 1;
        }
        else if((xPos < 0) || (yPos + HEDE.windowStats.standardHeight > 570) || (xPos + HEDE.windowStats.standardWidth > 1024)){
            HEDE.windowStats.row--;
            HEDE.windowStats.clickCounter = 1;
            console.log("Ny rad. Row: " + HEDE.windowStats.row);
        }
        HEDE.windowStats.count++;
    
        xPos = HEDE.windowStats.firstWindowPosX + ((HEDE.windowStats.clickCounter-1) * 50);
        yPos = HEDE.windowStats.firstWindowPosY + ((HEDE.windowStats.clickCounter-1) * 30);
        
        xPos = xPos - HEDE.windowStats.offsetX * (HEDE.windowStats.row - 1);
        yPos = yPos - HEDE.windowStats.offsetY * (HEDE.windowStats.row - 1);
    
        windowXYR[0] = xPos;
        windowXYR[1] = yPos;
        
        HEDE.windowStats.windowsPlace.push(windowXYR);
    
        if(HEDE.windowStats.row === 0/*(xPos + HEDE.windowStats.standardWidth > 1024) || (yPos < 0)*/){
            HEDE.windowStats.openReverse = false;
            HEDE.windowStats.count = 0;
        }
    }
    
    return HEDE.windowStats.windowsPlace;
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
        var rssWindow = new HEDE.rssWindow();
        HEDE.windowStats.clickCounter++;
        HEDE.windowStats.windowAmount++;
        rssWindow.open();
        HEDE.getRSSFeed();
    };

};

window.onload = HEDE.init;


