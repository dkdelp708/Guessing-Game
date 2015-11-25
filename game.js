
	var age = '28';
	var holiday = "Thanksgiving";
	var Seattleite = "No";
	
	var guessNumber = prompt("Guess my age?");
	if (guessNumber === age) {
		alert("Yes, that is my correct age");
	}
	else {
		if (guessNumber < age) {
			alert("Come on, I act more mature than that age!");
		if (guessNumber > age) {
			alert("Woah, take it easy, I am already starting to feel old!");
		}
		}
		alert("You lose!")
	};
	
	var guessHoliday = prompt("What Holiday is coming up?");
	switch (guessHoliday) {
		case "Thanksgiving":
			alert("Good job, you must be looking forward to some turkey and gravy!");
			break;
		case "thanksgiving":
			alert("Good job, you must be looking forward to some turkey and gravy!");
			break;
		case "Turkey Day":
			alert("Good job, you must be looking forward to some turkey and gravy!");
			break;
			default:
			alert("Wrong Holiday, remember it is November!");
		};

	var guessSeattleite = prompt("Did I grow up in Seattle?");
	switch (guessSeattleite) {
		case "No":
			alert("Correct, I was raised in Eastern Washington, in the small town of Walla Walla");
			break;
		case "no":
			alert("Correct, I was raised in Eastern Washington, in the small town of Walla Walla");
			break;
		case "NO":
			alert("Correct, I was raised in Eastern Washington, in the small town of Walla Walla");
			break;
		case "N":
			alert("Correct, I was raised in Eastern Washington, in the small town of Walla Walla");
			break;
		case "n":
			alert("Correct, I was raised in Eastern Washington, in the small town of Walla Walla");
			break;
			default:
			alert("No, no only lived here for the last four years");
		};

	alert(guessNumber);
	alert(guessHoliday);
	alert(guessSeattleite);
