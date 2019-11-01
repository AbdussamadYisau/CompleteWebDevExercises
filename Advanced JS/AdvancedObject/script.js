// Advanced objects - reference type, context, instantiation

//Reference type 

var object1 = { value: 10};

var object2 = object1 ;

var object3 = { value: 10};

object1 === object2 ;// True, why? Makes sense because if the value of object1 is changed, that affects the value of object2

object1 === object3; // false, why? Makes sense because if the value of object1 is changed, that doesn't affect the value of object3

// All the other data types apart from object are all properly defined {i.e primitive type } as per they are created by the language JS, while objects are referenced, as per the programmer creates this.

//context - It is usually mistaken for scope. This is a gross error cause they are quite different. context/this refers to which object we are in atm

const object4 = {
	a:  function() {
	  	// body...
	  	console.log(this);
	  }

}


// Instantiation - is when you make a copy of an object and reuse the code.
class Player {
	constructor (name, type) {

		console.log(this);
		this.name = name;
		this.type = type;
	}
	introduce() {
		console.log(`Hi, I am ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player {
	 constructor(name,type) {
	 	super(name,type);
	 }

     play() {
     	console.log(`WEEEE I'm a ${this.type}`);
     }

}

const wizard1 = new Wizard("Shelly", "Healer");
const wizard2 = new Wizard("Shawn", "Dark Magic");
























