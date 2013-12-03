var MessageBoard {

    messages : [],
    
    init: function(e) {
        var mess = new Message("Test-messelande 1", new Date());
    }

}

window.onload = MessageBoard.init;