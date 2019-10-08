//Objects are collections of properties. An object is both a data structure and a JS type.

var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
};

//An Object is more dynamic than an array, cause it allows us to have properties and values.

//How to access values/elements in an object? Use the name of the object and the property whose value you want eg: user.name will return John

//How to add properties to an already declared object? Simple. Say you want t add a user's favourite food, just say: user.favoriteFood = "Spinach"

//The value of an already declared property can be upgraded/changed, eg user.isMarried = "True" - This is why a const object can be upgraded.

//It is possible to put an array inside an object. Also possible to put a function.

var user = {
	name: "John",
	age: 34,
	hobby: "Soccer",
	isMarried: false,
	spells:["abracadbra", "boom!", "Shazam"],
	shout: function() {
		console.log("AHHHH");
	}
};

//How to access an array in an object

console.log(user.spells[1]); //Returns boom!
console.log(user.spells.slice(0,-1)); //Returns all the spells
console.log(user.shout()); //Accesses the function

//It is also possible to put objects in arrays

var list = [
    {
       username: "andy",
       passowrd: "secre"
 
    },

    {
       username: "jess",
       passowrd: "shantelle"
 
    }
];

console.log(list[0].username); // Returns Andy