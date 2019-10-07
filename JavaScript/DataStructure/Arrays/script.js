// var listOfAnimals = ["tiger", "cat", "bear", "bird"];
// // Accessing arrays. They are zero-indexed.

// console.log(listOfAnimals[1]); // cat. 

// //Arrays can consist of different data types, but it isn't advised due to performance issues

// var mixedList = [1,"tiger",function Name(){console.log('Ife');}]

// // console.log( mixedList, {'maxArrayLength': null} ); - Prints all entries in an array
// console.log(mixedList);

// var list = [["tiger", "cat", "bear", "bird"]];

// console.log(list[0][1]);

// list.shift() returns "tiger", and the array is shifted to the left. So now, it only contains cat, bear and bird
//list.pop() removes "bird", and the array is shifted to the right.
//list.push(needs an argument), it adds elements to the array
/** list.concat(["bee", "dear"]) adds elements to the list, but This method does not change the existing arrays, but returns a new array, containing the values of the joined arrays. A work around is too make use of var's weakness (redeclaration and updating).
var list = ["tiger", "sawamura","goat"]
var list = list.concat(["bee", "dear"])

**/

//Exercise 6,  using this array,
 var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.
console.log (array.shift());
// 2. Sort the array in order.
console.log(array.sort());
// 3. Put "Kiwi" at the end of the array.
var array = array.concat(["Kiwi"]);
// 4. Remove "Apples" from the array.
console.log(array.shift());
// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
 console.log(array.reverse());
// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
 var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1]);
 

