<h1>Tinseltown Trivia: Classic Movies</h1>

Live version: https://mjbenefiel.github.io/TriviaGame/
<hr></hr>

Author: Michael Benefiel

Feel free to use some or all of this code if you're trying to complete a similar project.
<hr></hr>

<h3> App screenshot </h3>

![alt text](https://raw.githubusercontent.com/mjbenefiel/TriviaGame/master/assets/images/readme.jpg "Tinseltown Trivia")

<hr></hr>

<h2> Project overview</h2>
This timed trivia app utilizes jQuery for a seamless user experience, and tests your knowledge of classic Hollywood films.
<hr></hr>

<h2> How it works </h2>
Hit the "begin" button. Read the question. Answer the question by clicking the appropriate button. Repeat until game ends.
<hr></hr>

<h2>Technology used</h2>

[Bootstrap 3.3.7](http://getbootstrap.com/)

[jQuery 3.3.1](https://jquery.com/)
<hr></hr>

<h4>Below is a thorough, but not comprehensive, step-by-step process of how I got the app running in terms of code</h4>

- Questions variable to declare all questions, answers, values, details, and images

- currentQuestion variable to track current question in trivia game

- correct variable to track correct answers

- wrong variable to track wrong answers

- none variable to track timed out question/answers

- on click function to start game

- displayQuestion function to display timer, question and answer area

    - remove message content from previous screen

    - remove blockquote from previous screen

    - create html elements for timer and question

        - append those elements to content area
    
    - set up timer variable (equal to 20 seconds)

    - display time remaining

    - countdown function

    - display function by pulling from for loop

    - for loop for answers

        - create button div for answers

            - assign value to each answer

        - append answers to question area

    - on click function for answer buttons

        - if statement for correct answer

        - if statement for incorrect answer

    - displayCorrect function to display correct answer response

    - displayWrong function to display incorrect answer response

    - timedOut function to display time out answer response

    - if statement that will display gameOver screen once questions are finished

    - gameOver function to display screen with # of correct, incorrect and timedout response. Restart button included on this screen.

    - if statement to determine if plural form of question should be used with the timed out responses logged

    - restart button attributes

    - on click function for restart button

        - goes back to displayQuestion function


    
