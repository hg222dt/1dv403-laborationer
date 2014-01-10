"use strict";

function AjaxCon(url, callback){
    var d1 = new Date();

    var xhr = this.getXHR();
    
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4)
        {
            if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304)
            {
                callback(xhr.responseText);
            }
            else
            {
                //ev lägga felhanterare här istället
                console.log("Läsfel, status:" + xhr.status);
            }
        }
    };
    
    xhr.open("get", url, true);
    //xhr.setRequestHeader('If-Modified-Since', 'Mon, 01 Sep 2007 00:00:00 GMT');
    xhr.send(null);
}

AjaxCon.prototype.getXHR = function() {
    var xhr = null;
    try {
        xhr = new XMLHttpRequest();
    }catch (error){
        try{
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }catch (error){
            throw new Error ("No XHR object available");
        }
    }
    return xhr;
}