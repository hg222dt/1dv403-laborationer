//Ha med e.preventDefault()??
//Läs kraven på labben

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
        
        fn.onblur = validateFirstName;
        ln.onblur = validateLastName;
        zc.onblur = validateZipCode;
        em.onblur = validateEmail;
        pm.onblur = setPMToGreen;
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
                    emSpanText.nodeValue = "E-postadressen har inte fyllts i.";
                }
                else{
                    emSpanText.nodeValue = "E-postadressen är inte giltlig.";
                }
                stop = true;
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
            else{
                popup();
                return false;
            }
        }
        
        function setToRed(v){
            v.setAttribute("class", "redInput");
        }
        
        function setToGreen(v){
            v.setAttribute("class", "greenInput");
        }
        
        function setPMToGreen(v){
            pm.setAttribute("class", "greenInput");
        }
        
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
            
            cancelButton.addEventListener("click", function() {
                var cancelPopup = document.getElementById("popupWindow");
                var cancelBG = document.getElementById("popupBG");
                cancelPopup.remove();
                cancelBG.remove();
            }, false);
            
            divBG.addEventListener("click", function() {
                var cancelPopup = document.getElementById("popupWindow");
                var cancelBG = document.getElementById("popupBG");
                cancelPopup.remove();
                cancelBG.remove();
            }, false);
            
            confirmButton.addEventListener("click", function() {
                form.submit();
            }, false);
        }
    }
};

window.onload = Validator.init;