 let button = document.getElementById("enter");
 let input = document.getElementById("user-input");
 let ul = document.querySelector("ul");

 function inputLength() {
 	return (input.value.length);
 }

 function underlineParent() {
    event.target.parentNode.classList.toggle("done");

 }

 function removeParent(event) {
 	event.target.parentNode.remove();
 }

 function createListElement() {

 	let li = document.createElement("li");
   li.appendChild(document.createTextNode(input.value));
   ul.appendChild(li);

   //This allows the input field to be empty after a new task has been entered

   input.value = "";

   // Action to strike through task when completed
   li.addEventListener("click", underlineParent);
     




    //Create the delete button
   
    let delButton = document.createElement("button");

    delButton.appendChild(document.createTextNode("Delete"));
    li.appendChild(delButton);

    delButton.addEventListener("click", removeParent);

    

  
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