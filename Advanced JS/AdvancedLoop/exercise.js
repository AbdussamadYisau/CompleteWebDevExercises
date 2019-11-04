const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
  apples: 5,
  oranges: 10,
  grapes: 1000
}

//1
for (let i = 0; i < basket.length; i++) {
  console.log(basket[i]);
}

//2
basket.forEach(item => {
  console.log(item);
})

for (item in detailedBasket) {
  console.log(item);
}

for (item of basket) {
  console.log(item);
}

// Question #1:
// create a function called biggestNumberInArray() that takes
// an array as a parameter and returns the biggest number.
// biggestNumberInArray([-1,0,3,100, 99, 2, 99]) should return 100;
// Use at least 3 different types of javascript loops to write this:
const array = [-1,0,3,100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

function biggestNumberInArray(arr) {
  let maxValue = 0;
   for(item of arr) {
      if (maxValue < item) {
        maxValue = item;
      }
   }

   return maxValue;
}

function biggestNumberInArray2(arr) {
   let maxValue = 0;
   for(item of arr) {
      if (maxValue < item) {
        maxValue = item;
      }
   }

   return maxValue;
}

function biggestNumberInArray3(arr) {

   let maxValue = 0;
   for(item of arr) {
      if (maxValue < item) {
        maxValue = item;
      }
   }

   return maxValue;

}


// Question #2:
// Write a function checkBasket() that lets you know if the item is in the basket or not
amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

function checkBasket(basket, lookingFor) {

  for (item in basket) {
    if (item === lookingFor) {
      return (`${lookingFor} is present in this basket`);
    }
  }
     return `What you're looking for isn't in this basket`;
}

// const checkBasket =(basket, lookingFor) => 

//   lookingFor in basket ? `${lookingFor} is in the basket` : `What you're looking for isn't in the basket`;

checkBasket(amazonBasket, "glasses");







