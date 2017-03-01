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
    firstCountDown,
    secondCountDown,
    answeredCorrectly = 0,
    answeredWrongly = 0,
    firstTimer,
    secondTimer;

//----------FUNCTION TO PRINT CONTENT ON THE PAGE--------------
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

$("#start-button").click(function () {

    //change content displayed
    $("#firstTimer").show();
    $("#start-page").hide();
    quesAndAns();
})

//-----------CODE FOR SUMBIT BUTTON-------------

$("#submit-btn").click(function () {
    console.log("*******submit btn pressed****");
    //    firstCountDown = 0;
    $(this).data('clicked', true);
});



//------------SETTINGS FOR NEXT BUTTON------------------------

$("#nxt-btn").click(function () {
    console.log("*******NEXT QUESTION btn pressed****");
    $(this).data('clicked', true);
    quesAndAns()
});


//-------CODE FOR FUNCTION THAT PRINTS TRIVIA CONTENT----------

function quesAndAns() {
    "use strict";
    console.log("---------quesAndAns functions executed------");
    //change content dislayed
    $("#answer-display-page").hide();
    $("#trivia-content").show();
    count++;
    contentSetter();
    console.log("count: " + count);
    firstCountDown = 15;

    clearInterval(firstTimer);
    firstTimer = setInterval(function () {
        firstCountDown--;
        console.log("firstCountDown :" + firstCountDown + " & secondCountDown: " + secondCountDown);
        $("#countdown").text(firstCountDown);
        if (firstCountDown < 1 || $("#submit-btn").data('clicked')) {
            secondCountDown = 10;
            clearInterval(firstTimer);
            console.log("------------quesAndAns firstTimer alegedly cleared cause  submitBtn clicked------");
            $("#submit-btn").data('clicked', false);
            answerDisplay();
        }
    }, 1000);
}

//-------CODE FOR FUNCTION THAT DISPLAYS ANSWER-------------

function answerDisplay() {
    "use strict";
    console.log("---------answerDisplay functions executed------");
    //change content displayed

    $("#trivia-content").hide();
    $("#answer-display-page").show();
    var btnChecked = $("input[type=radio]:checked").val();
    var correctAns = items[count].rightAnswer;
    if (btnChecked === correctAns) {
        answeredCorrectly++;
        console.log("You Are Corret");
    } else {
        answeredWrongly++;
        console.log("You Are Wrong");
    }
    $("input[type=radio]").prop('checked', false);

    clearInterval(secondTimer);
    secondCountDown = 10;
    secondTimer = setInterval(function () {
        secondCountDown--;
        $("#countdown").text(secondCountDown);
        console.log("Time Left :" + secondCountDown + " $ firstCountDown: " + firstCountDown);
        if (secondCountDown < 1 || $("#nxt-btn").data('clicked')) {
            // Timer stops if time runs out or if sumbit is pressed
            $("#nxt-btn").data('clicked', false);
            clearInterval(secondTimer);
            console.log("------------secondTimer alegedly cleared----------");
            secondTimer = 10
            firstCountDown = 15;
            console.log("...and secondTimer: " + secondTimer);
            quesAndAns();
        }
    }, 1000);
}