//Objects are collections of properties. An object is both a data structure and a JS type.

// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,
// };

//An Object is more dynamic than an array, cause it allows us to have properties and values.

//How to access values/elements in an object? Use the name of the object and the property whose value you want eg: user.name will return John

//How to add properties to an already declared object? Simple. Say you want to add a user's favourite food, just say: user.favoriteFood = "Spinach"

//The value of an already declared property can be upgraded/changed, eg user.isMarried = "True" - This is why a const object can be upgraded.

//It is possible to put an array inside an object. Also possible to put a function.

// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,
// 	spells:["abracadbra", "boom!", "Shazam"],
// 	shout: function() {
// 		console.log("AHHHH");
// 	}
// };

// A function inside an object is a method.

//How to access an array in an object

// console.log(user.spells[1]); //Returns boom!
// console.log(user.spells.slice(0,-1)); //Returns all the spells
// console.log(user.shout()); //Accesses the function

//It is also possible to put objects in arrays

// var list = [
//     {
//        username: "andy",
//        passowrd: "secre"
 
//     },

//     {
//        username: "jess",
//        passowrd: "shantelle"
 
//     }
// ];

// console.log(list[0].username); // Returns Andy



// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
      

// 2. Create an array which contains the object you have made above and name the array "database".
        // var database = [
        //         {
        //             username: "Ifeoluwa Daranijo",
        // 		    password: "PWD",
        //         },

        //         {
        //             username: "Sean Tizzle",
        // 		    password: "weight",
        //         },

        //          {
        //             username: "Abdussalam",
        // 		    password: "Chill",
        //         }

        // ];
// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
// var newsFeed = [

//         {
//         	username: "Mauruf Kilonipekun",
//         	timeline: "wassup, homies?",
//         },

//         {
//         	username:"Adigun" ,
//         	timeline:"Kilo n sele gangan?",
//         },

//         {
//         	username:"Ifunanya",
//         	timeline: "Kilo n sele gangan?",
//         },
// ];

// var todos = [
//    "clean room", 
//    "brush teeth",
//    "exercise",
//    "study javascript", 
//    "eat healthy"

// ];

// var todosImportant = [
//    "clean room!", 
//    "brush teeth!",
//    "exercise!",
//    "study javascript!", 
//    "eat healthy!"

// ];

 var todosLength = todos.length;
// THE FOR LOOP
// for (var i = 0; i < todosLength; i++) {
// 	todos.pop();
// } - this returns an empty array

// for (var i = 0; i < todos.length; i++) {
// 	todos.pop();
// } - this returns only the first two elements. 

// THE WHILE LOOP
// var counter = 10;
// while(counter>0) {
// 	console.log(counter);
// 	counter--;
// }

// THE DO WHILE LOOP

// var counterTwo = 10;

// do {
// 	console.log("DO WHILE", counterTwo);
// 	counterTwo--;

// } while(counterTwo > 10);


// THE forEach

//  todos.forEach(function(i) {
//  	console.log(i);
// })


// function logTodos(todo,i) {
// 	console.log(todo,i);
// }

// todos.forEach(logTodos);


// todosImportant.forEach(logTodos);




















