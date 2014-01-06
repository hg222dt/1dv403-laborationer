"use strict";
var HEDE = HEDE || {};

HEDE.GalleryWindow = function () {
    HEDE.Window.call(this, "Bildgalleri", "pics/7.png", 400, 400);
};

HEDE.GalleryWindow.prototype = Object.create(HEDE.Window.prototype);

HEDE.getImages = function () {
    //ajaxanrop
   
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        
        var myCallBack = function (responseText) {
            var jsonStr = responseText;
            var images = eval(jsonStr);
            alert("Ajax redo");
            
            var nodeList = document.getElementsByClassName("windowContent");
            
            //renderar ut alla bilder i windowContent
            for(var i in images){ 
                
            var img = document.createElement("img");
            img.setAttribute("src", images[i].thumbURL);
            //var imageDiv = document.getElementsByClassName("windowContent");
            
            var imageDiv = nodeList[nodeList.length-1];
        
            imageDiv.appendChild(img);
            
            }
        };
        
        new AjaxCon(url, myCallBack);
        
        return false;
    
    
    //forloop som renderar ut alla små bilder.
}