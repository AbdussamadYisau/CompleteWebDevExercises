// new way of declaring variables, let & const .
// what's important here is that let & const are block scoped, while var isn't. Also, this affects Hoisting - https://medium.com/@sammieyisau/hoisting-in-javascript-75ccbb391301
// Basically, all I have learned here has been covered while writing the Hoisting article


// Destructuring .

// Old way

const obj = {
	player: "bobby",
	experience: 100,
	wizardLevel : true
}

const player = obj.player;

 console.log("old way", player);

const experience = obj.experience;

console.log("old way", experience);

const wizardLevel = obj.wizardLevel;

console.log("old way", wizardLevel);
// ES6 

const obj1 = {
	player1: "bobby",
	experience1: 100,
	wizardLevel1 : true
}

const {player1, experience1, wizardLevel1 } = obj1;

console.log("Destructuring", player1);

console.log("Destructuring", experience1);

console.log("Destructuring", wizardLevel1);