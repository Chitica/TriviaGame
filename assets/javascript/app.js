
var position = 0;
var correct = 0;
var resultStats;
var testStatus;
var question;
var choices;
var choiceOne, choiceTwo, choiceThree, choiceFour;
var answer;
var firstChoice, secondChoice, thirdChoice, fourthChoice;
var score;
var counter = 21;
var timeLeft = $("#time-left");
var feedback = $("#feedback");

var questions = [
    ["1. What is 2 + 2 equal to ", 7, 4, 9, 40, 4],
    ["2. What is 4 x 9 equal to ", 47, 34, 39, 36, 36],
    ["3. What is the square root of 576? ", 12, 25, 24, 14, 24],
    ["4. What is the value of pi? ", 3.14, 3.12, 3.18, 3.19, 3.14],
    ["5. Which of the following is an integer? ", -1.2, 0.5, 3, 1/4, 3],
    ["6. If the radius of a circle is 5 units, what is the approximate circumference? ", 31, 15, 25, 14, 31 ],
    ["7. How many sides does a pentagon have? ", 8, 5, 9, 3, 5],
    ["8. What is the value of x if 3x = 30? ", 25, 15, 10 , 3, 10],
    ["9. What is the value of x if 8 + x = 13? ", 5, 8, 3, 6, 5],
    ["10. What is the value of x if 9/x = 3?", 2, 4, 3, 9, 3] 
];

function setQuestion(){
    resultStats = $("#result-stats");
    testStatus = $("#test-status");
    score = $("#total-score");
    
    if( position >= questions.length){
        testStatus.html("You have completed this math quiz");
        resultStats.html("<h2>You got " + correct + " of " + questions.length + " questions correct</h2>");
        
        position = 0;
        correct = 0;
        stopTimer();
        feedback.html("");

        return false;
    }

    testStatus.html("Question " + (position + 1) + " of " + questions.length);

    question = questions[position][0];
    choiceOne = questions[position][1];
    choiceTwo = questions[position][2];
    choiceThree = questions[position][3];
    choiceFour = questions[position][4];

    resultStats.html("<h1>" + question + "</h1>");

    resultStats.append("<input type='button' id='first-answer' class='btn btn-primary'  style='border: solid white 2px' value=" + choiceOne + " name='choices' onclick='checkAnswer();'></input>");
    resultStats.append("<input type='button' id='second-answer' class='btn btn-primary' style='border: solid white 2px' value=" + choiceTwo + " name='choices' onclick='checkAnswer();'></input>");
    resultStats.append("<input type='button' id='third-answer' class='btn btn-primary' style='border: solid white 2px' value=" + choiceThree + " name='choices' onclick='checkAnswer();'></input>");
    resultStats.append("<input type='button' id='fourth-answer' class='btn btn-primary' style='border: solid white 2px' value=" + choiceFour + " name='choices' onclick='checkAnswer();'></input>");
}




function checkAnswer(){


$(document).ready(function(){

    var answer = questions[position][5];
    var firstChoice = $("#first-answer");
     var secondChoice = $("#second-answer");
     var thirdChoice = $("#third-answer");
     var fourthChoice = $("#fourth-answer");
    var firstChoicePicked = firstChoice.click(function(){
        if(choiceOne === answer){
            feedback.html("CORRECT!");
            correct++;
            restart(); 
        }else{
            feedback.html("Sorry the correct response was " + answer );
            restart();
       } 
    })
    var secondChoicePicked = secondChoice.click(function(){
        if(choiceTwo === answer){
            feedback.html("CORRECT!");
            correct++;
            restart();   
        }else{
            feedback.html("Sorry the correct response was " + answer );
            restart();
        } 
    })

    var thirdChoicePicked = thirdChoice.click(function(){
        if(choiceThree === answer){
            feedback.html("CORRECT AGAIN!");
            correct++;
            restart();
        }else{
            feedback.html("Sorry the correct response was " + answer );
            correct++;
            restart();
        } 
    })
    var fourthChoicePicked = fourthChoice.click(function(){
        if(choiceFour === answer){
            feedback.html("CORRECT AGAIN!");
            correct++;
            restart();      
        }else{
            feedback.html("Sorry the correct response was " + answer );
            restart();
        } 
    })

})
}

    
    var interval = setInterval(function() {
        counter--;
        timeLeft.html(counter);
        if (counter == 0) {
            restart();
            clearInterval();
        }
    }, 1000);

    function stopTimer(){
        clearInterval(interval);
        timeLeft.html("");
       
    }

function restart(){
    score.html( correct + " of 10");
    position++;
    counter = 21;
    setQuestion();
}


setQuestion();
checkAnswer();

