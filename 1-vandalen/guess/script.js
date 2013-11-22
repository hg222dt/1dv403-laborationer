"use strict";

window.onload = function(){
    
    var max = 100;
    var min = 0;
    var count = 0;
	
	//Funktion som slumpar fram heltal.
	function randomize(){
        return Math.floor( Math.random() * (max-min)+1 )+min;
	}
	
	var secret = randomize();
	

	var guess = function(number){

		//Räknare för att räkna antal gissade gisnsingar
		count++;
		
		//If-satser som returnerar rätt meddelenade och boolesk variabel i resektive gissnings-fall.
		if( number == secret){
		    return [true, "Grattis du vann! Det hemliga talet var " + secret + " och du behövde " + count + " gissningar för att hitta det."];
		}
		
		else if(number < 0 || number > 100){
		    return [false, "Talet är utanför intervallet " + min + " - " + max];
		}
		
		else if( number < secret){
		    return [false, "Det hemliga talet är högre!"];
		}
		
		else if( number > secret){
		    return [false, "Det hemliga talet är lägre!"];
		}
		
		else{
		    return [false, "Mata in ett tal."];
		}
	};
	
	// ------------------------------------------------------------------------------



	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#number");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		var answer = guess(input.value) // Läser in talet från textrutan och skickar till funktionen "guess"
		p.innerHTML = answer[1];		// Skriver ut texten från arrayen som skapats i funktionen.	

		if(answer[0] === true){				// Om spelet är slut, avaktivera knappen.
			submit.disabled = true;
		}
	
	});
};