# coding-quiz

## pseudo code
* create start button that starts a timer
    * add a button in html file that says "Start Quiz"
* time starts to count down from set number of seconds
    * add eventListener - start button starts the countdown of the clock
    * time amount to start from 60seconds, will decrease by one second.
    * need a question to be prompted and options of answers for user to select 
    * if user gets incorrect answer, time will decrease by 5 seconds.
* a question is presented to the page when start button is clicked
    * add eventListener - add click event to start button
    * varName.addEventListener("click", function () {})
* user is presented with four options to answer
* when user selects an option it moves to the next question
* if use chose the correct answer, a message at the bottom appears with "Correct!", else a message with "Wrong!" appears
* if incorrect answer is chosen then it deducts 5 seconds to overall time
* when time runs out or user completes all questions, the program stops
* user is presented with their score and an input box to place their initials and submit their highscore
* user is presented with option to Go Back and to Clear Highscores
    * This page will list all highscores and will be the page that the user can jump to by selecting the "View Highscores" link in the header.