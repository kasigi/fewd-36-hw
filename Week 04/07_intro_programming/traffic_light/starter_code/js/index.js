document.getElementById('stopButton').onclick = illuminateRed;
document.getElementById('goButton').onclick = illuminateGreen;
document.getElementById('slowButton').onclick = illuminateYellow;
document.getElementById('flyButton').onclick = illuminateFly;

function clearLights(){
	  document.getElementById('stopLight').style.backgroundColor = "black";
	  document.getElementById('flyLight').style.backgroundColor = "black";
	  document.getElementById('goLight').style.backgroundColor = "black";
	  document.getElementById('slowLight').style.backgroundColor = "black";

}

function illuminateFly() {
  clearLights();
  document.getElementById('flyLight').style.backgroundColor = "purple";
}

function illuminateRed() {
	clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}

function illuminateYellow() {
	clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}

function illuminateGreen() {
	clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}