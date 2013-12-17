"use strict";

window.onload = function () {
    var form = document.getElementById("mainForm");
    
    var fn = form.elements["firstName"];
    var ln = form.elements["lastName"];
    var zc = form.elements["zipCode"];
    var em = form.elements["email"];
    var pm = form.elements["priceModel"];
    
    fn.focus();
    
    form.onsubmit = function (e) {
    
    var stop = false;
    //((SE)|^(SE))(\s|\S)
    //var patternZipCode = /^(SE)|(SE )[0-9]{3}(\s|-|\S)[0-9]{2}$/;
    
    var patternZipCode = /^\d{5}$|^\d{3}[- ]\d{2}$|^(SE)+\d{5}$|^(SE)+\d{3}[- ]\d{2}$|^(SE )+\d{5}$|^(SE )+\d{3}[- ]\d{2}$/;
    
    var patternEmail = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
    
        
        
        if(fn.value === ""){
            console.log("Förnamnet har inte matats in");

            stop = true;
            
        }
        
        if(ln.value === ""){
            console.log("Efternamnet har inte matats in");
            
            
            stop = true;
        }
        
        if(zc.value.match(patternZipCode)){
            console.log("Postnummer godkänt!");
        }
        else {
            console.log("Fel på postnummer");
            stop = true;
        }
        
        if(em.value.match(patternEmail)){
            console.log("E-post godkänd!")
        }
        else {
            console.log("Fel på e-post");
            stop = true;
        }
        
        
        
        
        
        if(stop === true)
            return false;
    }
}