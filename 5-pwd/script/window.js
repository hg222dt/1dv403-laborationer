"use strict";
var HEDE = HEDE || {};

//Konsturktor
HEDE.Window = function (title, icon, height, width) {
    this.title = title;
    this.icon = icon;
    this.height = height;
    this.width = width;
};

//För att öppna fönstret
//Fixa så att det faktiskt kopplas när man kallar på det från init.
HEDE.Window.prototype.open = function () {
    
    //huvudfönstret
    var WindowContainer = document.createElement("div");
    WindowContainer.style.width = this.width + "px";
    WindowContainer.style.height = this.height + "px";
    WindowContainer.className = "windowContainer";
    
    WindowContainer.style.position = "absolute";
    
    var windowsPosArr = HEDE.windowPlacement();
    var lastWindowPos = windowsPosArr[windowsPosArr.length-1];
    
    /*
    var thisWindowNumber = HEDE.windowStats.windowsPlace.length;
    //HEDE.windowStats.windowNumbers.push(windowsPosArr.length-1);
    
    console.log("Det finns: " + HEDE.windowStats.windowsPlace.length + " fönster uppe");
    //console.log("thisWindowNumber: " + thisWindowNumber);
    */
    
    WindowContainer.style.top = lastWindowPos[1] + "px";
    WindowContainer.style.left = lastWindowPos[0] + "px";
    
    WindowContainer.style.zIndex = HEDE.windowStats.clickCounter2+1;
    
    //header-div
    var header = document.createElement("div");
    header.style.width = this.width + "px";
    //header.style.height = 20 + "px";
    header.className = "windowHeader";
    
    //icon till vänster i header
    var icon = document.createElement("img");
    icon.style.width = "20px";
    icon.style.height = "20 px";
    icon.className = "windowIcon";
    icon.setAttribute("src", this.icon);
    
    //rut-titel i header
    var titleText = document.createElement("span");
    titleText.className = "windowTitle"
    titleText.textContent = this.title;
    
    //knapp för att stänga av fönstret
    var button = document.createElement("img");
    button.className = "buttonClose";
    button.setAttribute("src", "pics/closeImg.png");
    button.style.width = "15px";
    button.style.height = "15 px";
    
    //div för content
    var contentDiv = document.createElement("div");
    contentDiv.style.width = this.width + "px";
    contentDiv.style.height = (this.height - 60) + "px";
    contentDiv.className = "windowContent";
    
    
    //div för footer
    var footer = document.createElement("div");
    footer.style.width = this.width + "px";
    //footer.style.height = 20 + "px";
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
        //Iteration:
        //windowContainer tas bort
        //iteration infaller om det var sista fönstret som stängdes.
        //Fönster-element tas ur arrayet med alla fönsterelement
    
        desktopContainer.removeChild(WindowContainer);
        
        /*
        var lastRemoved = false;
        
        //Infaller om det stängda fönstret var det sista i ordningen av fönster.
        if(thisWindowNumber == HEDE.windowStats.windowsPlace.length){
            lastRemoved = true;
            console.log("last is removed");
        }
        */
        
        //Tar bort window-placerings-elementet ur sitt array.
        //HEDE.windowStats.windowsPlace.splice(thisWindowNumber-1, 1);
        
        /*
        //Tar bort window-numreringen ut sitt array.
        //HEDE.windowStats.windowNumbers.splice(thisWindowNumber, 1);
            
        if(lastRemoved === true){
            HEDE.windowStats.clickCounter = HEDE.windowStats.windowsPlace[HEDE.windowStats.windowsPlace.length-1][2];
            //HEDE.windowStats.row=1;
            //console.log("Clickcounter i window när fönstret togs bort: " + HEDE.windowStats.clickCounter);
            //console.log("Rowcounter i window när fönstret togs bort: " + HEDE.windowStats.row);
        }
        console.log("Det finns: " + HEDE.windowStats.windowsPlace.length + " fönster uppe");
        console.log("Fönster nr: " + HEDE.windowStats.windowsPlace[thisWindowNumber-1][2] + " stängdes.");
        console.log(thisWindowNumber);
        */
    };
    
    WindowContainer.onclick = function () {
        HEDE.windowStats.clickCounter2++;
        WindowContainer.style.zIndex = HEDE.windowStats.clickCounter2;
    };
    
    //console.log("Clickcounter i window när förnstret skapade: " + HEDE.windowStats.clickCounter);
};

HEDE.windowPlacement = function () {
    var windowXYR = [];
    
    //Förra windowpositionen
    var xPos = HEDE.windowStats.firstWindowPosX + ((HEDE.windowStats.clickCounter-1) * 50 - (HEDE.windowStats.offsetX * (HEDE.windowStats.row - 1)));
    var yPos = HEDE.windowStats.firstWindowPosY + ((HEDE.windowStats.clickCounter-1) * 30 - (HEDE.windowStats.offsetY * (HEDE.windowStats.row - 1)));
    
    
    if(HEDE.windowStats.openReverse === false){
        HEDE.windowStats.count++;
        if((xPos + HEDE.windowStats.standardWidth > 1024) || (yPos + HEDE.windowStats.standardHeight > 570)){
            HEDE.windowStats.row++;
            HEDE.windowStats.clickCounter = 1;
        }
        
        //Skapar nästkommande windowposition
        xPos = HEDE.windowStats.firstWindowPosX + ((HEDE.windowStats.clickCounter-1) * 50) - HEDE.windowStats.offsetX * (HEDE.windowStats.row - 1);
        yPos = HEDE.windowStats.firstWindowPosY + ((HEDE.windowStats.clickCounter-1) * 30) - HEDE.windowStats.offsetY * (HEDE.windowStats.row - 1);
        
        //Lägger till x oxh y-positioner i respektive element i arrayet
        windowXYR[0] = xPos;
        windowXYR[1] = yPos;
        
        //Pushar arrayet till arrayet innehållande alla windowelement.
        HEDE.windowStats.windowsPlace.push(windowXYR);
    
        if(xPos < 0 || yPos + HEDE.windowStats.standardHeight > 570){
            HEDE.windowStats.openReverse = true;
            HEDE.windowStats.count = 1;
        }
    }
    
    if(HEDE.windowStats.openReverse === true){
            
        if(HEDE.windowStats.count===1 && ((yPos + HEDE.windowStats.standardHeight > 570) || (xPos + HEDE.windowStats.standardWidth > 1024))){
            HEDE.windowStats.row = HEDE.windowStats.row - 2;
            HEDE.windowStats.clickCounter = 1;
        }
        else if((xPos < 0) || (yPos + HEDE.windowStats.standardHeight > 570) || (xPos + HEDE.windowStats.standardWidth > 1024)){
            HEDE.windowStats.row--;
            HEDE.windowStats.clickCounter = 1;
        }
        HEDE.windowStats.count++;
    
        xPos = HEDE.windowStats.firstWindowPosX + ((HEDE.windowStats.clickCounter-1) * 50);
        yPos = HEDE.windowStats.firstWindowPosY + ((HEDE.windowStats.clickCounter-1) * 30);
        
        xPos = xPos - HEDE.windowStats.offsetX * (HEDE.windowStats.row - 1);
        yPos = yPos - HEDE.windowStats.offsetY * (HEDE.windowStats.row - 1);
    
        windowXYR[0] = xPos;
        windowXYR[1] = yPos;
        
        HEDE.windowStats.windowsPlace.push(windowXYR);
    
        if(HEDE.windowStats.row === 0){
            HEDE.windowStats.openReverse = false;
            HEDE.windowStats.count = 0;
        }
    }
    
    var thisWindowNumber = HEDE.windowStats.windowsPlace.length-1;
    
    HEDE.windowStats.windowsPlace[thisWindowNumber][2] = thisWindowNumber;
    
    return HEDE.windowStats.windowsPlace;
};
