"use strict";
var temp = temp || {};

//För att öppna fönstret
//Fixa så att det faktiskt kopplas när man kallar på det från init.

temp.Window.open = function () {
    
    var e = this.element;
    
    console.log("Testar open");
    
    e.WindowContainer = document.CreateElement("div");
    e.WindowContainer.style.width = this.width + "px";
    e.WindowContainer.style.height = this.height + "px";
    e.WindowContainer.id = "windowContainer";
    e.header = document.createElement("div");
    e.header.style.width = this.width + "px";
    e.header.style.height = "20 px";
    e.header.id = "windowHeader";
    e.icon = document.createElement("img");
    e.icon.style.width = "10px";
    e.icon.style.height = "10 px";
    e.icon.classname = "icon";
    e.icon.setAttribute("src", this.icon);
    e.titleText = document.createElement("h2");
    e.textContent = this.title;
    e.contentDiv = document.createElement("div");
    e.button = document.createElement("img");
    e.button.setAttribute("src", "pic.png");
    e.footer = document.createElement("div");
    
    var desktopContainer = document.getElementById("container");
    
    //Lägger till i DOMen
    desktopContainer.appendChild(e.WindowContainer);
    
    e.WindowContainer.appendChild(e.header);
    e.WindowContainer.appendChild(e.contentDiv);
    e.WindowContainer.appendChild(e.footer);
    e.header.appendChild(e.icon);
    e.header.appendChild(e.titleText);
    e.header.appendChild(e.button);

    e.button.onclick = function () {
        // ta bort child här
    };
};

//Konsturktor
temp.Window = function (title, icon, height, width) {
    this.title = title;
    this.icon = icon;
    this.height = height;
    this.width = width;
    
    
    console.log(title, icon, height, width);
};