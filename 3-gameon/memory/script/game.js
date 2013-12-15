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
    
    //Funktion som renderar båda sidor av repektive memory-kort, innehållande händelsehanterare som detekterar klick på memorykortet.
    renderMemoryCard: function (i) {
        var gameBoard = document.querySelector("#container");    
        var aTag = document.createElement("a");
        gameBoard.appendChild(aTag);
        aTag.appendChild(game.gameCards[i].getImgUp());
        
        //Händelsehanterare ansvarar för vad som häönder vid häöndelse av klick på memory-kortet.
        aTag.onclick = function () {
            
            //If-sats som körs om objektet symboliserande spelkortet, är satt till att vara klickbart.
            if(game.gameCards[i].clickable === true){
                
                if(game.twoClicks == 0 && game.totalAttempts > 0 && game.lastWin == false){
                    game.chosenCards[0].setCardToDown();
                    game.chosenCards[1].setCardToDown();
                }
                
                game.gameCards[i].setCardToUp(aTag.firstChild);
                game.twoClicks++;
                game.chosenCards[game.twoClicks-1] = game.gameCards[i];

                if(game.twoClicks==1){

                    game.gameCards[i].clickable = false;
                } 
                
                //If-sats som itereras om två kort har vänts.
                if(game.twoClicks==2){
                    
                    game.gameCards[i].clickable = false;
                    game.chosenCards[game.chosenCards.length-2].clickable = false;
                    
                    game.totalAttempts++;
                    
                    //If-sats som inträffar om två vända kort är likadana.
                    if(game.gameCards[i].getCardValue() === game.chosenCards[game.chosenCards.length-2].getCardValue()){
                        
                        game.gameCards[i].clickable = false;
                        game.chosenCards[game.chosenCards.length-2].clickable = false;
                        game.totalWins++;
                        console.log("Total wins = " + game.totalWins);
                        game.lastWin = true;
                    }
                    
                    //Itereras om inte de vända korten var likadana.
                    else{
                        var img2 = document.getElementById("img" + i);
                        var img1 = document.getElementById("img" + game.chosenCards[0].getCardOrder());
                        var tempCard1 = game.gameCards[i];
                        var tempCard2 = game.chosenCards[game.chosenCards.length-2];
                        
                        setTimeout(function(){
                            img1.setAttribute("src", "pics/0.png");
                            img2.setAttribute("src", "pics/0.png");
                            tempCard1.setCardToDown();
                            tempCard2.setCardToDown();
                            game.gameCards[i].clickable = true;
                            game.chosenCards[game.chosenCards.length-2].clickable = true;
                            
                        },2000);
                        
                        game.lastWin = false;
                    }
                    
                    //Skriver ut antal försök som gjorts.
                    if(game.twoClicks==2){
                        game.twoClicks = 0;
                        var pAttempt = document.createElement("p");
                        pAttempt.setAttribute("id", "pAttempt");
                        var attemptText = document.createTextNode("Du har gjort " + game.totalAttempts + " försök.");
                        var oldAttemptText = document.getElementById("pAttempt");
                        pAttempt.appendChild(attemptText);
                        gameBoard.appendChild(pAttempt);
                        
                        if(game.totalAttempts > 1){
                            gameBoard.removeChild(oldAttemptText);
                        }
                    
                        console.log("Totalt antal försök: " + game.totalAttempts);
                    }
                    
                    //If-sats som iterreas när alla korten vänts.
                    if(game.totalWins == game.gameCards.length/2){
                        var doneMessageP = document.createElement("p");
                        var doneMessageText = document.createTextNode("Grattis! Färdig! Det tog " + game.totalAttempts + " försök.");
                        doneMessageP.appendChild(doneMessageText);
                        gameBoard.appendChild(doneMessageP);
                    }
                }
            }
        };
    },
 
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
