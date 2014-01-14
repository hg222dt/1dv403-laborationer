"use strict";
var HEDE = HEDE || {};

HEDE.RssWindow = function () {
    HEDE.Window.call(this, "RSS-flöde", "pics/imagesIcon.png", HEDE.windowStats.standardHeight , HEDE.windowStats.standardWidth );
};

HEDE.RssWindow.prototype = Object.create(HEDE.Window.prototype);

HEDE.getRSSFeed = function () {
    //ajaxanrop
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/rssproxy/?url=" + escape("http://www.dn.se/m/rss/senaste-nytt");
        
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

            var containerDiv = document.createElement("div");
            containerDiv.setAttribute("class", "containingDiv");
            
            containerDiv.innerHTML = responseText;
            
            lastNode.appendChild(containerDiv);
            
            if(isLoaderIconThere){
                lastFooter.removeChild(loaderIcon);
            }
            
            var containerDiv = document.createElement("div");
            containerDiv.setAttribute("class", "containingDiv");
            
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