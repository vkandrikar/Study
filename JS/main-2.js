// JavaScript Document

//'use strict';

/*
	OBJECTS
*/

// object literals 
/*var person = {
    name:"John",
    eyeColor:"blue",
	
	displayInfo: function () {
		console.log("Name :: " + this.name + " - Eye color :: " + this.eyeColor);
	}
}; 
console.log("person :: " + person);  //concate string & object
console.log("person :: ");
console.log(person);
person.displayInfo();

// change in temp will also change the value of eyeColor in person
var temp = person;
console.log("temp :: ");
console.log(temp);

temp.eyeColor = "black";

console.log("*** objects after modification in temp ***");

console.log("person :: ");
console.log(person);
console.log("temp :: ");
console.log(temp);*/



// creating object with "new" keyword
/*var person = {
    name:"John",
    eyeColor:"blue",
	
	displayInfo: function () {
		console.log("Name :: " + this.name + " - Eye color :: " + this.eyeColor);
	}
};

var person1 = new Object(person);
console.log("person :: ");
console.log(person);

console.log("person1 :: ");
console.log(person1);

console.log("*** after modification ***");
person1.eyeColor = "yellow";	//will make the changes in both objects

console.log("person :: ");
console.log(person);

console.log("person1 :: ");
console.log(person1);*/



//The Object.create() Method  syntax:Object.create(proto [, propertiesObject ])

// duplicate object
/*var person = {
    name:"John",
    eyeColor:"blue",
	
	displayInfo: function () {
		console.log("Name :: " + this.name + " - Eye color :: " + this.eyeColor);
	}
};

console.log("*** duplicate object ***");
var person1 = Object.create(person);
console.log("person :: ");
console.log(person);

console.log("person1 :: ");
console.log(person1);

console.log("*** after modification ***");
person1.eyeColor = "yellow";	

console.log("person :: ");
console.log(person);

console.log("person1 :: ");
console.log(person1)


// adding additional properties
var person2 = Object.create(person, {
	name: {
		value: "John"
	},
	city: {
		value: "Pune"
	}
});
console.log("person2 :: ");
console.log(person2);
person2.displayInfo();


// creating with null as proto
var newObj = Object.create(null, {
	size: {
		value: "large"
	},
	shape: {
		value: "round"
	}
});
console.log(newObj);
console.log("size :: " + newObj.size);
console.log("shape :: " + newObj.shape);
*/

// *Note: we can also crete object using constructor function & Object.create with prototype. 



/*
	ARRAY
*/

/*var cars = ["Saab", "Volvo", "BMW"];
var cars1 = new Array("Saab", "Volvo", "BMW");

console.log("cars :: " + cars);
console.log("cars1 :: " + cars1);*/

//JavaScript does not support arrays with named indexes (associative arrays)
//Wrong: 
/*var person = new Array()
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;

console.log("person :: ");
console.log(person);

console.log(cars[0]);

console.log(person[0]);
console.log(person["firstName"]);*/


//var points = new Array();         // Bad
//var points = [];                  // Good 


//The new keyword complicates your code and produces nasty side effects:

/*var points = new Array(40, 100);               						 // Creates an array with two elements (40 and 100)
var points1 = new Array(40);       										// Creates an array with 40 undefined elements !!!!!

console.log("points :: " + points);
console.log("points1 :: " + points1);
console.log("points1[0] :: " + points1[0]);
*/


/*
	FUNCTION
*/
/*function myFunt () {
	console.log("*** this is test function ***");
}
myFunt();


var myFunt1 = function () {
	console.log("*** this is test function ***");
}
myFunt1();*/


/*function add (a, b) {
	return a+b;
}
console.log("addition1 :: " + add(4, 5));
*/

// default parameters: Unfortunately, this construct isn't available in current versions of JavaScript.
/*function add1 (a, b = 1) {
	return a+b;
}*/

/*function add1 (a, b) {
	if (!b) b = 0;
	return a+b;
}
console.log("addition2 :: " + add1(4));*/


// The arguments Object
/*function sumAll () {
	console.log(arguments);	 
	var i, temp = 0;
	for (i = 0; i < arguments.length; i++) {
		temp += arguments[i];
	}
	return temp;
}

var sum = sumAll(1,2,5);
console.log("sum :: " + sum);*/



// creating modules
// syntax: (function () {}(returnVal));
var myObj = {};
(function(obj) {
    var sum = 0 ;

    
        obj.add = function() {
            sum = sum + 1;
            return sum;
        },
        obj.reset = function() {
            return sum = 0;    
        } 
       
}(myObj));

var moduleHome = myObj;
console.log(moduleHome);
console.log(moduleHome.add());   
console.log(moduleHome.add()); 
 

//load jQuery
/*var moduleAboutUs = (function(jq) {
    var sum = 1 ;
	
	console.log(jq('li').hasClass('temp'));

    return {
        add:function() {
            sum = sum + 5;
            return sum;
        },
        reset:function() {
            return sum = 1;    
        }  
    }   
}($));

console.log(moduleAboutUs.add());    
console.log(moduleAboutUs.add());*/



/*
	REGULAR EXPRESSION
*/
/*var str = "Hello World!"; //use Visit World & see diff 
console.log("str.search(/world/i) :: " + str.search(/world/i));  //case-insensitive,  i  is a modifier (modifies the search to be case-insensitive).
console.log("str.search(world) :: " + str.search("world"));*/
/*
var	str = "Hello World!";
var res = str.replace(/world/i, "John");
console.log("res :: " + res);

var patt = /javaScript/;

console.log(patt.test("JavaScript is very easy to learn & simple programing language."));

console.log(patt.exec("JavaScript is very easy to learn & simple programing language."));

*/
/*
	DATE
*/

/*console.log(new Date());
console.log(new Date("September 29, 2014 11:13:00"));
console.log(new Date(0));
console.log(new Date(2014,9,02,11,33,30,0)); //The 7 numbers specify the year, month, day, hour, minute, second, and millisecond
*/
/*console.log(new Date().toString());
console.log(new Date().toUTCString());
console.log(new Date().toDateString());*/

