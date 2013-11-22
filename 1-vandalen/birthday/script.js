"use strict";

window.onload = function(){

	
	var birthday = function(date){
	    
	    //Array som innehåller de olika delarna i "date"
        var parts = date.split("-");
        
        //Validering av datum--inmatningen
        if(parts[0].length!=4 || parts[1].length!=2 || parts[2].length!=2){
            throw new Error("Fel format");
        }
        
        if(isNaN(parts[0])||isNaN(parts[1])||isNaN(parts[2])){
            throw new Error("Fel format");
        }
        
        var d = new Date(date+'T23:59:59');
        
        var t = new Date();
        
        var today = t.getTime();
        
        d.setFullYear(t.getFullYear());
        
        //Sats som ökar födelsedagens år med 1 om födelsedagen redan infallit detta år.
        if(d.getTime()-t.getTime()<0)
            d.setFullYear(t.getFullYear()+1);
            
        var birthday = d.getTime();
        
        //symoboliserar differensen mellan födelsedagensdatum och dagens dagtum
        var timeLeft = birthday - today;
        
        var daysLeft = Math.floor(timeLeft / (1000*60*60*24));
        
        return daysLeft;

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