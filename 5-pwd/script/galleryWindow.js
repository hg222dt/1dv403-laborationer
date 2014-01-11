//Ta bort eval och ta in parse

"use strict";
var HEDE = HEDE || {};

HEDE.ImageURLs = "";

HEDE.GalleryWindow = function () {
    HEDE.Window.call(this, "Galleri", "pics/imagesIcon.png", HEDE.windowStats.standardHeight , HEDE.windowStats.standardWidth );
};

HEDE.GalleryWindow.prototype = Object.create(HEDE.Window.prototype);

HEDE.getImages = function () {
    //ajaxanrop
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        
        var nodeList = document.getElementsByClassName("windowContent");
        var lastNode = nodeList[nodeList.length-1];
        var loaderIcon = document.createElement("img");
        loaderIcon.setAttribute("src", "pics/ajax-loader.gif");
        loaderIcon.setAttribute("class","loaderIcon");
        var nodeListFooter = document.getElementsByClassName("windowFooter");
        var lastFooter = nodeListFooter[nodeListFooter.length-1];
        
        var isCallbackOn = false;
        var isLoaderIconThere = false;
        
        var myCallBack = function (responseText) {
            isCallbackOn = true;
            var jsonStr = responseText;
            HEDE.imageURLs = JSON.parse(jsonStr);
            
            var maxThumbWidth = function () {
                HEDE.arrayThumbWidth = [];
                
                for(var i in HEDE.imageURLs){
                    HEDE.arrayThumbWidth.push(HEDE.imageURLs[i].thumbWidth);
                }
                
                return Math.max.apply( null, HEDE.arrayThumbWidth );
            };
            
            var maxThumbHeight = function () {
                HEDE.arrayThumbHeight = [];
                
                for(var i in HEDE.imageURLs){
                    HEDE.arrayThumbHeight.push(HEDE.imageURLs[i].thumbHeight);
                }
                
                return Math.max.apply( null, HEDE.arrayThumbHeight );
            };
    
            if(isLoaderIconThere){
                lastFooter.removeChild(loaderIcon);
            }
            
            var containerDiv = document.createElement("div");
            containerDiv.setAttribute("class", "containingDiv");
            
            //renderar ut alla bilder i windowContent
            for(var i in HEDE.imageURLs)(function(i){ 
                var img = document.createElement("img");
                img.setAttribute("src", HEDE.imageURLs[i].thumbURL);
                img.style.width = HEDE.imageURLs[i].thumbWidth + "px";
                img.style.height = HEDE.imageURLs[i].thumbHeight  + "px";
                var bgDiv = document.createElement("div");
                bgDiv.setAttribute("class", "bgDiv");
                bgDiv.style.width = maxThumbWidth() + "px";
                bgDiv.style.height = maxThumbHeight() + "px";
                
                lastNode.appendChild(containerDiv);
                containerDiv.appendChild(bgDiv);
                bgDiv.appendChild(img);
            
                img.onclick = function () {
                    //HEDE.imageLoader.setBackground(i);
                    var imageWindow = new HEDE.ImageWindow(i);
                    HEDE.windowStats.clickCounter++;
                    imageWindow.open();
                    HEDE.setImage(i);
                    console.log(HEDE.windowStats.clickCounter);
                }
            })(i);
        };
        
        //Gör så att ikonen endast visas om anropet tar längre än 300 ms
        new AjaxCon(url, myCallBack);
        setTimeout(function() {
            if(!isCallbackOn){
                lastFooter.appendChild(loaderIcon);
                isLoaderIconThere = true;
            }
        }, 300);
        
        return false;
}

HEDE.imageLoader = {
    setBackground: function (i) {
        var container = document.getElementById("container");
        container.style.backgroundImage = "url(" + HEDE.imageURLs[i].URL +")";
    }
};