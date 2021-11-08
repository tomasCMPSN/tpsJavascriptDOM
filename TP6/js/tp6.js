var secondsRemaining;
var intervalHandle;

function resetPage(){

	document.getElementById("inputArea").style.display = "block";

}

function tick(){
	var timeDisplay = document.getElementById("time");
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);

	if (sec < 10) {
		sec = "0" + sec;
	}

	var message = min.toString() + ":" + sec;

	timeDisplay.innerHTML = message;

	if (secondsRemaining === 0){
		alert("Done!");
		clearInterval(intervalHandle);
		resetPage();
	}

	secondsRemaining--;

}

function startCountdown(){

	function resetPage(){
		document.getElementById("inputArea").style.display = "block";
	}

	var minutes = document.getElementById("minutes").value;
	
	if (isNaN(minutes)){
		alert("Please enter a number");
		return;
	}

	secondsRemaining = minutes * 60;
	
	intervalHandle = setInterval(tick, 1000);

	document.getElementById("inputArea").style.display = "none";


}

window.onload = function(){

	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	
	var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","Iniciar");
	startButton.onclick = function(){
		startCountdown();
	};

	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton)		

}