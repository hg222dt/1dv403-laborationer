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
        
    }  
}

window.onload = MessageBoard.init;