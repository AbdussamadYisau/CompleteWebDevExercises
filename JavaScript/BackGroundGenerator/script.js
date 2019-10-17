var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background =
	 "linear-gradient(to right, "+ color1.value + ","+ color2.value+")";
      
      // Tells us the colors we choose
      css.textContent = body.style.background  + ";";

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


function copText() {
  // var copyText = document.getElementsByTagName("h3")[0];
  // copyText[0].select();
  // copyText[0].setSelectionRange(0, 99999)
  // document.execCommand("copy");
  // alert("Copied the text: " + copyText.value);

  var p1 = document.getElementById("p1");
  // Set color with the hidden field so that you can call select on it

  var hiddenField = document.getElementById("copyText");
  hiddenField.value = p1.innerHTML;
  hiddenField.select();
  document.execCommand("copy");
    
  alert("Copied the text: " + hiddenField.value);

}