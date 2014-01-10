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
    
    standardHeight: 300,
    
    offsetX: 50,
    
    offsetY: -40,
    
    firstWindowPosX: 500,
    
    firstWindowPosY: 50,
    
    row: 1,
    
    windowsPlace: [],
    
    openReverse: false,
    
};

HEDE.windowPlacement = function () {
    
        var windowXYR = [];
        
        var xPos = HEDE.windowStats.firstWindowPosX + ((HEDE.windowStats.clickCounter-1) * 50 - (HEDE.windowStats.offsetX * (HEDE.windowStats.row - 1)));
        var yPos = HEDE.windowStats.firstWindowPosY + ((HEDE.windowStats.clickCounter-1) * 30 - (HEDE.windowStats.offsetY * (HEDE.windowStats.row - 1)));
        
        console.log("Vänsterkant av fönstret: " + xPos);
        
    if(HEDE.windowStats.openReverse === false){
        
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
            console.log("Nu ska det inte gå att trycka mer.");
            //Avrbyt öppningen av fönstret
            //throw "Stäng senaste fönstret";
            HEDE.windowStats.openReverse = true;
        }
    }
    
    if(HEDE.windowStats.openReverse === true){
        var count = 0;
        
        while(HEDE.windowStats.openReverse === true){
            count++;
            
            if(count === 1){
                HEDE.windowStats.row = HEDE.windowStats.row - 2;
                HEDE.windowStats.clickCounter = 1;
            }
            
            else if((xPos < 0) || (yPos + HEDE.windowStats.standardHeight > 570) || (xPos + HEDE.windowStats.standardWidth > 1024)){
                HEDE.windowStats.row--;
                HEDE.windowStats.clickCounter = 1;
                console.log("Ny rad. Row: " + HEDE.windowStats.row);
            }
        
            xPos = HEDE.windowStats.firstWindowPosX + ((HEDE.windowStats.clickCounter-1) * 50);
            yPos = HEDE.windowStats.firstWindowPosY + ((HEDE.windowStats.clickCounter-1) * 30);
            
            xPos = xPos - HEDE.windowStats.offsetX * (HEDE.windowStats.row - 1);
            yPos = yPos - HEDE.windowStats.offsetY * (HEDE.windowStats.row - 1);
        
            windowXYR[0] = xPos;
            windowXYR[1] = yPos;
            
            HEDE.windowStats.windowsPlace.push(windowXYR);
        
            if((xPos + HEDE.windowStats.standardWidth > 1024) || (yPos < 0)){
                console.log("Nu ska det inte gå att trycka mer.");
                HEDE.windowStats.openReverse = false;
            }
        }
    }
    
    return HEDE.windowStats.windowsPlace;
};

//Initierande funktionen
HEDE.init = function () {
    var galleryButton = document.getElementById("galleryButton");
    
    galleryButton.onclick = function (e) {
        e.preventDefault();
        var galleryWindow = new HEDE.GalleryWindow();
        HEDE.windowStats.clickCounter++;
        HEDE.windowStats.windowAmount++;
        galleryWindow.open();
        HEDE.getImages();
    };

};

window.onload = HEDE.init;
