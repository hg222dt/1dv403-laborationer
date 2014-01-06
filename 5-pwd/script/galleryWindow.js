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
        
        var myCallBack = function (responseText) {
            var jsonStr = responseText;
            HEDE.imageURLs = eval(jsonStr);
            alert("Ajax redo");
            
            var nodeList = document.getElementsByClassName("windowContent");
            var container = document.getElementById("container");
            
            
            //renderar ut alla bilder i windowContent
            for(var i in HEDE.imageURLs)(function(i){ 
                
                var img = document.createElement("img");
                img.setAttribute("src", HEDE.imageURLs[i].thumbURL);
                
                var imageDiv = nodeList[nodeList.length-1];
            
                imageDiv.appendChild(img);
            
                img.onclick = function () {
                    HEDE.imageLoader.setBackground(i);
                }
            })(i);
        };
        
        new AjaxCon(url, myCallBack);
        
        return false;
}

HEDE.imageLoader = {
    setBackground: function (i) {
        var container = document.getElementById("container");
        container.style.backgroundImage = "url(" + HEDE.imageURLs[i].URL +")";
        console.log(HEDE.imageURLs[i].URL);
        console.log("setBackground körs");
        //console.log(i);
    }
};




