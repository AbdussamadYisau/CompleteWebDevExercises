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
	  	console.log(this === object4);
	  }

}

const object4a = {
	a:  function() {
	  	// body...
	  	console.log(this);
	  }

}
console.log(object4.a()); // True because the object we are currently in is this object 4
console.log(object4a.a()); // Returns the object4a cause that's the object we are currently in.

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
console.log(wizard1.introduce());
console.log(wizard1.play());
const wizard2 = new Wizard("Shawn", "Practicer of the dark arts");

console.log(wizard2.introduce());
console.log(wizard2.play());
























