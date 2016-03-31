

var welcome="Welcome to THE TRIVIA GAME!!!  This game will test your knowledge of various subjects.  Would you like to play? Please enter yes or no. ";
var askForNameVar="OK Player, What is your name";
var entry=document.getElementById("fromPlayer");
var nameOfPlayer="";
var startButton=document.getElementById("start");
var stopButton=document.getElementById("stop");
var startGame ="Ok " + nameOfPlayer + ", Select a category and Press the Start button when you are ready!";
var i = 0;
var firstchoice = document.querySelector("#trythis1p");
var secondchoice = document.querySelector("#trythis2p");
var thirdchoice = document.querySelector("#trythis3p");
var fourthchoice = document.querySelector("#trythis4p");
var checkBox1 = document.getElementById("cbox1");
var checkBox2 = document.getElementById("cbox2");
var checkBox3 = document.getElementById("cbox3");
var checkBox4 = document.getElementById("cbox4");
var correctChoice = 0;
var congratulations = "Congratulations on the correct answer!  When you are ready for the next question, hit the start button.";
var admonishment = "That was an incorrect answer. When you are ready for the next question, hit the start button.";
var endOfGameText = "You have completed all of the questions for this category.  Your results are displayed on the scoreboard.  If you want to continue, put a c in the reply field, hit enter, pick another category and hit the start button.";
var stopGameText = "You have elected to stop play.  Your results are displayed on the scoreboard.  If you want to continue, put a c in the reply field, hit enter, pick another category and hit the start button.";
var messageContent = "";
var currentScore = 0;
var hiScore = 0;
var questionsAnswered = 0;
var answeredCorrectly = 0;

var politics = [{question:"Who is the POTUS?", correct:"Barack Obama", bad1:"George W. Bush", bad2:"Hillary Clinton", bad3:"Donald Trump"}, {question:"Who is the Vice-President?", correct:"Joe Biden", bad1:"Richard Daley", bad2:"Rayful Edmunds", bad3:"Marion Barry"}, {question:"In 2012, who did Barack Obama beat to win a second term?", correct:"Mitt Romney", bad1:"Bill Oreilly", bad2:"Sarah Palin", bad3:"John Boehner"}, {question:"Who was the Vice President for George W. Bush?", correct:"Dick Cheney", bad1:"George Jefferson", bad2:"Sarah Day O'Connor", bad3:"Vito Corleone"}, {question:"Who was the Vice President for Ronald Reagan?", correct:"George H W Bush", bad1:"George W. Bush", bad2:"Jeb Bush", bad3:"Bill Clinton"}];

var washington = [{question:"Who is the designer of Washington, DC?", correct:"Pierre Charles L'Enfant", bad1:"George Washington", bad2:"Thomas Jefferson", bad3: "Benjamin Franklin"}, {question:"Who is the first mayor of Washington, DC (since home rule)?", correct:"Walter Washington", bad1:"Marion Barry", bad2:"Muriel Bowser", bad3:"Linda Cropp"}];

var geography = [{question: "what is the longest river in the world?", correct: "The Nile", bad1:"The Amazon", bad2: "Yangtze", bad3: "Yellow River"}, {question:"What is the tallest waterfall in the world?", correct: "Angel Falls, Venezuela", bad1:"Tugela Falls, South Africa", bad2:"Tres Hermanas Falls, Peru", bad3:"Olo'upena Falls, United States"}];

function Validateentry (playerMessage) {
	var returnValue = "";
	var messageChoices = ["y", "yes", "Yes", "Y"];
	if (messageChoices.includes(playerMessage)) {
		return (returnValue = "yes");
	}

	messageChoices = ["c", "C"];
	if (messageChoices.includes(playerMessage)) {
	return (returnValue = "con");
	}
}

function Initialize () {
	console.log("Initialize");
	document.getElementById("messages").textContent = welcome;
}

function askForName () {
	console.log("askForName");
	document.getElementById("messages").textContent = askForNameVar;
	entry.value = "";
}

function clickCheckBox() {
	console.log("clickCheckBox");
	var cboxChoices = [checkBox1.checked, checkBox2.checked, checkBox3.checked, checkBox4.checked];
	questionsAnswered += 1;

	if (cboxChoices[correctChoice] === true) {
		answeredCorrectly += 1;
		correctAnswer();
	}
	else  {
		wrongAnswer();
	}
}

function clearCheckboxes() {
	console.log("clearCheckboxes");
	checkBox1.checked = false;
	checkBox2.checked = false;
	checkBox3.checked = false;
	checkBox4.checked = false;
}

function correctAnswer() {
	console.log("correctAswer");
	var points = 0;
	sendCongrats ();
	points = 100;
	currentScore = currentScore + points;
	if (currentScore > hiScore) {
		hiScore = currentScore;
	}
	updateScoreboard();

}

function sendCongrats() {
	console.log("sendCongrats");
	document.getElementById("messages").textContent = congratulations;
}

function updateScoreboard() {
	console.log("updateScoreboard");
	document.getElementById("hiScore").textContent = hiScore;
	document.getElementById("currentScore").textContent = currentScore;
}

function wrongAnswer() {
	console.log("wrongAnswer");
	var points = 0;
	sendAdmonishment();
	currentScore = currentScore + points;
	if (currentScore > hiScore) {
		hiScore = currentScore;
	}
	updateScoreboard();
}

function sendAdmonishment() {
	console.log("sendAdmonishment");
	document.getElementById("messages").textContent = admonishment;

}

function clickStartButton() {
	console.log("clickStartButton");
	var category = getCategory();
	messageContent = "";
	switch (category) {
		case "2":
			loadPolitics();
			break;
		case "3":
			loadWashington();
			break;
		case "4":
			loadGeography();
			break;
		default:
			console.log("no category");
	}

	clearCheckboxes();
	document.getElementById("messages").textContent = messageContent;

}

function clickStopButton() {
	console.log("clickStopButton");
	endOfGame();
	clearCheckboxes();
	document.getElementById("messages").textContent = stopGameText;
}

function shuffle (array) {
  var i = 0;
  var j = 0;
  var temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    if (j === 0) {
    	correctChoice = i;
    }
  }
}

function loadPQuestion(i) {
	console.log("loadPquestion");
	var choices = [];
	
	document.getElementById("question").textContent = politics[i]["question"];

	choices[0] = politics[i]["correct"];
	choices[1] = politics[i]["bad1"];
	choices[2] = politics[i]["bad2"];
	choices[3] = politics[i]["bad3"]; 

	shuffle(choices);

	firstchoice.textContent = choices[0];
	secondchoice.textContent = choices[1];
	thirdchoice.textContent = choices[2];
	fourthchoice.textContent = choices[3]; 



}

function loadPolitics() {
	console.log("loadPolitics");
	if (i > (politics.length - 1)) {
		endOfGame();
	}
	else {
		loadPQuestion(i);
		i += 1;
	}

}

function loadGQuestion(i) {
	console.log("loadGquestion");
	var choices = [];
	
	document.getElementById("question").textContent = geography[i]["question"];

	choices[0] = geography[i]["correct"];
	choices[1] = geography[i]["bad1"];
	choices[2] = geography[i]["bad2"];
	choices[3] = geography[i]["bad3"]; 

	shuffle(choices);

	firstchoice.textContent = choices[0];
	secondchoice.textContent = choices[1];
	thirdchoice.textContent = choices[2];
	fourthchoice.textContent = choices[3];

}

function loadGeography() {
	console.log("loadGeography");
	if (i > (geography.length - 1)) {
		endOfGame();
	}
	else {
		loadGQuestion(i);
		i += 1;
	}

}

function loadWQuestion(i) {
	console.log("loadWquestion");
	var choices = [];
	
	document.getElementById("question").textContent = washington[i]["question"];

	choices[0] = washington[i]["correct"];
	choices[1] = washington[i]["bad1"];
	choices[2] = washington[i]["bad2"];
	choices[3] = washington[i]["bad3"]; 

	shuffle(choices);

	firstchoice.textContent = choices[0];
	secondchoice.textContent = choices[1];
	thirdchoice.textContent = choices[2];
	fourthchoice.textContent = choices[3];

}

function loadWashington() {
	console.log("loadWashington");
	if (i > (washington.length - 1)) {
		endOfGame();
	}
	else {
		loadWQuestion(i);
		i += 1;
	}

}

function endOfGame() {
	console.log("endOfGame");
	messageContent = endOfGameText;
	document.getElementById("endofgametext").textContent = "You answered " + answeredCorrectly + " out of " + questionsAnswered + " questions";

}

function reset() {
	console.log("reset");
	document.getElementById("question").textContent = "";
	firstchoice.textContent = "";
	secondchoice.textContent = "";
	thirdchoice.textContent = "";
	fourthchoice.textContent = "";
	messageContent = "";
	i= 0; 
	clearCheckboxes();


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
	console.log(Validateentry(entry.value));
	if ((key === 13) && (Validateentry(entry.value) === "yes")) {
		console.log("event if y");		
		document.getElementById("instructions").style.display = "none";
		askForName();
	}
	else if ((key === 13) && (Validateentry(entry.value) === "con")) {
		console.log("event if c");		
		reset();
		document.getElementById("category").value = 1;
		entry.value = "";
	}
	else if ((key === 13) && (entry.value !== "")) {
		console.log("else if event listener");
		nameOfPlayer = entry.value;
		startGame ="Ok " + nameOfPlayer + ", Select the Politics category and Press the Start button when you are ready!";
		document.getElementById("messages").textContent = startGame;
		entry.value = "";
	}
		else if (Validateentry(entry.value) === "con") {
			console.log("event listener reset");
		} 
		else if (entry.value == "") {
			console.log("event listener nothing entered");
		}
		else {
			console.log("final else of event listener");
			document.getElementById("messages").textContent = askForNameVar;			
		}
});

startButton.addEventListener("click", clickStartButton);
stopButton.addEventListener("click", clickStopButton);
checkBox4.addEventListener("click", clickCheckBox);
checkBox3.addEventListener("click", clickCheckBox);
checkBox2.addEventListener("click", clickCheckBox);
checkBox1.addEventListener("click", clickCheckBox);

//	}


console.log("start program");
Initialize();

console.log("end program");
