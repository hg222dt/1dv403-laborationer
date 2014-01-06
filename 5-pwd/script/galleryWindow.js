"use strict";
var HEDE = HEDE || {};

HEDE.ImageURLs = "";

HEDE.GalleryWindow = function () {
    HEDE.Window.call(this, "Bildgalleri", "pics/7.png", 400, 400);
};

HEDE.GalleryWindow.prototype = Object.create(HEDE.Window.prototype);

HEDE.getImages = function () {
    //ajaxanrop
   
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        
        var nodeList = document.getElementsByClassName("windowContent");
        var lastNode = nodeList[nodeList.length-1];
        var loaderIcon = document.createElement("img");
        loaderIcon.setAttribute("src", "pics/ajax-loader.gif")
        loaderIcon.setAttribute("class","loaderIcon");
        var nodeListFooter = document.getElementsByClassName("windowFooter");
        var lastFooter = nodeListFooter[nodeListFooter.length-1];
        
        var myCallBack = function (responseText) {
            var jsonStr = responseText;
            HEDE.imageURLs = eval(jsonStr);
            
            var container = document.getElementById("container");
            
            setTimeout(function() {
                lastFooter.removeChild(loaderIcon);
            }, 300);
            
            //renderar ut alla bilder i windowContent
            for(var i in HEDE.imageURLs)(function(i){ 
                
                var img = document.createElement("img");
                img.setAttribute("src", HEDE.imageURLs[i].thumbURL);
                
                lastNode.appendChild(img);
            
                img.onclick = function () {
                    HEDE.imageLoader.setBackground(i);
                }
            })(i);
        };
        
        //Gör så att ikonen endast visas om anropet tar längre än 300 ms
        new AjaxCon(url, myCallBack);
        setTimeout(function() {
            lastFooter.appendChild(loaderIcon);
        }, 300);
        
        return false;
}

HEDE.imageLoader = {
    setBackground: function (i) {
        var container = document.getElementById("container");
        container.style.backgroundImage = "url(" + HEDE.imageURLs[i].URL +")";
    }
};






