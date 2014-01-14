"use strict";
var HEDE = HEDE || {};

HEDE.GameCard = function (cardValue, cardOrder) {
    
    //Returnerar siffervärdet på ett memorykort.
    this.getCardValue = function () {
        return cardValue;
    }   
    
    //Returnerar värdet som symboliserar ordningen på ett memory-kort
    this.getCardOrder = function () {
        return cardOrder;
    }
    
    //Returnerar en variabel som är en img-tagg med hänvisning till en viss bild.
    this.getImgDown = function () {
        var imgCardDown = document.createElement("img");
        imgCardDown.setAttribute("src", "picsMemory/" + cardValue + ".png");
        return imgCardDown;
    }
    
    //Returnerar variabel som innehåller bild på ovansidan kortet.
    this.getImgUp = function () {
        var imgCardUp = document.createElement("img");
        imgCardUp.setAttribute("src", "picsMemory/0.png");
        imgCardUp.setAttribute("id", "img" + cardOrder);
        return imgCardUp;
    }
    
    //Vänder upp memory-kortet.
    this.setCardToUp = function (imgTag) {
        //var imgTag = document.getElementById("img" + cardOrder);
        imgTag.setAttribute("src", "picsMemory/"+ cardValue +".png");
    }
    
    //Vänder tillbaka meory-kortet upp och ner igen.
    this.setCardToDown = function () {
        var imgTag = document.getElementById("img" + cardOrder);
        imgTag.setAttribute("src", "picsMemory/0.png");
    }
    
    //Variabel som säger om objektet är klickbart eller inte.
    this.clickable = true;
    
    return this;
}