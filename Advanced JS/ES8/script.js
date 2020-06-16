//.padStart(), .padEnd()
 console.log("Turtle".padStart(10));
 console.log("5".padStart(2, '0'));

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"

const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"


//Trailing commas - allowed in arrays, objects, functions etc. If more than one is used, it creates a sparse array

const fun = (a,b,c,d,) => {
	console.log(a);
}

console.log(fun(1,2,3,4,)); // returns 1

// Object.values, Object.entries - came to replace Object.keys

// Old way of looping through objects

let obj = {
	username0: "Santa",
	username1: "Rudolf",
	username2: "Mr. Grinch"
} 


Object.keys(obj).forEach((key, _index) => {
	console.log(key, obj[key]);
})

// New way

Object.values(obj).forEach(value => {
	console.log(value); // returns just value
})

Object.entries(obj).forEach(value => {
	console.log(value); // returns property and value
})

//Regular concatenation
Object.entries(obj).map(value => {
	return (value[0].replace("username", " ") + " : " + value[1]); // returns  [" 0 : Santa", " 1 : Rudolf", " 2 : Mr. Grinch"]
})

// Using Template Strings
Object.entries(obj).map(value => {
	return (`${value[0].replace("username", " ")}  :  ${value[1]}`); 
})


