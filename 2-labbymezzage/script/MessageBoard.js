var MessageBoard = {

    //Array som alla meddelande-objekt samlas i.
    messages: [],
    
    //Applikationens motor
    init: function () {
        
        //Funkton för som körs när text matats in och nytt meddelande ska skapas.
        var createMessage = function () {
            var textInput = document.getElementById("textInputArea").value;
            var mess = new Message(textInput, new Date());
            MessageBoard.messages.push(mess);
            MessageBoard.renderMessages();
            
            document.getElementById("textInputArea").value="";
            
            event.preventDefault();
        };
        
        //Knapp, och händelsehanterare av denna.
        var button = document.getElementById("skickaknapp");
        button.addEventListener("click", createMessage, false);
        
        //Reagerar på om enter trycks ned vid textinmatning.
        var textInput = document.getElementById("textInputArea");
        textInput.onkeypress = keypress;

        function keypress(e) {
            
            if(!e) var e = window.event;
        
            if(e.shiftKey && e.keyCode == 13){}
            
            else if(e.keyCode === 13){
                createMessage();
            }
        }
        
        return false;
        
    },  
    
    //Funktion för att rndera ut alla meddelanden.
    renderMessages: function () {
        //Tar bort alla meddelanden.
        document.getElementById("messageBoard").innerHTML = "";
        
        //Renderar alla meddelanden.
        for(var i=0; i<MessageBoard.messages.length; i++){
            MessageBoard.renderMessage(i);
        }
        
        var messageBoard = document.querySelector("#messageBoard");
        
        //Funktionalitet för att skriva ut antal  meddelanden.
        var p = document.createElement("p");
        var text = document.createTextNode("Antal meddelanden : " + MessageBoard.messages.length);
        p.setAttribute("id", "messageAmount");
        messageBoard.appendChild(p);
        p.appendChild(text);
    },
    
    //Renderar ett meddelande.
    renderMessage: function (messageID) {
        var messageBoard = document.querySelector("#messageBoard");
        var atag1 = document.createElement("a");
        var atag2 = document.createElement("a");
        
        //Skapar namn på författare av varje meddelande.
        var name = document.createElement("h3");
        var _name = document.createTextNode("Henrik skrev:");
        name.setAttribute("class", "author");

        //Skapar div-tag för som ska innehålla ett meddelande, och övrig information.
        var div = document.createElement("div");
        var p = document.createElement("p");
        div.setAttribute("class", "messageUnit")
        
        //Skapar taggar för bilderna som ska fungera som knappar för borttagning och bildvisning.
        var imgClose = document.createElement("img");
        imgClose.setAttribute("src", "cross.png");
        atag1.setAttribute("class", "TaBortKnapp");
        var imgTime = document.createElement("img");
        imgTime.setAttribute("src", "clock.png");
        
        //Skapande av tag till tidsstämpel på varje meddelande.
        var timeStamp = document.createElement("p");
        var time = document.createTextNode(MessageBoard.messages[messageID].getMessageClockTime());
        timeStamp.setAttribute("class", "timeStamp")
        
        p.innerHTML = MessageBoard.messages[messageID].getHTMLText();
    
        messageBoard.appendChild(div);
        div.appendChild(name);
        name.appendChild(_name);
        
        div.appendChild(p);
        div.appendChild(timeStamp);
        timeStamp.appendChild(time);
        
        div.appendChild(atag1);
        atag1.appendChild(imgClose);
        div.appendChild(atag2);
        atag2.appendChild(imgTime);
        
        //Funktion för att bekräfta borttagning av meddelanden.
        atag1.onclick = function () {
            
            var c = confirm("Vill du verkligen ta bort meddelandet?");
            
            if (c == true){
                MessageBoard.removeMessage(messageID);
            }
        };
        
        atag2.onclick = function () {
            alert(MessageBoard.messages[messageID].getDateText());
        };
        
    },
    
    //Tar bort ett meddelande från vårt array som samlar meddelande-objekt.
    removeMessage: function (messageID) {
        MessageBoard.messages.splice(messageID,1);
        
        MessageBoard.renderMessages();
    }
}

window.onload = MessageBoard.init;













