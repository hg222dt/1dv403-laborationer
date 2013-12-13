//Konstuktrosfunktion som för att skapa objekt för respektive meddelande-objekt.
function Message(message, date){
    
    //Funktion för att hämta meddelandetexten.
    this.getText = function () {
        return message;
    }
    
    //Funktion för att modifiera eller sätta meddelandetexten.
    this.setText = function (_text) {
        message = _text;
    }
    
    //Funktion för att hämta datum-objektet kopplat till meddelandet.
    this.getDate = function () {
        return date;
    }
    
    //Funktion för att sätta datumet.
    this.setDate = function (_date) {
        date = _date;
    }
}
    
    //Funktion för att hämta klockslaget som meddelandet är skrivet.
    Message.prototype.getMessageClockTime = function() {
        var hours = this.getDate().getHours();
        var minutes = "";
        var seconds = "";
        
        if(this.getDate().getMinutes() < 10){
            minutes = "0" + this.getDate().getMinutes();
        }
        else{
            minutes = this.getDate().getMinutes();
        }
        
        if(this.getDate().getSeconds() < 10){
            seconds = "0" + this.getDate().getSeconds();
        }
        else{
            seconds = this.getDate().getSeconds();
        }
        
        var str = hours + ":" + minutes + ":" + seconds;
        return str;
    }
    
    //Funktion för att hämta meddelandetexten och datumet i ren text.
    Message.prototype.toString = function (){
        return this.getText() + " (" + this.getDate() + ")";
    }
    
    //Funktion för att hämta meddelandetexten i html-format.
    Message.prototype.getHTMLText = function() {
        var text = this.getText();
        
        return text.replace(/[\n\r]/g, "<br />");
    }
    
    //Funktion för att hämta datum och tid som meddelande skrivits, i text.
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
        
        var hours = date.getHours();
        
        var minutes = "";
        
        if(date.getMinutes() < 10){
            minutes = "0" + date.getMinutes();
        }
        else{
            minutes = date.getMinutes();
        }
        
        str = "Meddelandet skrevs den " + day + " " + month + " " + year + " klockan " + hours + ":" + minutes;
        
        return str;
        
    }
