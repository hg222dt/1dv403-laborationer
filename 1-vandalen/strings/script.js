"use strict";

window.onload = function(){

    var convertString = function(str){
        
        var i=0;
        var character='';
        var str2= '';
        
        while (i <= str.length){
            character = str.charAt(i);
            
        	if (character == character.toUpperCase()) {
        		character = character.toLowerCase();
        	}
        	else if (character == character.toLowerCase()){
        		character = character.toUpperCase();
        	}
            
            i++;
            
            str2 += character;
        }
        
        
    };


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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};