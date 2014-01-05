"use strict";
var HEDE = HEDE || {};

//Konsturktor
HEDE.Window = function (title, icon, height, width) {
    this.title = title;
    this.icon = icon;
    this.height = height;
    this.width = width;
    
    //Skriver ut för att se så att konstruktorn verkligen anropas
    console.log(title, icon, height, width);
};

//För att öppna fönstret
//Fixa så att det faktiskt kopplas när man kallar på det från init.
HEDE.Window.prototype.open = function () {
    
    console.log("Open körs");
    
    //huvudfönstret
    var WindowContainer = document.createElement("div");
    WindowContainer.style.width = this.width + "px";
    WindowContainer.style.height = this.height + "px";
    WindowContainer.className = "windowContainer";
    
    WindowContainer.style.position = "absolute";
    WindowContainer.style.top = 30 + "px";
    WindowContainer.style.left = 400 + "px";
    
    
    //header-div
    var header = document.createElement("div");
    header.style.width = this.width + "px";
    header.style.height = 20 + "px";
    header.className = "windowHeader";
    
    //icon till vänster i header
    var icon = document.createElement("img");
    icon.style.width = "10px";
    icon.style.height = "10 px";
    icon.className = "icon";
    icon.setAttribute("src", this.icon);
    
    //rut-titel i header
    var titleText = document.createElement("span");
    titleText.textContent = this.title;
    
    //knapp för att stänga av fönstret
    var button = document.createElement("img");
    button.setAttribute("src", "pic.png");
    
    //div för content
    var contentDiv = document.createElement("div");
    contentDiv.style.width = this.width + "px";
    contentDiv.style.height = 20 + "px";
    contentDiv.className = "windowContent";
    
    var footer = document.createElement("div");
    footer.style.width = this.width + "px";
    footer.style.height = 20 + "px";
    footer.className = "windowFooter";
    
    var desktopContainer = document.getElementById("container");
    
    //Lägger till i DOMen
    desktopContainer.appendChild(WindowContainer);
    
    WindowContainer.appendChild(header);
    WindowContainer.appendChild(contentDiv);
    WindowContainer.appendChild(footer);
    header.appendChild(icon);
    header.appendChild(titleText);
    header.appendChild(button);

    //För att stänga fönstret
    button.onclick = function () {
        desktopContainer.removeChild(WindowContainer);
    };
};



/*
        nodeList = document.getElementsByClassName("nwcontent"),
        contentDiv = nodeList[nodeList.length-1],
        
        */