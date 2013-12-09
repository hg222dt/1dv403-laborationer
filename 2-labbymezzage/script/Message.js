function Message(message, date){
    this.getText = function () {
        return message;
    }
    
    this.setText = function (_text) {
        message = _text;
    }
    
    this.getDate = function () {
        return date;
    }
    
    this.setDate = function (_date) {
        date = _date;
    }
    
    Message.prototype.toString = function (){
        return this.getText() + " (" + this.getDate() + ")";
    }
    
    Message.prototype.getHTMLText = function() {
        return this.getText();
    }
    
    Message.prototype.getDateText = function() {
        var date = this.getDate();
        
        var str = "";
        
        var day = "";
        day = date.getDate();
        var year = ""; 
        year = date.getFullYear();
        
        
        var month = "";
        
        switch(date.getMonth()){
            case 0:
                month = "januari";
                break;
                
            case 1:
                month = "februari";
                break;
                
            case 2:
                month = "mars";
                break;
                
            case 3:
                month = "april";
                break;
                
            case 4:
                month = "maj";
                break;
                
            case 5:
                month = "juni";
                break;
                
            case 6:
                month = "juli";
                break;
                
            case 7:
                month = "augusti";
                break;
                
            case 8:
                month = "september";
                break;
                
            case 9:
                month = "oktober";
                break;
                
            case 10:
                month = "november";
                break;
                
            case 11:
                month = "december";
                break;
        }
        
        str = "Meddelandet skrevs den " + day + " " + month + " " + year + " klockan " + date.getHours() + ":" + date.getMinutes();
        
        return str;
        
        
        //return this.getDate();
    }
    
    return this;
    
}