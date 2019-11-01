let a = 5;

let b = a; //Passed by value. b and are stored in separate boxes/locations/memory

b++ ;
a = 2;

console.log(`a is: ${a} & b is: ${b}`);


let obj1 = {
	name: "Yao",
	password: "123"
} ;

let obj2 = obj1; //Passed by reference. Basically, obj 2 and obj 1 are referencing the same location in memory.

obj2.password = "easypeasy";

//console.log(`this is object1: ${obj1} , and this is object2: ${obj2}`);

console.log("Object 1", obj1);
console.log("Object 2", obj2);
