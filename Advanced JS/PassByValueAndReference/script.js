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

let c = [1, 2, 3, 4 , 5];

let d = c;

d.push(6);

console.log(c); // Proving that arrays are objects in make up. What if you want to copy an array by value? Simple

let e = [].concat(c);

e.push(7);

console.log("Passed by Value Array", e); // Okay, nice. What about for an actual object?
// Appaz, there are two ways of doing this.
let obj = {
	a: "a",
	b: "b",
	c: "c", 
	d: "d",
	e: "e"
};

// 1 - way
let clonedObj = Object.assign({}, obj);

console.log("The cloned object: " , clonedObj);

// 2 - way

let clonedObj2 = {...obj};

console.log("The second cloned object", clonedObj2);

//checking original object after modifying a property

obj.a = 1;

console.log("Original obj", obj);



let firstObj = {
	a: "a",
	b: "b",
	c: "c", 
	d: "d",
	e: {
		deep: "try and copy me"
	}
};

let cloneFirstObj = Object.assign({}, firstObj);

let cloneFirstObj2 = {...firstObj}

//Deep Cloning

let superClone = JSON.parse(JSON.stringify(firstObj));

firstObj.a = 5, firstObj.c = "memory";

firstObj.e.deep = "wassup?";

console.log(firstObj);
console.log(cloneFirstObj);
console.log(cloneFirstObj2);

//The deep property of the clones are affected as well, cause their cloning was shallow i.e first layer cloning 

console.log(superClone);


