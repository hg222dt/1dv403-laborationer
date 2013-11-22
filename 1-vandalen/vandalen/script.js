/*"use strict";

var makePerson = function(persArr) {
    
var persons = new Object();
var ageArray = new Array();
var nameArray = new Array();
var i = 0;

while(i < persArr.length){
    ageArray[i] = persArr[i].age;
    nameArray[i] = persArr[i].name;
    i++;
}

persons.minAge = Math.max.apply(null, ageArray);
persons.maxAge = Math.min.apply(null, ageArray);
persons.averageAge = 0;

i = 0;
while(i<(persons.ageArray.length-1)){
    persons.averageAge = ageArray[i] + ageArray[i+1];
    persons.averageAge = persons.averageAge / persons.averageAge.length;
    i++;
}

ageArray.sort();

persons.names = "";

i = 0;
while(i < persArr.length){
    persons.names = persons.names + nameArray[i].toString() + ", ";
    i++;
}

return persons;
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);
*/


"use strict";

var makePerson = function(persArr) {
    
    var persons = new Object();
	var ageArray = new Array();
	var nameArray = new Array();
	var i = 0;
	
	while(i < persArr.length){
	    ageArray[i] = persArr[i].age;
	    nameArray[i] = persArr[i].name;
	    i++;
	}
	
    persons.minAge = Math.min.apply(null, ageArray);
	persons.maxAge = Math.max.apply(null, ageArray);
	persons.averageAge = 0;
	
	i = 0;
	var totalAge = 0;
	while(i < ageArray.length){
		totalAge += ageArray[i];
	    i++;
	}

	persons.averageAge = Math.round(totalAge / ageArray.length);
	
	// Sortera namn
	nameArray.sort(function (a, b) {
		return a.localeCompare(b);
	});
	persons.names = nameArray.join(", ");

    return persons;
    
	
};

var data = [{name: "John Häggerud", age: 37}, {name: "Johan Leitet", age: 36}, {name: "Mats Loock", age: 46}];

var result = makePerson(data);

console.log(result);