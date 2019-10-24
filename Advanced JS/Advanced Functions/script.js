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
