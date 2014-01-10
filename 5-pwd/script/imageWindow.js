"use strict";

var HEDE = HEDE || {};

HEDE.ImageWindow = function (imgNumber) {
    HEDE.Window.call(this, "Bild ur galleriet", "pics/imagesIcon.png", 300, 400);
};

HEDE.ImageWindow.prototype = Object.create(HEDE.Window.prototype);

HEDE.setImage = function (imgNumber) {
    var img2 = document.createElement("img");
    img2.setAttribute("src", HEDE.imageURLs[imgNumber].URL);
    
    if(HEDE.imageURLs[imgNumber].height > HEDE.imageURLs[imgNumber].width){
        img2.style.height = "100%";
        img2.style.position = "relative";
        img2.style.marginLeft = "auto";
        img2.style.marginRight = "auto";
        img2.style.display = "block";
    }   
    else{
        img2.style.width = "100%";
    }   
    
    var nodeList2 = document.getElementsByClassName("windowContent");
    console.log("Nodelist length: " + nodeList2.length);
    var windowNode = nodeList2[nodeList2.length-1];
    console.log(windowNode);
    windowNode.appendChild(img2);
    
    windowNode.style.overflow = "hidden";
};