//Template Strings

let name = "Sally";
let age = 34;
let pet = "horse";

//Old way

const greeting = "Hello " + name + ", you seem to be " + age + " years old. What a great " + pet + " you have there!";

console.log("Old way (concatenation & double quotes): ", greeting);
// new way

const greetingBest = `Hello ${name}, you seem to be ${age - 10} years old. What a great ${pet} you have there!`;

console.log("Template Strings: ", greetingBest);

//default arguments

function greet(name = "", age = 30, pet = "cat") {
	// body...

	const defaultArgument = `Hello ${name}, you seem to be ${age - 10} years old. What a great ${pet} you have there!`;
      return defaultArgument;


}

console.log (greet());

console.log(greet("John", 50, "Raptor"));

//Symbols data type 

let sym = Symbol();
let sym1 = Symbol("foo");
let sym2 = Symbol("bar");
let sym3 = Symbol("foo");

// sym1 === sym3 retuns false. why? no two symbols can ever be the same, each symbol is unique.

//The symbol value is used as an identifier mostly for object properties


//Arrow functions

function add(a,b) {
	return a + b;
}

const add2 = (a,b) => a + b;
