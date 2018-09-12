$(document).ready(function () {

    var contestant;

    var currentQuestion = 0;

    var correct = 0;

    var incorrect = 0;

    var notAnswered = 0;

    var question = 0;

    var images;

    var questions = null;
    var answers = null;
    var counter = 3;


    

        var historyQuestions = [

            
            {


                question: "What is the answer to question 1?",
                options: ["A", "B", "C", "D"],
                answer: [true, false, false, false],
                explainerTrue: ["Correct! The Answer is A!"],
                explainerFalse: ["Incorrect. The Answer is A!"],
                explainerTimeout: ["You ran out of time. The Answer is A!"],
                img: "assets/images/capone.jpg"

            },

            {

                question: "What is the answer to question 2?",
                options: ["A", "B", "C", "D"],
                answer: [false, true, false, false],
                explainerTrue: "Correct! The Answer is B!",
                explainerFalse: "Incorrect. The Answer is B!",
                explainerTimeout: ["You ran out of time. The Answer is A!"],
                img: "assets/images/#.png"

            },

            {

                question: "What is the answer to question 3?",
                options: ["A", "B", "C", "D"],
                answer: [true, false, false, false],
                explainerTrue: "Correct! The Answer is A!",
                explainerFalse: "Incorrect. The Answer is A!",
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
            // DISPLAYS TIMEOUT ANSWER
            if (counter < 0) {
                $("#options").remove();
                $("#result").append(historyQuestions[currentQuestion].explainerTimeout)
                $("#image").append("<img src='" + historyQuestions[currentQuestion].img + "'>")
                clearInterval(timerId);
                notAnswered++;
                currentQuestion++
                console.log(notAnswered)
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

            $(".answer-button").on("click", function () {
                console.log($(this).attr("value"));

                var trueAnswer = historyQuestions[currentQuestion].explainerTrue;
                var falseAnswer = historyQuestions[currentQuestion].explainerFalse;

                var image = historyQuestions[currentQuestion].img;

                // DISPLAYS CORRECT ANSWER
               
                if ($(this).attr("value") === "true") {
                   
                    $("#result").append(trueAnswer)
                    
                    $("#image").append("<img src='" + image + "'>")
                    
                    $("#options").remove();
                    clearInterval(timerId);
                    correct++;
                    currentQuestion++;
                    fadeOutAnswer();
                    // console.log(correct);

                };
                // DISPALYS INCORRECT ANSWER
            
                if ($(this).attr("value") === "false") {
                    $("#result").append(falseAnswer)
                   $("#image").append("<img src='" + image + "'>")
                    $("#options").remove();
                    clearInterval(timerId);
                    incorrect++;
                    currentQuestion++;
                    // console.log(incorrect);

                }

            



            });


        };

// NEED CORRECT/INCORRECT/TIMEDOUT FUNCTIONS BELOW THIS AREA






}); //END OF (document).ready

