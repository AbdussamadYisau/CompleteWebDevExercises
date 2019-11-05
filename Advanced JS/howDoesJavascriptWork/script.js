// Memory Heap 

const a = 1; // We've just allocated memory. 

// Memory Leak occurs when we have unused memory (allocated) just laying around, which causes the memory heap t fill and rendres the browser unable to work. This why some are of the opinion that Global Variables are bad cause if we forget to clean them up, it leads to Memory Leak. You get? Like the variables local to functions get deleted after the function has been called. So, you see? Do you? 


// Call Stack - reads and executes our scripts.

console.log("1");
console.log("2");
console.log("3");
console.log("4");

const one = () => {
	const two = () => {
		console.log("4");
	}
	return two;
}

const fun = one();

console.log(fun());
// Simulating a stack overflow.
// function foo() {
// 	foo();
// }

// foo();
