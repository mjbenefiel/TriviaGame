$(document).ready(function () {

    var contestant;

    var currentQuestion = 0;

    var rightAnswer = 0;

    var wrongAnswer = 0;

    var unAnswer = 0;

    var question = 0;

    var images;

    var questions = null;
    var answers = null;
    var counter = 3;


    function startGame() {

        var historyQuestions = [
            {


                question: "What is the answer to question 1?",
                options: ["A", "B", "C", "D"],
                answer: [true, false, false, false],
                img: "assets/images/#.png"

            },

            {

                question: "What is the answer to question 2?",
                options: ["A", "B", "C", "D"],
                answer: [false, true, false, false],
                img: "assets/images/#.png"

            },

            {

                question: "What is the answer to question 3?",
                options: ["A", "B", "C", "D"],
                answer: [true, false, false, false],
                img: "assets/images/#.png"

            },


        ]
        // var questionArr = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight]

        var timerId;
        //beginning of game, on click
        $("#start").on("click", function () {
            $(this).hide();
            timerId = setInterval(timer, 1000)
            displayQuestionAnswers();
            timer();


        });

        function timer() {
            $(".timer").html("Time remaining: " + " " + counter + " secs");
            counter--;
            if (counter < 0) {
                clearInterval(timerId);
                return;
            }


        }

        function displayQuestionAnswers() {
            $("#question-area").html(historyQuestions[currentQuestion].question);
            question++;


            for (let i = 0; i < historyQuestions[currentQuestion].options.length; i++) {
                var answerButton = $('<button>');
                answerButton.html(historyQuestions[currentQuestion].options[i]);
                answerButton.addClass("answer-button");
                answerButton.attr('value', historyQuestions[currentQuestion].answer[i]);
                answerButton.attr('id', i);
                $('#options').append(answerButton);
            }
              
        $(".answer-button").on("click", function() {
            console.log($(this).attr("value"));
            
        });

    }


    }; //END OF startGame();

    startGame();


}); //END OF (document).ready

