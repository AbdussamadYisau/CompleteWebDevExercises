//Root Scope (window object)
var fun = 5;

function funFunction() {
	// child scope

	var fun = "helloo";
	console.log(fun);
}

function funnerFunction() {
	// child scope

	var fun = "Byeee";
	console.log(fun);
}

function funnestFunction() {
	// child scope

	 fun = "AHHH";
	console.log(fun);
}

console.log(fun);