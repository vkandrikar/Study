// JavaScript Document

'use strict';

//Supported in: IE10+, FF4+, Chrome13+, Safari5.1+, Opera12+

/*  ***************
	
	***************
*/
document.addEventListener('DOMContentLoaded', function() {
   //document.getElementById('wrapper').innerHTML = "Hello World!";
   //document.getElementById("wrapper").style.fontSize = "25px";
});

/*
	we can't access any DOM element until an unless the element is rendered.
	so here we get error
	
	to avoid this we can either load JS at the end of body tag or JS provide us event "DOMContentLoaded",
	this event will fire after all DOM elements loaded	
*/
console.log(typeof document.getElementById('wrapper'));

document.getElementById('wrapper').innerHTML = "Hello World!";

console.log(document.getElementById('wrapper').innerHTML);


/*  ******************
		VARIABLES
	******************
*/
/*
var myName1 = "john";
var city1 = "pune";
var comp1 = "cybage";


console.log(myName1);

var myLastName = "acb";
console.log(myLastName);


// One Statement, Many Variables //
//wright
var myName2 = "john", city2 = "pune", comp2 = "cybage";

var myName3 = "john", 
city3 = "pune", 
comp3 = "cybage";

//wrong if we use with 'use strict'
var myName4 = "john";
city4 = "pune"; 
comp4 = "cybage";*/


/*// Value = undefined //
var count1;
console.log("count1 :: " + count1);

var count2 = 3;
console.log("count2 :: " + count2);

*/
// Re-Declaring Variables
/*count3 = 34;
console.log("count3 :: " + count3);

var count3;
console.log("count3 :: " + count3);

var count3 = 100;
console.log("count3 :: " + count3);
*/

/*function abc () {
	temp = 123;
	console.log(temp)
}
abc();
var temp;

console.log(temp)
*/
// variable scope
abc = 123;
console.log("Global (before function call) [abc:" + abc + "]");

function outerFunction() {
  var abc = 456;
  
  console.log("Outer Function [abc:" + abc + "]");
  
  return function () {
    console.log("Inner Function [abc:" + abc + "]");
  };
}

var abc;
var innerFunction = outerFunction();
innerFunction();
    
console.log("Global (after function call) [abc:" + abc + "]");


/*  ******************
		DATA TYPE
	******************
*/
/*var myVar;               // Now myVar is undefined
var myVar = 5;           // Now myVar is a Number
var myVar = "john";      // Now myVar is a String (using double quotes)
var myVar = 'johnny';    // Now myVar is a String (using single quotes)

var temp;
var boolVar = true;
var arr = [1, 'a', 3.5, true];
var obj = {name:'john', city:'pune', age:25}

console.log("typeof temp :: " + typeof temp);
console.log("typeof 5 :: " + typeof 5);
console.log("typeof 5.5 :: " + typeof 5.5);
console.log("typeof boolVar :: " + typeof boolVar);
console.log("typeof arr :: " + typeof arr);
console.log("typeof obj :: " + typeof obj);
console.log("typeof john :: " + typeof "john");
console.log("typeof johnny :: " + typeof 'johnny');

// When a JavaScript variable is declared with the keyword "new", 
// the variable is created as an object
*/
var str = "";//new String();          // Declares str as a String object
var num = 0;//new Number();          // Declares num as a Number object
var bool = true; //new Boolean();        //	Declares bool as a Boolean object


/*console.log(1 == "1");
console.log(1 === "1");
*/
/*  ******************
		STATEMENTS
	******************
*/
// compound statements
/*{
	var amount = 100;
	var interest = 12.5;
	var total = amount + (amount*(interest/100));
	console.log("Total :: " + total);
}*/

// conditional statement

// 1. if statement
//  if (expression)
//	  statement 

var userName = 'john';
if (!userName)
	userName = 'johnny';

//console.log("userName :: " + userName);

// 2. if else statement
// if (expression)
//   statement
// else
//   statement

/*var msg = 1;
if (msg === 0)
	console.log("You have no message.");
else if (msg === 1)
	console.log("You have " + msg + " new message.");
else
	console.log("You have " + msg + " new messages.");*/
	
// 3. switch statement
// switch(expression) {
//   statements
// }

/*var msg1 = 2;
switch(msg1) {
	case 0: 
		console.log("You have no message.");
	break;  
	                              
	case 1:                       
		console.log("You have " + msg1 + " new message.");
	break; 
	                              
	default:                      // If all else fails... this is optional
		console.log("You have " + msg1 + " new messages.");
	break;                        
}*/

// Common Code and Fall-Through
/*var text;
switch (new Date().getDay()) {
    case 1:
    case 2:
    case 3:
    default: 
        console.log("Looking forward to the Weekend");
    break;
		 
    case 4:
    case 5:
       console.log(text = "Soon it is Weekend");
    break;
		 
    case 0:
    case 6:
       console.log(text = "It is Weekend");
}*/

// Loops
// 1. for loop

var myString='';
var starCount = 5;
for (var i = 1; i <= starCount; i++) {
	//myString += i;
	for (var j = 0; j < i; j++) {
		myString += '*';
	}
	if (i < starCount)
	myString += '\n';
}
console.log(myString);


// 2. for/in loop
/*var person = {fname:"John", lname:"Doe", age:25}; 
for (var prop in person) {
    console.log(prop + " :: " + person[prop]);
}*/

// 3. while loop
/*var flag = false;   //if we set flag = false
var count = 0;
while (flag) {
	console.log("count :: " + count);
	if (count == 5)
		flag = false;
	
	count ++;
}
console.log("====")
*/
/*
// 4. do while loop
var flag = false;   //if we set flag = false
var count = 0;
do {
	console.log("count :: " + count);
	if (count == 5)
		flag = false;
	
	count ++;
} while (flag)
*/

// Jumps
// 1. break

/*for (var i = 0; i < 5; i++) {
	//if (i == 3)
		//break;
	
	console.log("inside loop :: " + i);
}*/

// 2. continue
/*for (var i = 0; i < 5; i++) {
	if (i == 3)
		continue;
	
	console.log("inside loop :: " + i);
}*/

// 3. label
/*myLabel: for (var i = 0; i < 5; i++) {
	if (i == 3)
		break myLabel;
	
	console.log("inside loop :: " + i);
}*/


// Exception handling
/*var x = 12;
try { 
	if(x == "") 
		throw "Empty";
	if(isNaN(x)) 
		throw "Not a number";
	if(x > 10) 
		throw "Too high";
	if(x < 5) 
		throw "Too low";
	
	console.log("do something inside try block");
}
catch(err12) {
	console.error("Error :: " + err12);
}
finally {
	console.log("do something inside finally block");
}

var obj = {
	name: "john",
	age: 25
	}
alert(obj);
console.log("obj: " + obj);
console.log(obj);

//console.info("hi");*/