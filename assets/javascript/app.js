// This is a function to set the questions and options on the page
function contentSetter(item) {
  $("#question").html(item[0]);
  $("#answer1").html(item[1]);
  $("#answer2").html(item[2]);
  $("#answer3").html(item[3]);
  $("#answer4").html(item[4]);
  $("#correct-ans").html(item[5]);
}

var counter = 0;

function startScreen() {
  $(".q-and-a").css("display", "none");
  $("#question-area").append("<div id='start-screen'></div>");
  $("#start-screen").html("<button id='start-btn'>Click Here to Start</button>");
  $("#start-btn").on('click', function() {
    $("#start-screen").css("display", "none");
    contentSetter(item[counter].newContent());
    $(".q-and-a").css("display", "block");
	  console.log("counter: " + counter + ", item.length: " + item.length);
   if (counter <= item.length) {
	   countdown(15, printTime, nextQuestion);
  if (counter === item.length) {
    return finalScreen();
  }
   } 
  function printTime() {
    $("#countdown").html(secondsLeft);
  }
 
  contentSetter(item[counter].newContent()); //the content setter function is called, placing the Q&A on the page
  });
}

startScreen();

function finalScreen() {
  $(".q-and-a").css("display", "none");
  $("#question").hide();
}

var secondsLeft;

function countdown(timeLeft, doWhile, doAtEnd) {
	
  secondsLeft = 0;
	secondsLeft = timeLeft;
  clearInterval(timer);
  var timer = setInterval(function() {
    secondsLeft--;
    doWhile();
    console.log("secondsLeft: " + secondsLeft);
    if (secondsLeft === 0) {
      doAtEnd();
      clearInterval(timer);
    }
  }, 1000);
}

// This is an array of objects containing the questions and answers for the trivia, with the method creating an array values that will be entered as arguments in the contentSetter function
var item = [{
    "question": "Which territory is not a part of the Caribbean?",
    "options": ["Dominica", "Jamacia", "St. Martin", "Hawaii"],
    "rightAnswer": "Hawaii",
    "newContent": function() {
      return [this.question, this.options[0], this.options[1], this.options[2], this.options[3], this.rightAnswer];
    }
  },

  {
    "question": "The shortest runway on earth, not more than 1,300 feet long, can be found on which Caribbean island?",
    "options": ["Barbabos", "Jamacia", "Saba", "Antigua"],
    "rightAnswer": "Saba",
    "newContent": function() {
		"use strict";
      return [this.question, this.options[0], this.options[1], this.options[2], this.options[3], this.rightAnswer];
    }
  }, {
    "question": "Which island is known as the Nature Isle of the Caribbean?",
    "options": ["Dominia", "Puerto Rico", "St. Martin", "Grenada"],
    "rightAnswer": "Dominia",
    "newContent": function() {
		"use strict";
      return [this.question, this.options[0], this.options[1], this.options[2], this.options[3], this.rightAnswer];
    },
  },

  {
    "question": "The only foreign place that former president George Washington ever visited was...",
    "options": ["Dominican Republic", "Jamacia", "Cuba", "Barbados"],
    "rightAnswer": "Barbados",
    "newContent": function() {
		"use strict";
      return [this.question, this.options[0], this.options[1], this.options[2], this.options[3], this.rightAnswer];
    }
  },

  {
    "question": "The very first James Bond film titled Dr. No was filmed in the Caribbean Island of... ",
    "options": ["Trinidad & Tobago", "Jamacia", "St. Martin", "Guadeloupe"],
    "rightAnswer": "Hawaii",
    "newContent": function() {
		"use strict";
      return [this.question, this.options[0], this.options[1], this.options[2], this.options[3], this.rightAnswer];
    }
  },

  {
    "question": "How many countries are there in the Caribbean?",
    "options": ["100", "50", "75", "25"],
    "rightAnswer": "Hawaii",
    "newContent": function() {
		"use strict";
      $("h1").append("<div id='finalpage'>");
      return [this.question, this.options[0], this.options[1], this.options[2], this.options[3], this.rightAnswer];
    }
  }
];

function nextQuestion(strtPg) { //press the submit button to get the questions & answers on the page
  counter += 1; //this counter travases the array of objects (that contain the Q&A). 
  console.log("counter: " + counter + ", item.length: " + item.length);
   if (counter <= item.length) {
	var secondsLeft = 15;
	clearInterval(timer);
	var timer = setInterval(function() {
    secondsLeft--;
    printTime();
    console.log("secondsLeft: " + secondsLeft);
    if (secondsLeft === 0) {
      nextQuestion();	
    }
  }, 1000);
  if (counter === item.length) {
    return finalScreen();
  }
   } 
  function printTime() {
    $("#countdown").html(secondsLeft);
  }
 
  contentSetter(item[counter].newContent()); //the content setter function is called, placing the Q&A on the page
}

var btnclick = $(".submit-button").on('click',nextQuestion);

var interimPage = $("#question").append("<div id='interimPage'></div>"); //interim page created
$("#interimPage").html("<div><p id='x-or-tick'></p></div><div id='correct-ans></div>"); // divs inside of interim-page created

function lunchInterim() {
  $(".q-and-a").hide();
  $("#interimPage").show();
  if ("TODO: IF ANSWER IS CORRECT") {
    $("#x-or-tick").html("<img src='assets/images/tick.pgn'");
  } else {
    $("xOrTick").html("<img src='assets/images/tick.x'");
  }
}