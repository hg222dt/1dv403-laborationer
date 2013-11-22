"use strict";

window.onload = function(){

	
	var birthday = function(date){
        
            
        var parts = date.split("-");
        
        if(parts[0].length!=4 || parts[1].length!=2 || parts[2].length!=2){
            throw new Error("Fel format");
        }
        
        if(isNaN(parts[0])||isNaN(parts[1])||isNaN(parts[2])){
            throw new Error("Fel format");
        }
        
        var d = new Date(date);
        
        var t = new Date();
        
        var today = t.getTime();
        
        d.setFullYear(t.getFullYear());
        
        if(d.getTime()-t.getTime()<0)
            d.setFullYear(t.getFullYear()+1);
            
        
        var birthday = d.getTime();
        
        var timeLeft = birthday - today;
        
        var daysLeft = Math.floor(timeLeft / (1000*60*60*24));
        
        return daysLeft;


        /*

        var minutes=1000*60;
        var hours=minutes*60;
        var days=hours*24;
        var years=days*365;
        var d=new Date();
        var t=d.getTime();
        var y=Math.round(t/days);
        
        var thisYear = d.getFullYear();
        
        var bdDateObj = new Date();
        
        if(parts[1]<d.getMonth()){
            bdDateObj.setFullYear(thisYear+1, parts[1]-1, parts[2]);
        }
        else{
            bdDateObj.setFullYear(thisYear, parts[1]-1, parts[2]);
        }
        
        var bd = bdDateObj.getTime();

        var x = Math.round(bd/days);
        
        return x - y;
        
        */
	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};