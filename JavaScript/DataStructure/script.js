var listOfAnimals = ["tiger", "cat", "bear", "bird"];
// Accessing arrays. They are zero-indexed.

console.log(listOfAnimals[1]); // cat. 

//Arrays can consist of different data types, but it isn't advised due to performance issues

var mixedList = [1,"tiger",function Name(){console.log('Ife');}]

// console.log( mixedList, {'maxArrayLength': null} ); - Prints all entries in an array
console.log(mixedList);