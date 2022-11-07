
//need to have the timeEl access the start button - start button to be added to the HTML file for the intro page
var startBtn          = document.querySelector('#start-btn');
var introContainer    = document.querySelector('.intro-container');
var questionContainer = document.querySelector('.question-container');
var timeEl            = document.querySelector('#timer');
var questionTextElm   = document.querySelector("#question");
var previousBtn       = document.querySelector("#previous-btn");
var nextBtn           = document.querySelector("#next-btn");
var answerOptions     = document.querySelector("#answer-options");

var totalTime = 51;

var quiz = {
    items: [
        {
            question: "What is HTML?",
            options: ["Programming Language", "Markup Language", "A library", "All the above"],
            answer: "Markup Language",
        },
        {
            question: "How many Primitave data types are there?",
            options: ["2", "3", "4", "6"],
            answer: "4",
        },
        {
            question: "Arrays in JavaScript can be used to store ______.",
            options: ["Numbers and strings", "Other arrays", "Booleans", "All the above"],
            answer: "All the above",
        },
        {
            question: "What should be used to enclose a string when assigned to a variable?",
            options: ["Commas", "Curly brackets", "Quotes", "Parentheses"],
            answer: "Quotes",
        },
        {
            question: "Commonly used data types DO NOT include:",
            options: ["Strings", "Booleans", "Alerts", "Numbers"],
            answer: "Alerts",
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
            timeEl.textContent = "Time's Up!";
        }
    }, 1000);

    displayQuestion(quiz.items[0]);
})


//display the next question
function displayQuestion(item) {
    //switch between the different questions
    questionTextElm.textContent = item.question;

    //clear the previous data in answer buttons
    answerOptions.innerHTML = "";

    for (var i = 0; i < item.options.length; i++) {
        var answerListItem = document.createElement("button");
        answerListItem.classList = "buttons";
        answerListItem.type = "radio";

        console.log("Answer list item:");
        console.log(answerListItem);

        //append answers to the list
        answerOptions.append(answerListItem);

        //add the text for the answer options
        var optionsText = document.createElement("span");
        optionsText.textContent = item.options[i];
        answerListItem.append(optionsText);
    }

};

//compare users selection of option to correct answer
// function compareAnswer () {
//     nextBtn.addEventListener("click", function(event) {
//         var element = event.target;
//         console.log(element);
//     })
// }

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
