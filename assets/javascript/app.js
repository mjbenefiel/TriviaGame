$(document).ready(function(){

var questions = null;
var answers = null;

function startGame () {

var questionOne = {
    id: 1,
    question: "What is the answer to question 1?",
    options: ["A", "B", "C", "D"],
    answer: "A",
    img: "assets/images/#.png"

}

var questionTwo = {
    id: 2,
    question: "What is the answer to question 2?",
    options: ["A", "B", "C", "D"],
    answer: "B",
    img: "assets/images/#.png"

}

var questionThree = {
    id: 3,
    question: "What is the answer to question 3?",
    options: ["A", "B", "C", "D"],
    answer: "C",
    img: "assets/images/#.png"

}

var questionFour = {
    id: 4,
    question: "What is the answer to question 4?",
    options: ["A", "B", "C", "D"],
    answer: "A",
    img: "assets/images/#.png"

}

var questionFive = {
    id: 5,
    question: "What is the answer to question 5?",
    options: ["A", "B", "C", "D"],
    answer: "D",
    img: "assets/images/#.png"

}

var questionSix = {
    id: 6,
    question: "What is the answer to question 6?",
    options: ["A", "B", "C", "D"],
    answer: "D",
    img: "assets/images/#.png"

}

var questionSeven = {
    id: 7,
    question: "What is the answer to question 7?",
    options: ["A", "B", "C", "D"],
    answer: "C",
    img: "assets/images/#.png"

}

var questionEight = {
    id: 8,
    question: "What is the answer to question 8?",
    options: ["A", "B", "C", "D"],
    answer: "A",
    img: "assets/images/#.png"

}

questions = null // reset question
answers = null // reset answer

//array to store all questions
var questionSelection = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight]
//function to display all questions and options
function questionDisplay() {
$.each(questionSelection, function (index, questions) {
    // div created so wrestler displays in correct area with "success" panel
    var newQuestionDiv = $("<div>").addClass("character panel panel-success").attr("id", questions.id);

    $("<div>").addClass("panel-heading").html(questions.question).appendTo(newQuestionDiv);
    $("<div>").addClass("panel-body").append(questions.options).appendTo(newQuestionDiv);
    // $("<div>").addClass("panel-footer").append("<span class='hp'>" + wrestler.healthPoints + "</span>").appendTo(newCharacterDiv);

    // append new div to character selection
    $("#question-area").append(newQuestionDiv);
});
};
   
    //beginning of game, on click
    $("#start").on("click", function(){
        $("#start").remove();
        // $("#question-area").append(newQuestionDiv);
        questionDisplay();
                
        });


}; //END OF startGame();

startGame();








}); //END OF (document).ready