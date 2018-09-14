$(document).ready( function() {
    // Trivia questions and details
    var questions = [
      {
        question: "What year was Gone with the Wind released?",
        answers: ["1939", "1944", "1949", "1955"],
        values: [true, false, false, false],
        detail: "The original director, George Cukor, was fired 18 days into shooting and was quickly replaced by Victor Fleming (who'd also directed The Wizard of Oz). In the thick of production, Fleming allegedly experienced a mental breakdown, and after threatening to drive his car off a cliff, took time off. During the interim, Sam Wood took the reins until Fleming recovered from his exhaustion. The final tally? Cukor, 18 days, Fleming, 93 and Wood, 24.",
        gif: "assets/images/question1.jpg",
      },
      {
        question: "Citizen Kane was actually based on the real life of a tycoon. Which one?",
        answers: ["William Randolph Hearst", "Howard Hughes", "Thomas M. Carnegie", "J.D. Rockefeller"],
        values: [true, false, false, false],
        detail: "Orson Welles’ commitment to his performance as Charles Foster Kane meant that he poured tremendous energy into the role, sometimes at the risk of his own wellbeing. During the scene in which Kane rampages through Susan’s room, smashing furniture and ripping things off the walls, he badly cut his left hand. Then, during the scene in which Kane confronts Boss Jim Gettys (Ray Collins) on a staircase, Welles fell and injured his ankle so badly that he was forced to reschedule certain scenes and direct the film from a wheelchair for several days.",
        gif: "assets/images/question2.jpg",
      },
      {
        question: "Lawrence of Arabia is considered one of the greatest classic films. Who played the title role?",
        answers: ["Richard Harris", "Richard Burton", "Peter O'Toole", "Laurence Olivier"],
        values: [false, false, true, false],
        detail: "While six-foot, three-inch Peter O’Toole cut a towering figure as the lead in the 1962 epic biopic 'Lawrence of Arabia,' the real Lawrence was only five feet, five inches tall. Lawrence remained self-conscious about his height, which may have been caused by a childhood case of the mumps.",
        gif: "assets/images/question3.png",
      },
      {
        question: "2001: A Spacey Odyssey was based on a book. Who wrote that book?",
        answers: ["Jules Verne", "H.G. Wells", "Douglas Adams", "Arthur C. Clarke"],
        values: [false, false, false, true],
        detail: "The only on-location exterior shot of the movie was of the Moon-Watcher ape smashing the animal bones with his own bone weapon, which was shot on an elevated platform near the studio so that Kubrick could get a low angle of actor Dan Richter, who played the Moon-Watcher, tossing the bone into the air.",
        gif: "assets/images/question4.jpg",
      },
      {
        question: "This film opens with a famous shot of an eye being sliced open.",
        answers: ["Un Chien Andalou", "One Flew Over the Cuckcoo's Nest", "A Clockwork Orange", "Throne of Blood"],
        values: [true, false, false, false],
        detail: "Luis Buñuel told Salvador Dalí about a dream in which a cloud sliced the moon in half 'like a razor blade slicing through an eye.' Dalí responded that he'd dreamt about a hand crawling with ants. Out of these two dreams this film was born.",
        gif: "assets/images/question5.jpg",
      },

      {
        question: "In the movie 'E.T.' the title character leaves his friend Elliot. What does he say?",
        answers: ["Phone home", "I'll be right here", "BRB going to the Moon", "I'll be right back"],
        values: [false, true, false, false],
        detail: "Most of the script was written while filming Raiders of the Lost Ark. Spielberg dictated the story to screenwriter Melissa Mathison, who was the then-girlfriend and future wife of Harrison Ford.",
        gif: "assets/images/question6.png",
      },
    
    ]
  
    // Very important for tracking questions. This will track the player's progress through the questions. When this value is equal to questions.length - 1 the score screen will appear
    var currentQuestion = 0;
    var correct = 0; //records number of correct answers
    var wrong = 0; //records number of wrong answers
    var none = 0; //records unanswered (timed out) questions
  
    // End variable area
    //-----------------------------------------------------------------------------------
    // Functions below
  
    // On-click start function
    $("#start").on("click", function() {
     $("#start").remove();
     displayQ();
    
    })
  
  
  
    // This function will display the timer, question, and 
    function displayQ() {
      // Removes the prior message
      $(".message-content").remove();
      $("blockquote").remove();

      // Create the html elements that will constitute the timer, question, and later, the answer area. These are all assigned to a proper variable name
      var questionArea = $("<div>");
      questionArea.attr("id", "question-area")
      var timer = $("<h2>")
      var question = $("<h2>")
  
      // Append elements to the content area, so they display properly
      questionArea.appendTo("#content")
      timer.appendTo(questionArea)
      question.appendTo(questionArea)
  
      // Set up the timer.
      var time = 5;
      timer.html("<h2>" + time + " seconds remaining</h2>")
      
      // Countdown function that will stop when the time hits 0
      var countDown = setInterval( function() {
        time--;
        timer.html("<h2>" + time + " seconds remaining</h2>")
  
        // If time reaches 0, the question times out, none increases in value, and the timedOut function is called
        if (time === 0) {
          clearInterval(countDown)
          questionArea.hide();
          timedOut();
          none++;
        }
      }, 1000);
  
      // Display the question. I'm using the currenQuestion value to reach into the array of objects and pull the proper question.
      question.html(questions[currentQuestion].question)
  
      // Display the answers as list items using a for loop
      for (var i = 0; i < questions[currentQuestion].answers.length; i++) {
        var answers = $("<button>")
        answers.html(questions[currentQuestion].answers[i])
        answers.addClass("answer-buttons")
        answers.attr("value", questions[currentQuestion].values[i])
        answers.attr("id", "a" + i)
        answers.appendTo(questionArea)
      };
  
    
  
  
  
      // If and else if statements to determine what happens, depending on correct answer clicked, or incorrect
      // First, the click cases
      $(".answer-buttons").on("click", function() {
        //checking value of 'this'
        console.log($(this).attr("value"));
  
        // If the value is true, clear the content area, stop the counter, and display the correct answer screen
        if ($(this).attr("value") === "true") {
          questionArea.hide();
          displayCorrect();
          clearInterval(countDown);
          correct++;
        };
        // If false, clear content area, stop counter, and display wrong answer screen
        if ($(this).attr("value") === "false") {
          questionArea.hide();
          displayWrong();
          clearInterval(countDown)
          wrong++;
        };
      });
    };
  
    //------------------------------------------------------------------------------------------
    // Block of post-question displays (what shows up when you click or time out)
  
    // This function will display the correct answer screen
    function displayCorrect() {
      var cycle = setTimeout(displayQ, 3000)
      var messageArea = $("<div>");    
      messageArea.addClass("message-content")
      // Declare content that will go into the messageArea
      var winMessage = $("<h2>");
      var detail = $("<h2>")
      var image = $("<img>")
      // Append it all to the content container and add text and images
      messageArea.appendTo($("#content"));
      winMessage.appendTo($(messageArea));
      detail.appendTo($(messageArea))
      image.appendTo($(messageArea))
      winMessage.text("Correct!");
      detail.text(questions[currentQuestion].detail)
      image.attr("src", questions[currentQuestion].gif)
  
  
      // If there are no questions left, then run this function to display gameOver
      if (currentQuestion === (questions.length - 1)) {
        clearTimeout(cycle);
        var gameEnd = setTimeout( gameOver, 10000)
      }
      currentQuestion++;
    };
    // This function will display the wrong answer screen
    function displayWrong() {
      var cycle = setTimeout(displayQ, 3000);
      var messageArea = $("<div>");
      messageArea.addClass("message-content")
      var lossMessage = $("<h2>");
      var detail = $("<h2>")
      var image = $("<img>")
      // Append it all to the content container and add text and images
      messageArea.appendTo($("#content"));
      lossMessage.appendTo(messageArea)
      detail.appendTo($(messageArea))
      image.appendTo($(messageArea))
      lossMessage.html("Wrong! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
      detail.text(questions[currentQuestion].detail)
      image.attr("src", questions[currentQuestion].gif)
  
      // If there are no questions left, then run this function to display gameOver
      if (currentQuestion === (questions.length - 1)) {
        clearTimeout(cycle);
        var gameEnd = setTimeout( gameOver, 10000)
      }
      currentQuestion++;
    };
  
    // This will display the time out screen
    function timedOut() {
      var cycle = setTimeout(displayQ, 10000);
      var messageArea = $("<div>");
      messageArea.addClass("message-content")
      var lossMessage = $("<h2>");
      var detail = $("<h2>")
      var image = $("<img>")
      // Append it all to the content container and add text and images
      messageArea.appendTo($("#content"));
      lossMessage.appendTo(messageArea)
      detail.appendTo($(messageArea))
      image.appendTo($(messageArea))
      lossMessage.html("You timed out! The right answer was: " + questions[currentQuestion].answers[questions[currentQuestion].values.indexOf(true)]);
      detail.text(questions[currentQuestion].detail)
      image.attr("src", questions[currentQuestion].gif)
  
      // If there are no questions left, then run this function to display gameOver
      if (currentQuestion === (questions.length - 1)) { 
        clearTimeout(cycle);
        var gameEnd = setTimeout( gameOver, 10000)
      }
      currentQuestion++;
    };
  
    // This will display when the currentQuestion amount is equal to questions.length - 1. In other words, when all questions have been answered
    function gameOver() {
      // Clear out the post-question message
      $(".message-content").remove();
      var totalCorrect = $("<h3>")
      var totalIncorrect = $("<h3>")
      var totalNone = $("<h3>")
      var restart = $("<button>")
      totalCorrect.appendTo($("#content"))
      totalCorrect.html("You got " + correct + " correct!")
      totalIncorrect.appendTo("#content")
      totalIncorrect.html("You got " + wrong + " wrong.")
      totalNone.appendTo("#content")
      
      // If block to determine if question or questions should be used
      if (none === 1) {
        totalNone.html("You didn't answer " + none + " question.")
      }
      if (none > 1 || none === 0) {
        totalNone.html("You didn't answer " + none + " questions.")
      }
      
      
      // Restart button
      restart.addClass("restart")
      restart.text("Restart")
      restart.appendTo($("#content"))
  
      //Reset button onclick function
      $(".restart").on("click", function() {
        totalCorrect.remove();
        totalIncorrect.remove();
        totalNone.remove();
        restart.remove();
        currentQuestion = 0;
        correct = 0; //records number of correct answers
        wrong = 0; //records number of wrong answers
        none = 0;
        displayQ();
      })
  
    }
  
  })
  
  
  