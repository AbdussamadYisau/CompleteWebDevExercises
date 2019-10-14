 var button = document.getElementById("enter");
 var input = document.getElementById("user-input");
 var ul = document.querySelector("ul");

 function inputLength() {
 	return (input.value.length);
 }

 function createListElement() {

 	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);

    //This allows the inout field to be empty after a new task has been entered

    input.value = "";

 }

 function addListAfterClick() {
    if (inputLength()>0) {

    	createListElement();

    }
}

function addListAfterKeyPress(event) {
	 if (inputLength()>0 && event.keyCode === 13) {

        createListElement();

     }
}
button.addEventListener("click", addListAfterClick);


input.addEventListener("keypress", addListAfterKeyPress);
