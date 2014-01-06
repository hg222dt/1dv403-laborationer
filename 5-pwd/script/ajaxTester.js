"use strict";

var AjaxTester = {
    init: function () {
        var productLinks = document.getElementById("productListing").getElementsByTagName("a");
        
        for(var i in productLinks){
            productLinks[i].onclick = AjaxTester.productLinkClicked;
        }
    },
    productLinkClicked: function() {
        var url = "http://homepage.lnu.se/staff/tstjo/labbyServer/imgviewer/";
        
        var myCallBack = function (responseText) {
            var jsonStr = responseText;
            var images = eval(jsonStr);
            alert(images[0].URL);
            
            var img = document.createElement("img");
            img.setAttribute("src", images[0].URL);
            var imageDiv = document.getElementById("imageDiv");
            imageDiv.appendChild(img);
        };
        
        new AjaxCon(url, myCallBack);
        
        return false;
    }
};

window.onload = AjaxTester.init;    