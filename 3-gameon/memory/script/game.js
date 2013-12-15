"use strict";

var game = {
    
    //Array som ska innehålla de slumpvalda nummer som symboliserar värdet på respektive memory-bricka.
    gameCards: [],
    
    //Array innehållande de senaste två valda korten.
    chosenCards: [],
    
    //Heltals-variabel innehållande information om användaren har vänt ett, två elle ringet memory-kort.
    twoClicks: 0,
    
    //Variabel som räknar totalt antal försök som gjorts.
    totalAttempts: 0,
    
    //Variabel som räknar totalt antal memory-par som vänts.
    totalWins: 0,
    
    //Variabel som berättar om senaste uppvändningen varit ett kortpar eller inte.
    lastWin: false,
    

 
    //Initierande main-funktion som körs när sidan laddats klart.
    init: function () {
        
        var rows = 4;
        var cols = 4;
        var gameCards = RandomGenerator.getPictureArray(rows, cols);
        var count= 0;
        var gameBoard = document.querySelector("#container");    
        count = 0;
        
        //Loop som huvudsakligen ansvarar för att anropa rendering-funktion till vart och ett av spelkorten.
        for( var i = 0; i < gameCards.length; i++){
            count++; 
            game.gameCards[i] = new GameCard(gameCards[i], i);
            game.renderMemoryCard(i);
            
            //Br-tagg läggs till för radbrytning.
            if (count == cols){
                var brTag = document.createElement("br");
                gameBoard.appendChild(brTag);
                count=0;
            }
        }
    }
};

window.onload = game.init;
