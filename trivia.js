console.log("Hello World");

var welcome="Welcome to THE TRIVIA GAME!!!  This game will test your knowledge of various subjects.  Would you like to play? Please enter yes or no. ";
var askForNameVar="OK Player, What is your name";
var entry=document.getElementById("fromPlayer");
var nameOfPlayer="";
var startButton=document.getElementById("Start");
console.log(startButton);

function Validateentry (playerMessage) {
	var messageChoices = ["y", "yes", "Yes", "Y"];
	if (messageChoices.includes(playerMessage)) {
		return true;
	}
	else {
		return false;
	}
}

function Initialize () {
	document.getElementById("messages").innerHTML = welcome;
}

function askForName () {


}

function clickStartButton() {
	var category = getCategory();
	switch (category) {
		case "Politics":
			loadPQuestion();
		case "Washington, dc":
			loadWQuestion();
		case  "Geography":
			loadGQuestion();
		default:
			console.log("no category");
	}
}

function loadPQuestion() {
	var Politics = ["Who is the President of the United States of America", "Barack Obama", "George W Bush", "Hillary Clinton", "Bill Clinton", politics, 1]


}

function getCategory() {
	var value = document.getElementById("category").value;
	return value;

}

entry.addEventListener( "keypress", function (event) {
	var key = event.keyCode;
	console.log(entry.value);
	if ((key === 13) && (Validateentry(entry.value))) {
		askForName();
		document.getElementById("messages").innerHTML = askForNameVar;
	}
	else if ((key === 13) && (entry.value !== "")) {
		nameOfPlayer = entry.value;
	}
});

startButton.addEventListener("click", clickStartButton());
//	}


console.log("start program");
Initialize();

console.log("end program");
