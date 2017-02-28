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
    }
    , {
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
        "choices": ["Trinidad & Tobago", "Jamacia", "St. Martin", "Guadeloupe"],
        "rightAnswer": "Hawaii"
    },

    {
        "question": "How many countries are there in the Caribbean?",
        "choices": ["100", "50", "75", "25"],
        "rightAnswer": "Hawaii"
    }
];

var count = -1,
    timeRemaining;


//----------FUNCTION TO PRINT CONTENT ON THE PAGE--------------
function contentSetter() {
    //print question 
    $("#question").text((count+1)+". "+items[count].question);

    //print choices

    $("#ans1").html("<span class='items-identifier'>A.</span> " + items[count].choices[0]);
    $("#ans2").html("<span class='items-identifier'>B.</span> " + items[count].choices[1]);
    $("#ans3").html("<span class='items-identifier'>C.</span> " + items[count].choices[2]);
    $("#ans4").html("<span class='items-identifier'>D.</span> " + items[count].choices[3]);
    $(".items-identifier").css({
        fontWeight: "bold"
    });


    //print Correct answer 
    $("#answer").html("<span id='items-identifier'>THE ANSWER IS: </span>"+ items[count].rightAnswer);
}

//------------------CODE FOR START BUTTON----------------------

var startBtn = $("#start-button").click(function () {

    //change content displayed
    $("#timer").show();
    $("#start-page").hide();
    QuesAndAns();
})

//-----------CODE FOR SUMBIT BUTTON-------------

var submitBtn = $("#submit-btn").click(function () {
    timeRemaining = 0;
})

//-------CODE FOR FUNCTION THAT PRINTS TRIVIA CONTENT----------

function QuesAndAns() {
    //change content dislayed
    $("#answer-display-page").hide();
    $("#trivia-content").show();
    count++;
    contentSetter();
    console.log("count: " + count);
    timeRemaining = 15;
    var timer = setInterval(function () {
        timeRemaining--;
        console.log("timeRemaining :" + timeRemaining);
        $("#countdown").text(timeRemaining);
        if (timeRemaining === 0) {
            clearInterval(timer);
            answerDisplay();
        }
    }, 1000);
}

//-------CODE FOR FUNCTION THAT DISPLAYS ANSWER-------------

function answerDisplay() {
    //change content displayed
    
    $("#trivia-content").hide();
    $("#answer-display-page").show();

    timeRemaining = 0;
    timeRemaining = 10;
    var timer = setInterval(function () {
        timeRemaining--;
        $("#countdown").text(timeRemaining);
        console.log("timeRemaining :" + timeRemaining);
        if (timeRemaining === 0) {
            // Timer stops if time runs out or if sumbit is pressed
            clearInterval(timer);
            QuesAndAns();
        }
    }, 1000);

}