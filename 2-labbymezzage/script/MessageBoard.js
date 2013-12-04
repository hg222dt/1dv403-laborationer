var MessageBoard = {

    messages: [],
    
    init: function () {
        
        var createMessage = function () {
            var textInput = document.getElementById("textInputArea").value;
            var mess = new Message(textInput, new Date());
            MessageBoard.messages.push(mess);
            //alert(MessageBoard.messages[0]);
            MessageBoard.renderMessages();
            
            document.getElementById("textInputArea").value="";
            
            event.preventDefault();
        };
        
        var button = document.getElementById("skickaknapp");
        
        button.addEventListener("click", createMessage, false);
        
        
        var eraseButton = document.getElementsByClass("TaBortKnapp");
        
        eraseButton.addEventListener("click", MessageBoard.removeMessage(this), false);
        
    },  
    
    renderMessages: function () {
        //remove all messages
        document.getElementById("messageBoard").innerHTML = "";
        
        //Render all messages
        for(var i=0; i<MessageBoard.messages.length; i++){
            MessageBoard.renderMessage(i);
        }
    },
    
    renderMessage: function (messageID) {
        //document.getElementById("messageBoard").innerHTML = MessageBoard.messages[messageID].getText();
        
        
        var messageBoard = document.querySelector("#messageBoard");
        var atag1 = document.createElement("a");
        var atag2 = document.createElement("a");
        
        atag1.setAttribute("href", "#");
        atag2.setAttribute("href", "#");
        
        var p = document.createElement("p");
        
        
        var imgClose = document.createElement("img");
        imgClose.setAttribute("src", "cross.png");
        imgClose.setAttribute("class", "TaBortKnapp")
        
        
        var imgTime = document.createElement("img");
        imgTime.setAttribute("src", "clock.png");
        
        
        p.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        
        //var text = document.createTextNode(MessageBoard.messages[messageID].getText());
        //p.appendChild(text);
        
        messageBoard.appendChild(p);
        
        messageBoard.appendChild(atag1);
        atag1.appendChild(imgClose);
        messageBoard.appendChild(atag2);
        atag2.appendChild(imgTime);
        
    },
    
    removeMessage: function () {
        
    }
    
}

window.onload = MessageBoard.init;