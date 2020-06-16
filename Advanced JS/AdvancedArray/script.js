 // Advanced Arrays

 const array = [1, 2 , 10, 16];

 const double = [];

 const newArray = array.forEach((num) => {

     double.push(num*2);

 })

console.log("array", array);
 console.log("forEach", double);

// Advanced methods - map, filter and reduce. 

// MAP - it automaticcally creates a new array when this method is invoked

const mapArray = array.map((num) => {
  return (num*2);
}); // can even look cleaner const mapArray = array.map(num => num*2);

console.log("Mapped Array: ", mapArray);

// FILTER - basically what you think when the word comes to mind.

const filterArray = array.filter(num => num>5);

console.log("Filter array: ", filterArray);


// REDUCE 

const array1 = [1, 2, 3, 4];
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

// // 1 + 2 + 3 + 4
// console.log(array1.reduce("reduce",reducer));
// // expected output: 10

// // 5 + 1 + 2 + 3 + 4
// console.log(array1.reduce(reducer, 5));
// // expected output: 15

const reduceArray  = array.reduce((accumulator, num)=> {return (accumulator + num)},5)

console.log("reduce", reduceArray);

//They are deterministic, i.e possess function purity and avoids side effects
