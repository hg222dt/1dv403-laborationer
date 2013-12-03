var MessageBoard = {

    messages: [],
    
    init: function () {
        
        var mess = new Message("Meddelande", new Date());
        
        /*
        alert(mess);
        alert(mess.getText());
        mess.setText("En annan text");
        alert(mess);
        */
        
        MessageBoard["messages"].push(mess);
        
        alert(MessageBoard["messages"][0]);
        
        /*
        var test = this.messages.push(mess);
        alert(test[0]);
        */
        
        alert(MessageBoard.messages[0].getText());
    }  
}

window.onload = MessageBoard.init;