//Declaring Object Properties

let cat = 'Miaow';
let dog = 'Woof';
let bird = 'Peet peet';
const name = 'Jimi';

let someObject = {
  cat,
  dog,
  bird,
  [name] : "hello",
}

console.log(someObject);

// {
//  cat: "Miaow",
//  dog: "Woof",
//  bird: "Peet peet",
//  Jimi : "hello"
// }