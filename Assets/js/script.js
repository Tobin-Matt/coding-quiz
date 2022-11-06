
//need to have the timeEl access the start button - start button to be added to the HTML file for the intro page
var startBtn          = document.querySelector('#start-btn');
var introContainer    = document.querySelector('.intro-container');
var questionContainer = document.querySelector('.question-container');
var timeEl            = document.querySelector('#timer');
var questionTextElm   = document.querySelector("#question");
var previousBtn       = document.querySelector("#previous-btn");
var nextBtn           = document.querySelector("#next-btn");
var answerOptions     = document.querySelector(".buttons");

var totalTime = 51;

var quiz = {
    items: [
        {
            question: "What is HTML?",
            options: ["Programming Language", "Markup Language", "A library", "A variable"],
            answer: "Markup Language",
        },
        {
            question: "How many Primitave data types are there?",
            options: ["2", "3", "4", "6"],
            answer: "4",
        },
        {
            question: "?",
            options: ["2", "3", "4", "6"],
            answer: "4",
        },
        {
            question: "How many Primitave data types are there?",
            options: ["2", "3", "4", "6"],
            answer: "4",
        },
        {
            question: "Fifth question here?",
            options: ["2", "3", "4", "6"],
            answer: "4",
        }
    ]
};

//start the quiz
startBtn.addEventListener("click", function(event) {
    questionContainer.classList.remove("hidden");
    questionContainer.classList.add("show");
    introContainer.classList.add("hidden");
    
    //timer will start and countdown
    var timerInterval = setInterval(function() {
        totalTime--
        timeEl.textContent = "Time: " + totalTime;

        if (totalTime === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);

    displayQuestion(quiz.items[0]);
})


//display the next question
function displayQuestion(item) {
    //switch between the different questions
    questionTextElm.textContent = item.question

    //clear the previous data in answer buttons
    answerOptions.innerHTML = "";
};

var questionsIndex = 0;
previousBtn.addEventListener("click", function() {
    if (questionsIndex > 0) {
        questionsIndex--;
    };
    displayQuestion(quiz.items[questionsIndex]);
});

nextBtn.addEventListener("click", function() {
    if (questionsIndex < quiz.items.length - 1) {
        questionsIndex++;
    };
    displayQuestion(quiz.items[questionsIndex]);
});
