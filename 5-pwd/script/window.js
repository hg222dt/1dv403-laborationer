"use strict";
var temp = temp || {};

//Konsturktor
temp.Window = function (title, icon, height, width) {
    this.title = title;
    this.icon = icon;
    this.height = height;
    this.width = width;
    
    //Skriver ut för att se så att konstruktorn verkligen anropas
    console.log(title, icon, height, width);
};

//För att öppna fönstret
//Fixa så att det faktiskt kopplas när man kallar på det från init.
temp.Window.open = function () {
    
    console.log("Open körs");
    
    var WindowContainer = document.createElement("div");
    WindowContainer.style.width = this.width + "px";
    WindowContainer.style.height = this.height + "px";
    WindowContainer.id = "windowContainer";
    
    var header = document.createElement("div");
    header.style.width = this.width + "px";
    header.style.height = "20 px";
    header.id = "windowHeader";
    
    var icon = document.createElement("img");
    icon.style.width = "10px";
    icon.style.height = "10 px";
    icon.classname = "icon";
    icon.setAttribute("src", this.icon);
    
    var titleText = document.createElement("h2");
    titleText.textContent = this.title;
    
    var contentDiv = document.createElement("div");
    
    var button = document.createElement("img");
    button.setAttribute("src", "pic.png");
    
    var footer = document.createElement("div");
    
    var desktopContainer = document.getElementById("container");
    
    //Lägger till i DOMen
    desktopContainer.appendChild(WindowContainer);
    
    WindowContainer.appendChild(header);
    WindowContainer.appendChild(contentDiv);
    WindowContainer.appendChild(footer);
    header.appendChild(icon);
    header.appendChild(titleText);
    header.appendChild(button);

    button.onclick = function () {
        // ta bort child här
    };
};

