//Root Scope (window object)
var fun = 5;

function funFunction() {
	// child scope

	var fun = "helloo";
	console.log(1,fun);
}

function funnerFunction() {
	// child scope

	var fun = "Byeee";
	console.log(2,fun);
}

function funnestFunction() {
	// child scope

	 fun = "AHHH";
	console.log(3,fun);
}

console.log("window: ",fun);