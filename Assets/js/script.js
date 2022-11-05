
//need to have the timeEl access the start button - start button to be added to the HTML file for the intro page
var startBtn = document.querySelector('#start-btn')
var timeEl = document.querySelector('#timer')

var totalTime = 51;

startBtn.addEventListener("click", function() {
    //timer will start and countdown
    var timerInterval = setInterval(function() {
        totalTime--
        timeEl.textContent = "Time: " + totalTime;

        if (totalTime === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
})

// var quiz = {
//     {
//         quetion: 
//     }
// }


