const first = () => {
	const greet = "Hi";

	const second = () => {
		alert(greet);
	}

	return second;
}

const newFunc = first();

newFunc(); // This is basically saying that newFunc() === first()() . Mad o


// const first = () => {

//     const greet = "Hi";

// 	const second = () => {


    


// 		const third = () => {

//             alert(greet);
          
//          }

//       return third;
// 	}

//  return second;
// } - Boss Ife and I combined to think up this madness





//Currying - the processs of converting a function that takes multiple argument into one that takes them one at a time.

const multiply = (a, b) => a * b;

const curriedMultiply = (a) => (b) =>  a* b;

const multiplyBy5 = curriedMultiply(5);

 console.log(multiplyBy5(10)); //multiplies 10 by 5



const greeting = (a) => (b) => {

   console.log(`${a} ${b}`);

}

let hello = greeting('Hello');
hello('Abdsamad');

// Compose - is the act of forming a function which comprises of two  functions together. From the two functions, the output of one function is the input of the other. 
const compose = (f,g) => x => f(g(x));
const g = n => n + 1;
const f = n => n * 2;

console.log("Using compose",compose(f,g)(20));


// Avoiding side effects and functional purity whilst using functions
// Functional purity is the thinking of avoiding side effects and always returning a value. It's a deterministic way of doing stuff.



