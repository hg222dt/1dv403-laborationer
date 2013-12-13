"use strict";

var game = {
    
    gameCards: [],
    
    chosenCards: [],
    
    twoClicks: 0,
    
    renderMemoryCard: function (i) {
        
        var clickable = true;
        
        var gameBoard = document.querySelector("#container");    
        
        var aTag = document.createElement("a");
        
        gameBoard.appendChild(aTag);
        aTag.appendChild(game.gameCards[i].getImgUp());
        
        if(clickable === true){
            aTag.onclick = function () {
                game.gameCards[i].setCardToUp(aTag.firstChild);
                
                game.twoClicks++;
                //console.log(game.twoClicks);
                
                
                game.chosenCards[game.twoClicks-1] = game.gameCards[i];
                
                console.log(game.chosenCards[game.twoClicks-1].getCardValue());
                
                if(game.twoClicks==2){
                    console.log("Två har valts!");
                    
                    if(game.gameCards[i].getCardValue() === game.chosenCards[game.chosenCards.length-2].getCardValue()){
                        console.log("Två lika i rad har valts!");
                    }
                    else{
                        game.chosenCards[0].setCardToDown(aTag.firstChild);
                        game.chosenCards[1].setCardToDown(aTag.firstChild);
                        
                        console.log("Två kort har vänts tillbaka");
                    }
                    
                    
                    //game.chosenCards.push(game.gameCards[i].getCardValue());
                    game.twoClicks = 0;
                }
                
            };
        }
    },
 
    init: function () {
        
            var rows = 3;
            var cols = 4;
            
            //var randomize = new RandomGenerator();
            //var gameRound = RandomGenerator.getPictureArray(rows, cols);
            
            //game.gameCards = gameRound;
            
            var gameCards = new Array(1, 3, 3, 4, 2, 5, 2, 5, 1, 4, 6, 6);
            
            var count= 0;

            var gameBoard = document.querySelector("#container");    
    
            count = 0;
            for( var i = 0; i < gameCards.length; i++){
                
                count++; 
                game.gameCards[i] = new GameCard(gameCards[i], i);
                
                game.renderMemoryCard(i);
                
                if (count == cols){
                    var brTag = document.createElement("br");
                    gameBoard.appendChild(brTag);
                    count=0;
                }
            }
            
            
            //Spelbrickorna läggs ut med bara frågetecken.
            //Om en spelare klickar på en spelbricka, ska bilden under visas. En if-sats avgör vilken bild som ska visas beoende på nummer.
            
            //event.preventDefault();
    }
};

window.onload = game.init;