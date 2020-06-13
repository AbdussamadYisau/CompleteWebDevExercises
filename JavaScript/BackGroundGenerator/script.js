var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var copButton = document.querySelector(".copyTextButton");

function setGradient() {
	body.style.background = `linear-gradient(to right, ${color1.value},${color2.value})`;
  copButton.style.background =  `linear-gradient(to right, ${color1.value},${color2.value})`;

  // Tells us the colors we choose
  css.textContent = `background: ${body.style.background};`;

}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


function copText() {

  var p1 = document.getElementById("p1");
  // Set color with the hidden field so that you can call select on it

  var hiddenField = document.getElementById("copyText");
  hiddenField.value = p1.innerHTML;
  hiddenField.select();
  document.execCommand("copy");
    
  alert("Copied the text: " + hiddenField.value);

}

