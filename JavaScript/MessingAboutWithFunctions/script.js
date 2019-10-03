/** Function declaration - one way of creating functions.
  function sayHello() {
    console.log("Hello");
 }

 sayHello(); 

  Function Expression/Anonymous function - another way of creating functions.

 var sayBye = function() {
 	console.log("Bye");
}

  sayBye();
 function multiply(a,b) {
    return (a*b);
 }
 multiply(5, 6); **/

// var a = function(a,b) {
// 	if (a>10 || b > 10) {
// 		return "that's too hard";
// 	} else {
// 		return (a*b);
// 	}


// Multiple functions 
function multiply(a,b) {
	return (a*b);
}

var total = multiply(5,12);
alert(total);