//'use strict';

/* 
	NAMESPACE
*/
/*var globalObj = globalObj || {}; //if globalObj present then it will refere to same otherwise create an empty obj

// sub namespace
// aading variable, function & methods
globalObj.commonMethod = {
	version: "1.0",
	regEmail: /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/,
	regMobile: /^\d{10}$/,
	
	validateEmail: function (email) {
		return this.regEmail.test(email);
	},
		
	validateMobileNo: function (mobNo) {
		return this.regMobile.test(mobNo);
	}
}

var version = "2.0";

console.log("local version :: " + version);
console.log("globalObj version :: " + globalObj.commonMethod.version);

console.log(globalObj.commonMethod.validateEmail("abc@xyz.com"));
console.log(globalObj.commonMethod.validateMobileNo("1234567890"));

var globalObj1 = globalObj || {};
console.log("globalObj1 ::");
console.log(globalObj1);

globalObj1.commonMethod.version = "2.0";

console.log(globalObj);*/


/*
	CLASS
*/
// creating class

/*function Person () {}

var Person = function () {}

// creating instance
var per1 = new Person();*/


// constructor
/*function Person () {
	console.log('Person instantiated');
}
var person1 = new Person();
*/

// adding properties & methods to base class
/*function Person (fName, lName) {
	this.firstName = fName || "";
	this.lastName = lName || "";
	
	this.sayHello = function () {
		console.log(this);
		console.log("Hello, I'm " + this.firstName);
	}
}

var per1 = new Person("John", "D'costa");
var per2 = new Person("Johnny", "D'silva");*/
/*
console.log(per1);
console.log(per2);
per1.sayHello();
per2.sayHello();

console.log(per1.firstName);
console.log(per1.lastName);*/


// adding method at class level
/*Person.prototype.displayFulName = function () {
	console.log("Hello, I'm " + this.firstName + " " + this.lastName);
}*/

/*console.log(per1);
console.log(per2);
per1.displayFulName();
per2.displayFulName();*/


// adding method at obj level
/*per1.prototype = {
	showMe: function () {
		console.log("*** showMe ***");
	}
}*/
/*
console.log(per1);
console.log(per2);
per1.prototype.showMe();
per2.prototype.showMe(); //error*/




// 
/*var helloFunt = per1.sayHello;
var displyFunt = per1.displayFulName;

per1.sayHello();
per1.displayFulName();

//calling helloFunt() & displyFunt() set this to global object not Person (uncomment log in sayHello())

helloFunt(); //error in strict mode otherwise logs undefined
displyFunt(); //error in strict mode otherwise logs undefined 

console.log(helloFunt === per1.sayHello);
console.log(displyFunt === per1.displayFulName);
console.log(displyFunt === Person.prototype.displayFulName);

*/




// private data members
/*var MakeCounter = function() {
	//private
	var privateCounter = 0;	
	//public
	this.globalCounter = 0;	
	//private
	var changeBy = function  (val) {
		privateCounter += val;
	}	
	//public
	this.increment = function() {
		changeBy(1);
	}	
	this.decrement = function() {
		changeBy(-1);
	} 	
	this.value = function() {
		return privateCounter;
	}
};

var counter = new MakeCounter();
console.log(counter);
console.log("counter.value initial :: " + counter.value());
counter.increment();
counter.increment();
console.log("counter.value after 2 increment :: " + counter.value());
counter.decrement();
console.log("counter.value after 1 decrement :: " + counter.value());

console.log("counter.privateCounter :: " + counter.privateCounter);
console.log("counter.globalCounter :: " + counter.globalCounter);

try {
	counter.changeBy(1);
} catch (err) { console.error("error while calling counter.changeBy(1)"); }

console.log("counter.value after 1 increment :: " + counter.value());*/





/*
	INHERITANCE
*/
/*// parent class
function Person (fName) {
	this.firstName = fName;
}

Person.prototype.walk = function () {
	console.log("Person: I'm Walking!");
}

Person.prototype.sayHello = function () {
	//console.log(this);
	console.log("Hello, I'm " + this.firstName);
}

// child class
function Student (fName, subject) {
	Person.call(this, fName);	// here we are sending Student class reference in Person class
	
	this.subject = subject;
}
	
Student.prototype = Person.prototype;
//Student.prototype.constructor = Student; 	//if u don't set the constructor, bydefault constructor remain Person

Student.prototype.walk = function () {
	console.log("Student: I'm Walking!");
}

Student.prototype.showStudentDetails = function () {
	console.log("*** showStudentDetails ***");
}

var student1 = new Student("Johnny", "Mathematics");
//console.log("student1 :: ");
//console.log(student1);

//console.log("student1 name :: " + student1.firstName);

//student1.walk(); 
//student1.sayHello();*/




// multilevel inheritance 
/*function Employee (fName, comp, subject) {
	Student.call(this, fName, subject);
	
	this.company = comp;
}

Employee.prototype = Student.prototype;
Employee.prototype.constructor = Employee;

Employee.prototype.walk = function () {
	console.log("Employee: I'm Walking!");
}

Employee.prototype.displayInfo = function () {
	console.log("Hi, I'm " + this.firstName + " working in " + this.company);
}

var emp1 = new Employee("Mark", "Cybage", "Physics");
console.log("emp1 :: ");
console.log(emp1);

emp1.walk();
emp1.displayInfo();
emp1.showStudentDetails();
emp1.sayHello();
*/




/*
	Object.create(proto [, propertiesObject ])
*/
// creating from other proto
/*var shape = { 
	twoDimensional: true, 
	color: "red",
	
	myColor: function () {
		console.log("shape color :: " + this.color);
	}
};

shape.prototype = {
	getInfo: function () {
		console.log("shape info :: " + this.color);
	}
}

//var square = Object.create(shape, {	
var square = Object.create(shape.prototype, {
	angle: {
		value: 90
	}
}); 

console.log("Shape :: ");
console.log(shape);
console.log("Square :: ");
console.log(square);

square.color = "green";
try {
	square.getInfo();
} catch (e) { console.error("*** error while calling square.getInfo() ***"); }

try {
	square.myColor();
} catch (e) { console.error("*** error while calling square.myColor() ***"); }



console.log("Shape :: ");
console.log(shape);
console.log("Square :: ");
console.log(square);*/



/*
	POLYMORPHISM
*/

function Person (name, city) {
	this.name = name;
	this.city = city;
	console.log(this)
	this.getInfo = function() {
		return "Hello, I am " + this.name + " from " + this.city + ".";
	}
}

function Employee(name, city, comp){
	this.company = comp;
	Person.call(this, name, city);
	//Person.apply(this, arguments);
	console.log(this.name + " " + this.city)
	this.getInfo = function() {
		return "Hello, I am " + this.name + " from " + this.city + ", working in " + this.company + ".";
	}
}

//Employee.prototype = new Person();
//Employee.prototype.constructor = Employee;

//var person = new Person("John", "Mumbai");
var employee = new Employee("Johnny", "Pune", "Cybage");

//console.log(person.getInfo());
//console.log(employee.getInfo());





/*
	Avoid assigning variables to prototypes
	Prototypes should not have properties that are not functions, 
	because prototype properties that are not primitives (such as arrays and objects) 
	will not behave as one would expect
*/

/*function myFunt(name) {
	this.name = name;
	this.data = [1, 2, 3];	
}

myFunt.prototype = {
	//data: [1, 2, 3], // setting a non-primitive property
	
	showData: function () {
		console.log("name: " + this.name + " data: " + this.data);
	}
}

var temp1 = new myFunt('Object1');		
var temp2 = new myFunt('Object2');		

// both instances use the same default value of data
temp1.showData();
temp2.showData();

// however, if we change the data from one instance, it mirrors on the second instance
temp1.data.push(4);

console.log(" *** after modification ***");
temp1.showData();
temp2.showData();*/



/*
	*** redefining prototype vs appending in existing prototype ***
	
	1) When you redefine the prototype, you are removing any properties 
	that DID exist on the item and you are giving it a whole new set
	
	2) when you are adding in existing prototype, you are leaving anything 
	that exists in place and simply adding that one property
	
	3) If you are are starting with a freshly constructed object, 
	both approaches do exactly the same thing.

	4) If you are starting with an existing object, 
	the second form is the only one that makes sense.
*/

/*function MyObject(name, message) {
  this.name = name;
  this.message = message;
}*/

/*MyObject.prototype.doSomething = function () {
	
}*/

/*console.log('*** object b4 redefinig prototype ***');
console.log(new MyObject('john', 'hi, how are you buddy?'));

MyObject.prototype = {
  getName: function() {
	return this.name;
  },
  
  getMessage: function() {
	return this.message;
  }
};*/


/*MyObject.prototype.getName = function () {
	return this.name;
}

MyObject.prototype.getMessage = function () {
	return this.message
}*/

/*console.log('*** object after appending in existing prototype ***');
console.log(new MyObject('john', 'hi, how are you buddy?'));*/



/*
	CLOSURE
*/

//	A closure is a special kind of object that combines two things: 
//	a function, and the environment in which that function was created

function add (a) {
	return function (b) {
		return a + b;
	}
}

var addFunc = add(4);
//console.log(addFunc);
console.log(addFunc(6));