1 == "1"; // True
1 === "1" // false

if(1) {
	console.log(5); // Interesting. It works cause JS coerces 1 to the boolean true
}

if(0) {
	console.log(5); //Doesn't work cause JS coerces 0 into the boolean false.
	
}
