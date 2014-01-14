"use strict";

var HEDE = HEDE || {};

HEDE.ImageWindow = function (imgNumber) {
    HEDE.Window.call(this, "Bild ur galleriet", "pics/imagesIcon.png", HEDE.windowStats.standardHeight, HEDE.windowStats.standardHeight);
};

HEDE.ImageWindow.prototype = Object.create(HEDE.Window.prototype);

HEDE.setImage = function (imgNumber) {
    var img2 = document.createElement("img");
    var span = document.createElement("span");
    span.style.display = "inline-block";
    span.style.height = "100%";
    span.style.verticalAlign = "middle";
    
    img2.setAttribute("src", HEDE.imageURLs[imgNumber].URL);
    
    var nodeList2 = document.getElementsByClassName("windowContent");
    var windowNode = nodeList2[nodeList2.length-1];
    
    if(HEDE.imageURLs[imgNumber].height > HEDE.imageURLs[imgNumber].width){
        img2.style.height = "100%";
        img2.style.position = "relative";
        img2.style.marginLeft = "auto";
        img2.style.marginRight = "auto";
        img2.style.display = "block";
    }   
    else{
        img2.style.width = "100%";
        img2.style.position = "relative";
        img2.style.display = "inline-block";
        img2.style.verticalAlign = "middle";
        windowNode.appendChild(span);
    }   
    
    windowNode.appendChild(img2);
    
    windowNode.style.overflow = "hidden";
};
