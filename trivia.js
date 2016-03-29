console.log("Hello World");

var welcome="Welcome to THE TRIVIA GAME!!!  This game will test your knowledge of various subjects.  Would you like to play? Please enter yes or no. ";
var askForNameVar="OK Player, What is your name";
var entry=document.getElementById("fromPlayer");
var nameOfPlayer="";
var startButton=document.getElementById("start");
var startGame ="Ok " + nameOfPlayer + ", Select the Politics category and Press the Start button when you are ready!";
var i = 0;
var firstchoice = document.querySelector("#trythis1p");
var secondchoice = document.querySelector("#trythis2p");
var thirdchoice = document.querySelector("#trythis3p");
var fourthchoice = document.querySelector("#trythis4p");
var politics = [{question:"Who is the POTUS?", correct:"Barack Obama", bad1:"George W. Bush", bad2:"Hillary Clinton", bad3:"Donald Trump"}, {question:"Who is the Vice-President?", correct:"Joe Biden", bad1:"Richard Daley", bad2:"Rayful Edmunds", bad3:"Marion Barry"}, {question:"In 2012, who did Barack Obama beat to win a second term?", correct:"Mitt Romney", bad1:"Bill Oreilly", bad2:"Sarah Palin", bad3:"John Boehner"}, {question:"Who was the Vice President for George W. Bush?", correct:"Dick Cheney", bad1:"George Jefferson", bad2:"Sarah Day O'Connor", bad3:"Vito Corleone"}, {question:"Who was the Vice President for Ronald Reagan?", correct:"George H W Bush", bad1:"George W. Bush", bad2:"Jeb Bush", bad3:"Bill Clinton"}];
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
	console.log("Initialize");
	document.getElementById("messages").innerHTML = welcome;
}

function askForName () {
	console.log("askForName");
	document.getElementById("messages").innerHTML = askForName;
	entry.value = "";
}

function clickStartButton() {
	console.log("clickStartButton");
	var category = getCategory();
	switch (category) {
		case "2":
		// politics
			loadPolitics();
//		case "3":
//				washington, dc
//			loadWQuestion();
//		case  "Geography":
//		// geography
//			loadGQuestion();
		default:
			console.log("no category");
	}
}

function loadPQuestion(i) {
	console.log("loadPquestion");
	
	document.getElementById("question").innerHTML = politics[i]["question"];
	firstchoice.innerHTML = politics[i]["correct"];
	secondchoice.innerHTML = politics[i]["bad1"];
	thirdchoice.innerHTML = politics[i]["bad2"];
	fourthchoice.innerHTML = politics[i]["bad3"]; 

}

function loadPolitics() {
	console.log("loadPolitics");
	loadPQuestion(i);
	i += 1;

}

function getCategory() {
	console.log("getCategory");
	var value = document.getElementById("category").value;
	return value;

}

entry.addEventListener( "keypress", function (event) {
	console.log("eventListener");
	var key = event.keyCode;
	console.log(entry.value);
	if ((key === 13) && (Validateentry(entry.value))) {
		console.log("event if");
		askForName();
	}
	else if ((key === 13) && (entry.value !== "")) {
		console.log("else if event listener");
		nameOfPlayer = entry.value;
		startGame ="Ok " + nameOfPlayer + ", Select the Politics category and Press the Start button when you are ready!";
		document.getElementById("messages").innerHTML = startGame;
	}
		else {
			console.log("final else of event listener");
//			nameOfPlayer = entry.value;
//			document.getElementById("messages").innerHTML = askForNameVar;			
		}
});

startButton.addEventListener("click", clickStartButton);
//	}


console.log("start program");
Initialize();

console.log("end program");
