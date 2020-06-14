function isUserValid(bool) {
	// body...

	return bool;
}

var answer = isUserValid(true) ? "You may enter" : "You shall not pass";

function moveCommand(direction) {
	// body...
	var whatHappens;

	switch(direction) {
      case "forward":
      whatHappens = "you encounter a monster";
       break;

       case "backward":
       whatHappens = "you encounter dragons and trolls";
       break; 
       
       case "right" : 
       whatHappens = "you encounter Ifunanya ";
       break;

       case "left" : 
       whatHappens = "you encounter Ife";
       break;

       default:
        whatHappens = "please enter a valid direction";

	}

	return whatHappens;
}