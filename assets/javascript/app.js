/*************************TRIVIAL TRIVIA*******************************/
/***************PSEUDO CODE*************************/
//MAKE AN ARRAT OF OJECTS
//EACH OBJECT REPRESENTS A PAGE WITH QUESTIONS AND THE PROSPECTIVE ANSWERS
//CREATE A FUNCTION THAT PRINTS THE OJECTS TO THE THE PAGE, WITH EACH PROPERTY PRIINTED TO ITS RESPECTIVE SPOT ON THE PAGE
//THERE SHOULD BE A VARIABLE THAT SPECIFIES THE OBJECT IS BEING PRINTED
//-------------AND ARRAY OF OBJECTS CONTAINING STRINGS (THE QUESTIONS, CHOICES, AND ANSWERS)-----------
var items = [
    {
        "question": "Which territory is not a part of the Caribbean?",
        "choices": ["Dominica", "Jamacia", "St. Martin", "Hawaii"],
        "rightAnswer": "Hawaii"
    },

    {
        "question": "The shortest runway on earth, not more than 1,300 feet long, can be found on which Caribbean island?",
        "choices": ["Barbabos", "Jamacia", "Saba", "Antigua"],
        "rightAnswer": "Saba"
    }, {
        "question": "Which island is known as the Nature Isle of the Caribbean?",
        "choices": ["Dominia", "Puerto Rico", "St. Martin", "Grenada"],
        "rightAnswer": "Dominia"
    },

    {
        "question": "The only foreign place that former president George Washington ever visited was...",
        "choices": ["Dominican Republic", "Jamacia", "Cuba", "Barbados"],
        "rightAnswer": "Barbados"
    },

    {
        "question": "The very first James Bond film titled Dr. No was filmed in the Caribbean Island of... ",
        "choices": ["Trinidad & Tobago", "Jamaica", "St. Martin", "Guadeloupe"],
        "rightAnswer": "Jamaica"
    },

    {
        "question": "How many countries are there in the Caribbean?",
        "choices": ["100", "50", "75", "25"],
        "rightAnswer": "75"
    }
];
var count = -1,
    firstCountDown, 
    secondCountDown, 
    answeredCorrectly = 0,
    answeredWrongly = 0,
    unanswered = 0,
    firstTimer, secondTimer;
//----------FUNCTION TO PRINT TRIVIA CONTENT ON THE PAGE--------------
function contentSetter() {
    //print question 
    "use strict";
    $("#question").text((count + 1) + ". " + items[count].question);
    //print choices
    $("#ans1").html("<span class='items-identifier'>A.</span> " + items[count].choices[0]);
    $("#ans2").html("<span class='items-identifier'>B.</span> " + items[count].choices[1]);
    $("#ans3").html("<span class='items-identifier'>C.</span> " + items[count].choices[2]);
    $("#ans4").html("<span class='items-identifier'>D.</span> " + items[count].choices[3]);
    $(".items-identifier").css({
        fontWeight: "bold"
    });
    //print Correct answer 
    $("#answer").html("<span id='items-identifier'>THE ANSWER IS: </span>" + items[count].rightAnswer);
    //set value of respective radio buttons
    $("#selection-btn1").val(items[count].choices[0]);
    $("#selection-btn2").val(items[count].choices[1]);
    $("#selection-btn3").val(items[count].choices[2]);
    $("#selection-btn4").val(items[count].choices[3]);
}
//------------------CODE FOR START BUTTON----------------------
var strtBtn = $("#start-button").click(function () {
        //change content displayed
        $("#firstTimer").show();
        $("#start-page").hide();
        $("#timer").show();
        // load first question using the questionAndAns function 
        quesAndAns();
    })
    //-----------CODE FOR SUMBIT BUTTON-------------
$("#submit-btn").click(function () {
    $(this).data('clicked', true);
});

function quesAndAns() {
    "use strict";
    //change content dislayed
    //this next line is only neccessary when the first question is passed since it the answer display page is... 
    // ....hidden by default 
    $("#answer-display-page").hide();
    $("#tick-and-ex").empty();
    $("#trivia-content").show();
    count++; //iterates through the item array so that the different trivia items can be loaded 
    contentSetter(); //loads the triva content unto the page
    firstCountDown = 15;
    clearInterval(firstTimer);
    //this is a countdown to that provides a 15 second window in which the question can be tackled
    firstTimer = setInterval(function () {
        firstCountDown--;
        $("#countdown").text(firstCountDown);
        if (firstCountDown < 11) {
            $("#countdown").css({
                color: "darkgreen",
                textShadow: "2px 2px 4px darkgreen"
            })
        }
        if (firstCountDown < 6) {
            $("#countdown").css({
                color: "red",
                textShadow: "2px 2px 4px red"
            })
        }
        if (firstCountDown < 1 || $("#submit-btn").data('clicked')) {
            secondCountDown = 10;
            clearInterval(firstTimer);
            $("#submit-btn").data('clicked', false);
            answerDisplay();
            $("#countdown").css({
                color: "black",
                textShadow: "2px 2px 4px black"
            })
        }
    }, 1000);
}
//------------SETTINGS FOR NEXT BUTTON------------------------
/*the issue is the quesAndAns function is called twice: once in the secondtimer*/
$("#nxt-btn").click(function () {
    $(this).data('clicked', true);
});
//-------CODE FOR FUNCTION THAT PRINTS TRIVIA CONTENT----------
//-------CODE FOR FUNCTION THAT DISPLAYS ANSWER-------------
function answerDisplay() {
    "use strict";
    //change content displayed
    $("#trivia-content").hide();
    $("#answer-display-page").show();
    var btnChecked = $("input[type=radio]:checked").val();
    var correctAns = items[count].rightAnswer;
    if (btnChecked === correctAns) {
        answeredCorrectly++;
        $("#correct-or-wrong").html("Contratulations! You are correct.");
        $("#tick-and-ex").html("<img src='assets/images/tick.png'>");
    } else if (btnChecked === undefined) {
        unanswered += 1
        $("#correct-or-wrong").html("You did not answer the question.");
    } else if (btnChecked !== correctAns) {
        answeredWrongly++;
        $("#correct-or-wrong").html("Sorry! You are incorrect.");
        $("#tick-and-ex").html("<img src='assets/images/x.png'>");
    }
    $("input[type=radio]").prop('checked', false);
    clearInterval(secondTimer);
    secondCountDown = 10;
    secondTimer = setInterval(function () {
        secondCountDown--;
        $("#countdown").text(secondCountDown);
        if (secondCountDown < 1 || $("#nxt-btn").data('clicked')) {
            // Timer stops if time runs out or if sumbit is pressed
            $("#nxt-btn").data('clicked', false);
            clearInterval(secondTimer);
            if (count === items.length - 1) {
                clearInterval(secondTimer);
                return finalPage();
            }
            secondTimer = 10
            firstCountDown = 15;
            quesAndAns();
        }
    }, 1000);
}

var container = $(".container");
var rightly = $("<div id='rightly' class='final-page'>");
var wrong = $("<div id='wrong' class='final-page'>");
var unans = $("<div id='unans' class='final-page'>");
var resetBtn = $("<button id='reset-btn' class='final-page'>Reset</button>");

resetBtn.click(function () {
    count = -1;
    answeredCorrectly = 0;
    answeredWrongly  = 0;
    $(this).hide();
    $("#answer-display-page").hide();
    $("#final-page").show();
    $("#trivia-content").hide();
    $("#timer").hide();
    $(".final-page").hide();
    $("#start-page").show();
});

resetBtn.addClass("btn");

function finalPage() {
    $(".final-page").show();
    $("#answer-display-page").hide();
    $("#final-page").show();
    $("#trivia-content").hide();
    $("#timer").hide();
    rightly.text("Questions Answered Correctly: " + answeredCorrectly);
    wrong.text("Questions Answered Incorrectly: " + answeredWrongly);
    if (unanswered > 0 ) {
    unans.text("YOU LEFT " + unanswered + " QUESTIONS UNANSWERED.");
    }
    container.append(rightly);
    container.append(wrong);
    container.append(unans);
    container.append(resetBtn);
}
