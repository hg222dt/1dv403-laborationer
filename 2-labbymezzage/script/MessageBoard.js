var MessageBoard = {

    messages: [],
    
    init: function () {
        
        var createMessage = function () {
            var textInput = document.getElementById("textInputArea").value;
            var mess = new Message(textInput, new Date());
            MessageBoard.messages.push(mess);
            MessageBoard.renderMessages();
            
            document.getElementById("textInputArea").value="";
            
            event.preventDefault();
        };
        
        var button = document.getElementById("skickaknapp");
        
        button.addEventListener("click", createMessage, false);
        
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
    
    renderMessages: function () {
        //remove all messages
        document.getElementById("messageBoard").innerHTML = "";
        
        //Render all messages
        for(var i=0; i<MessageBoard.messages.length; i++){
            MessageBoard.renderMessage(i);
        }
        
        
        var messageBoard = document.querySelector("#messageBoard");
        var p = document.createElement("p");
        
        var text = document.createTextNode("Antal meddelanden : " + MessageBoard.messages.length);
        
        p.setAttribute("id", "messageAmount");
        
        messageBoard.appendChild(p);
        p.appendChild(text);
        
        
    },
    
    renderMessage: function (messageID) {
        //document.getElementById("messageBoard").innerHTML = MessageBoard.messages[messageID].getText();
        
        
        var messageBoard = document.querySelector("#messageBoard");
        var atag1 = document.createElement("a");
        var atag2 = document.createElement("a");
        
        //atag1.setAttribute("href", "#");
        //atag2.setAttribute("href", "#");
        
        var div = document.createElement("div");
        var p = document.createElement("p");
        
        
        var imgClose = document.createElement("img");
        imgClose.setAttribute("src", "cross.png");
        atag1.setAttribute("class", "TaBortKnapp");
        
        var imgTime = document.createElement("img");
        imgTime.setAttribute("src", "clock.png");
        
        
        p.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        
        //var text = document.createTextNode(MessageBoard.messages[messageID].getText());
        //p.appendChild(text);
        
        messageBoard.appendChild(div);
        div.appendChild(p);
        
        div.appendChild(atag1);
        atag1.appendChild(imgClose);
        div.appendChild(atag2);
        atag2.appendChild(imgTime);
        
        
        //var eraseButton = document.getElementsByClassName("TaBortKnapp");
        
        //eraseButton.addEventListener("click", MessageBoard.removeMessage(this), false);

        //eraseButton.alt="Close";
        
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
    
    removeMessage: function (messageID) {
        MessageBoard.messages.splice(messageID,1);
        
        MessageBoard.renderMessages();
            
        //event.preventDefault();
    }
    
}

window.onload = MessageBoard.init;













