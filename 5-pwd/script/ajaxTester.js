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
            //rsposnse-text skaomvandlas till vaiabel med hjälp av json.
            alert(responseText);
        };
        
        new AjaxCon(url, myCallBack);
        
        return false;
    }
};

window.onload = AjaxTester.init;    