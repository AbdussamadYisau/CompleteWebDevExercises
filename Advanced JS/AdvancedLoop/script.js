const basket = ["apples", "oranges", "grapes"];
const detailedBasket = {
	apples: 5,
	oranges: 10,
	grapes : 1000
};
// What we are doing here is iterating, and this can be done on arrays and strings 

// 1
for (var i = basket.length - 1; i >= 0; i--) {
	console.log(basket[i]);
}

//2
basket.forEach(item => {
	console.log(item);
})

//3 - For of
for (item of basket) {
	console.log(`${item} 😎`);
}

// for (item of detailedBasket) {
// 	console.log(`${item} 😎`);
// } // won't work cause detailedBasket isn't iterable. 

for (item of "basket") {
	console.log(item);
}

// 4 - For in - works with objects, it loops over the object and returns the properties.
// This isn't iterating, but enumerating instead. Iterating only works with arrays and strings, while enumerating works with object.
for (item in detailedBasket) {
	console.log(item);
}

for (item in basket) {
	console.log(item);
} // returns 0, 1, 2 because arrays can be seen as objects with indexes as properties




