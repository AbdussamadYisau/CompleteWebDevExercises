 var button = document.getElementById("enter");
 var input = document.getElementById("user-input");
 var ul = document.querySelector("ul");

 function inputLength() {
 	return (input.value.length);
 }

 function underlineParent(event) {
 	event.target.parentNode.classList.toggle("done");
 }

 function removeParent(event) {
 	event.target.parentNode.remove();
 }

 function createListElement() {

 	var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
     li.classList.add("roundedCorners");

    ul.appendChild(li);

    //This allows the input field to be empty after a new task has been entered

    input.value = "";


    //Create the toggle button for done
   
    var toggleDone = document.createElement("button");

    toggleDone.appendChild(document.createTextNode("Done"));

     toggleDone.classList.add("strike");

    li.appendChild(toggleDone);

     toggleDone.addEventListener("click", underlineParent);
     




    //Create the delete button
   
    var delButton = document.createElement("button");

    delButton.appendChild(document.createTextNode("Delete"));

    delButton.classList.add()

    li.appendChild(delButton);

    delButton.addEventListener("click", removeParent);

    // delButton.onclick = removeParent;

  
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