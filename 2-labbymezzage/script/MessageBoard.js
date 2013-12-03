var MessageBoard = {

    messages: [],
    
    init: function () {
        
        var createMessage = function () {
            var textInput = document.getElementById("textInputArea").value;
            var mess = new Message(textInput, new Date());
            MessageBoard.messages.push(mess);
            alert(MessageBoard.messages[0]);
        };
            
        var button = document.getElementById("skickaknapp");
        
        button.addEventListener("click", createMessage, false);
        

       
    
    }  
}

window.onload = MessageBoard.init;