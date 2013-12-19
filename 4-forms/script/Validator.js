//Ha med e.preventDefault()??
//Läs kraven på labben

"use strict";

var Validator = {
    
    init: function () {
        
        //Hämtar formulär och dess underliggande element i html-dokumentet
        var form = document.getElementById("mainForm");
        
        var fn = form.elements['firstName'];
        var ln = form.elements['lastName'];
        var zc = form.elements['zipCode'];
        var em = form.elements['email'];
        var pm = form.elements['priceModel'];
        
        //Hämtar span-taggarna brevid formulär-fälten, där eventuella felmeddelanden ska skrivas.
        var fnSpan= document.getElementById("firstNameSpan");
        var lnSpan= document.getElementById("lastNameSpan");
        var zcSpan= document.getElementById("zipCodeSpan");
        var emSpan= document.getElementById("emailSpan");
        
        //Textnoder för eventuella felmeddelanden skapas.
        var fnSpanText = document.createTextNode("");
        var lnSpanText = document.createTextNode("");
        var zcSpanText = document.createTextNode("");
        var emSpanText = document.createTextNode("");
        
        //Textnoderna placeras i DOMen i de olika span-taggarna.
        fnSpan.appendChild(fnSpanText);
        lnSpan.appendChild(lnSpanText);
        zcSpan.appendChild(zcSpanText);
        emSpan.appendChild(emSpanText);
        
        //Reguljära uttryck, som validerar e-post och postnummer-fält
        var patternZipCode = /^\d{5}$|^\d{3}[- ]\d{2}$|^(SE)+\d{5}$|^(SE)+\d{3}[- ]\d{2}$|^(SE )+\d{5}$|^(SE )+\d{3}[- ]\d{2}$/;
        var patternEmail = /^[\w]+(\.[\w]+)*@([\w]+\.)+[a-z]{2,7}$/i;
        
        //Kopplar de olika formulärfältens event till validerings-referenser.
        fn.onblur = validateFirstName;
        ln.onblur = validateLastName;
        zc.onblur = validateZipCode;
        em.onblur = validateEmail;
        pm.onblur = setPMToGreen;
        form.onsubmit = validateForm;
        
        //Gör att första fältet blir  markerat och går att skriva i direkt när sidan laddats.
        fn.focus();
        
        var stop = false;
        
        //Funktioner för olika valideringar
        //Validering av förnamn
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
        
        //Validering av efternamn
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
        
        //Validering av postnummer
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
        
        //Validering av e-post
        function validateEmail () {
            if(em.value.match(patternEmail)){
                emSpanText.nodeValue = "";
                stop = false;
                setToGreen(em);
            }
            else {
                if (em.value.length === 0 || em.value === "E-post") {
                    emSpanText.nodeValue = "E-postadressen har inte fyllts i.";
                }
                else{
                    emSpanText.nodeValue = "E-postadressen är inte giltlig.";
                }
                stop = true;
                setToRed(em);
            }
        }
        
        //Validering av hela formuläret, och trigger av popuprutan, och validering går igenom.
        function validateForm () {
            //e.preventDefault();
            
            validateFirstName();
            validateLastName();
            validateZipCode();
            validateEmail();
            
            if(stop === true)
                return false;
            else{
                popup();
                return false;
            }
        }
        
        //Sätter formulärfält till rött
        function setToRed(v){
            v.setAttribute("class", "redInput");
        }
        
        //Sätter formulärfält till grönt
        function setToGreen(v){
            v.setAttribute("class", "greenInput");
        }
        
        //Sätter prismodell-fält till grönt
        function setPMToGreen(v){
            pm.setAttribute("class", "greenInput");
        }
        
        //Funktion för bekräftelse-popuprutan.
        function popup(){
            var divBG = document.createElement("div");
            divBG.setAttribute("id","popupBG");
            divBG.className = "popupBG";
            var div = document.createElement("div");
            div.setAttribute("id","popupWindow");
            div.className = "popupWindow";
            
            //Utskrift i popup-rutan
            var titel = document.createElement("h1");
            titel.setAttribute("id","titelPopup");
            titel.textContent = "Bekräfta köp";
            
            var _fn = document.createElement("p");
            _fn.textContent = fn.name + ": " + fn.value;
            
            var _ln = document.createElement("p");
            _ln.textContent = ln.name + ": " + ln.value;
            
            var _zc = document.createElement("p");
            _zc.textContent = zc.name + ": " + zc.value;
            
            var _em = document.createElement("p");
            _em.textContent = em.name + ": " + em.value;
            
            var _pm = document.createElement("p");
            _pm.textContent = pm.name + ": " + pm.value;
            
            var confirmButton = document.createElement("input");
            confirmButton.setAttribute("id","confirm");
            confirmButton.setAttribute("type","submit");
            confirmButton.setAttribute("value","Bekräfta");
            
            var cancelButton = document.createElement("input");
            cancelButton.setAttribute("id","cancel");
            cancelButton.setAttribute("type","submit");
            cancelButton.setAttribute("value","Avbryt");
            
            //Trycker upp alla skapade element till DOMen.
            div.appendChild(titel);
            div.appendChild(_fn);
            div.appendChild(_ln);
            div.appendChild(_zc);
            div.appendChild(_em);
            div.appendChild(_pm);
            div.appendChild(confirmButton);
            div.appendChild(cancelButton);

            document.body.appendChild(divBG);
            document.body.appendChild(div);
            
            //Event-hanterare för avbryt-knapp i popup-rutan.
            cancelButton.addEventListener("click", function() {
                var cancelPopup = document.getElementById("popupWindow");
                var cancelBG = document.getElementById("popupBG");
                cancelPopup.remove();
                cancelBG.remove();
            }, false);
            
            //Event-hanterare för händelse av klick på bakgrund i popup-rutan.
            divBG.addEventListener("click", function() {
                var cancelPopup = document.getElementById("popupWindow");
                var cancelBG = document.getElementById("popupBG");
                cancelPopup.remove();
                cancelBG.remove();
            }, false);
            
            //Event-hanterare för bekräfelse-knapp.
            confirmButton.addEventListener("click", function() {
                form.submit();
            }, false);
        }
    }
};

window.onload = Validator.init;