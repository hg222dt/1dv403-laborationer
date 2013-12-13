"use strict";

function GameCard(cardValue, cardOrder) {
    
    this.getCardValue = function () {
        return cardValue;
    }   
    
    this.getCardOrder = function () {
        return cardOrder;
    }
    
    this.getImgDown = function () {
        var imgCardDown = document.createElement("img");
        imgCardDown.setAttribute("src", "pics/" + cardValue + ".png");
        
        
        return imgCardDown;
    }
    
    //Returnerar variabel som innehåller bild på ovansidan kortet.
    this.getImgUp = function () {
        var imgCardUp = document.createElement("img");
        imgCardUp.setAttribute("src", "pics/0.png");
        imgCardUp.setAttribute("id", "img" + cardOrder);
        return imgCardUp;
    }
    
    this.setCardToUp = function (imgTag) {
        imgTag.setAttribute("src", "pics/" + cardValue + ".png");
    }
    
    this.setCardToDown = function (imgTag) {
        imgTag.setAttribute("src", "pics/0.png");
    }
    
    this.setImgTag = function (imgTag) {
        
    }
    
    return this;
}
    