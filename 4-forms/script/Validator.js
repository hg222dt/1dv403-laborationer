"use strict";

var Validator = {
    
    init: function () {
        var form = document.getElementById("mainForm");
        
        var fn = form.elements['firstName'];
        var ln = form.elements['lastName'];
        var zc = form.elements['zipCode'];
        var em = form.elements['email'];
        var pm = form.elements['priceModel'];
        
        var fnSpan= document.getElementById("firstNameSpan");
        var lnSpan= document.getElementById("lastNameSpan");
        var zcSpan= document.getElementById("zipCodeSpan");
        var emSpan= document.getElementById("emailSpan");
        
        var fnSpanText = document.createTextNode("");
        var lnSpanText = document.createTextNode("");
        var zcSpanText = document.createTextNode("");
        var emSpanText = document.createTextNode("");
        
        fnSpan.appendChild(fnSpanText);
        lnSpan.appendChild(lnSpanText);
        zcSpan.appendChild(zcSpanText);
        emSpan.appendChild(emSpanText);
        
        var patternZipCode = /^\d{5}$|^\d{3}[- ]\d{2}$|^(SE)+\d{5}$|^(SE)+\d{3}[- ]\d{2}$|^(SE )+\d{5}$|^(SE )+\d{3}[- ]\d{2}$/;
        var patternEmail = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
        
        //Skapa onkeyup event mm.
        
        
        form.onsubmit = validateForm;
        
        fn.focus();
        
        var stop = false;
        
        //Skapa olika funktioner för olika valideringar
        
        function validateFirstName () {
            if (fn.value.length === 0 || fn.value === "Förnamn") {
                stop = true;
                fnSpanText.nodeValue = "Förnamnet har inte fyllts i.";
                stop = true ;
                
                setToRed(fn);
                
            }
            else{
                fnSpanText.nodeValue = "";
                stop = false;
                setToGreen(fn);
            }
        }
        
        function validateLastName () {
            if (ln.value.length === 0 || ln.value === "Efternamn") {
                stop = true;
                lnSpanText.nodeValue = "Efternamnet har inte fyllts i.";
                setToRed(ln);
            }
            else{
                lnSpanText.nodeValue = "";
                stop = false;
                setToGreen(ln);
            }
        }
        
        function validateZipCode () {
            
            
            if(zc.value.match(patternZipCode)){
                zc.value = zc.value.replace(/(SE)?\s?-?/g, "");
                zcSpanText.nodeValue = "";
                stop = false;
                setToGreen(zc);
            }
            else {
                if (zc.value.length === 0 || zc.value === "Postnummer") {
                    stop = true;
                    zcSpanText.nodeValue = "Postnummret har inte fyllts i.";
                }
                else{
                    zcSpanText.nodeValue = "Fel format på postnummret.";
                    stop = true;
                }
                setToRed(zc);
            }
        }
        
        function validateEmail () {
            if(em.value.match(patternEmail)){
                emSpanText.nodeValue = "";
                stop = false;
                setToGreen(em);
            }
            else {
                
                if (em.value.length === 0 || em.value === "E-post") {
                    stop = true;
                    emSpanText.nodeValue = "E-postadressen har inte fyllts i.";
                }
                else{
                    emSpanText.nodeValue = "E-postadressen är inte giltlig.";
                    stop = true;
                }
                setToRed(em);
            }
        }
        
        function validateForm () {
            //e.preventDefault();
            
            validateFirstName();
            validateLastName();
            validateZipCode();
            validateEmail();
            
            if(stop === true)
                return false;
        }
        
        function setToRed(v){
            v.setAttribute("class", "redInput");
        }
        
        function setToGreen(v){
            v.setAttribute("class", "greenInput");
        }
            
    }
};

window.onload = Validator.init;