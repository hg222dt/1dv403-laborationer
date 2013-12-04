var MessageBoard = {

    messages: [],
    
    init: function () {
        
        var createMessage = function () {
            var textInput = document.getElementById("textInputArea").value;
            var mess = new Message(textInput, new Date());
            MessageBoard.messages.push(mess);
            alert(MessageBoard.messages[0]);
            MessageBoard.renderMessages();
        };
            
        var button = document.getElementById("skickaknapp");
        
        button.addEventListener("click", createMessage, false);
    },  
    
    renderMessages: function () {
        //remove all messages
        document.getElementById("messageBoard").innerHTML = "";
        
        //Render all messages
        for(var i=0; i<MessageBoard.message.length; i++){
            MessageBoard.renderMessage(i);
        }
        
    },
    
    renderMessage: function (messageID) {
        //document.getElementById("messageBoard").innerHTML = MessageBoard.messages[messageID].getText();
        
        var messageBoard = document.querySelector("#messageBoard");
        var p = document.createElement("p");
        
        p.innerHTML = MessageBoard.messages[messageID].getHTMLText();
        
        //var text = document.createTextNode(MessageBoard.messages[messageID].getText());
        //p.appendChild(text);
        
        messageBoard.appendChild(p);

    }
}

window.onload = MessageBoard.init;