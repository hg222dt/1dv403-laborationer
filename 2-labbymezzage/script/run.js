var run = {

    init: function () {
        var mess = new Message("Meddelande", new Date());
        
        alert(mess);
        alert(mess.getText());
        mess.setText("En annan text");
        alert(mess);
    }  
}

window.onload = run.init;