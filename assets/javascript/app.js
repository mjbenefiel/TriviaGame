$(document).ready(function () {

    var contestant;
    
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
                answer: "A",
                img: "assets/images/#.png"
    
            },
    
            {
                
                question: "What is the answer to question 2?",
                options: ["A", "B", "C", "D"],
                answer: "0",
                img: "assets/images/#.png"
    
            },
    
            {
                
                question: "What is the answer to question 3?",
                options: ["A", "B", "C", "D"],
                answer: 2,
                img: "assets/images/#.png"
    
            },
    
            {
                
                question: "What is the answer to question 4?",
                options: ["A", "B", "C", "D"],
                answer: 0,
                img: "assets/images/#.png"
    
            },
    
            {
                
                question: "What is the answer to question 5?",
                options: ["A", "B", "C", "D"],
                answer: 3,
                img: "assets/images/#.png"
    
            },
    
            {
                
                question: "What is the answer to question 6?",
                options: ["A", "B", "C", "D"],
                answer: 2,
                img: "assets/images/#.png"
    
            },
    
            {
                
                question: "What is the answer to question 7?",
                options: ["A", "B", "C", "D"],
                answer: 1,
                img: "assets/images/#.png"
    
            },
    
            {
                
                question: "What is the answer to question 8?",
                options: ["A", "B", "C", "D"],
                answer: 0,
                img: "assets/images/#.png"
    
            },
            
        ]
            // var questionArr = [questionOne, questionTwo, questionThree, questionFour, questionFive, questionSix, questionSeven, questionEight]
    
            var timerId;
            //beginning of game, on click
            $("#start").on("click", function () {
                $(this).hide();
                timerId = setInterval(timer, 1000)
                displayQuestion();
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
            
            function displayQuestion() {
                $("#question-area").html(historyQuestions[0].question);
                question++;
                
                var optionArr = historyQuestions[0].options;
                  var buttonsArr = [];
                
                  for (let i = 0; i < optionArr.length; i++) {
                    var button = $('<button>');
                    button.text(optionArr[i]);
                    button.attr('id', i);
                    $('#options').append(button);
                   }
                   
                   selectedOption0();
                  
                
                  } 
             function selectedOption0() {
               $('#0').on('click', function(e){
                 $('#result').html("Correct!!! The pet tiger name is aaaaaaaaaaaaaaaa");
                    rightAnswer++;
                                 
                           
                
                });

                  
          
    
            }   
    
        }; //END OF startGame();
    
        startGame();
    
    
    }); //END OF (document).ready