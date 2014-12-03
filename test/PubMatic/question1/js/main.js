var MyArrayModule = (function() {
	function MyArray () {
		// var arr = Array.apply(null, arguments);
		// var ctor = arr.constructor = arguments.callee;
		// arr.__proto__ = ctor.prototype;


		//arguments.callee: will refer to currently exicuting function inside function body
		// var arr = Array.apply(null, arguments);
		// arr.__proto__ = MyArray.prototype;


		/*var arr = Object.create(Array.prototype);
		arr = Array.apply(null, arguments) || arr;
		for (var method in MyArray.prototype) {
			//console.log(method);
			//console.log(MyArray.prototype[method]);
			if (MyArray.prototype.hasOwnProperty(method))
				arr[method] = MyArray.prototype[method];
		}*/

		//console.log(arguments.callee)

		var arr = Array.apply(null, arguments) || arr;
		arr.constructor = MyArray;
		Object.setPrototypeOf(arr, MyArray.prototype);
		return arr;
	}

	return MyArray;
})();

MyArrayModule.prototype = Object.create(Array.prototype);//new Array();

MyArrayModule.prototype.add = function (item) {
	//console.log(Object.prototype.toString.call(item).toLowerCase());
	if (Object.prototype.toString.call(item).toLowerCase() === '[object array]')
		this.push.apply(this, item);
	else
		this.push.call(this, item);
}

MyArrayModule.prototype.addAll = function (arr) {
	var len = arr.length;
	var i = 0;
	for (i = 0; i<len; i++) {
		this.add(arr[i]);
	}
}

var collection = new MyArrayModule(1, 2, 3, 4); 

console.log(collection instanceof Array);    //true 
console.log(collection instanceof MyArrayModule);  //true 

console.log(collection);                     //[1,2,3,4]; 
console.log(collection.length);              //4 
collection.add("hello");
  
console.log(collection[4]);                  //"hello" 
console.log(collection.length);              //5 
  
collection.push("world"); 
 
console.log(collection.length);              //6 
console.log(collection[5]);                  //world 
  
collection.addAll(["java", "script", [7,8,9]]); 
  
console.log(collection.length);              //8 
console.log(collection);                     //[1,2,3,4,"hello", "world", "java", "script"]
collection[8] = "last"; 
console.log(collection.length);              //9 
console.log(collection.pop());               //"last"
console.log(collection.length);              //8 
  
console.log(Array.prototype.addAll);         //undefined