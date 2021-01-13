//javascript code goes here

var button = document.querySelector(".start-button");
var timer = document.querySelector(".timer-count");
var winLose = document.querySelector(".word-blanks");
var secondsLeft = 10;
var loseCount = document.querySelector(".lose");


button.addEventListener("click", function (event){
    event.preventDefault();
    startTimer();
    guessLetters();

})

function startTimer(){
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = secondsLeft ;
    
        if(secondsLeft === 0) {
          // Stops execution of action at set interval
          clearInterval(timerInterval);
          // Calls function to create and append image
          winLose.innerHTML = "you lose";
        }
    
      }, 1000);
};

function guessLetters(event){
  // The key property holds the value of the key press
  var keyPress = event.key;
  // The code property holds the key's code 
  var keyCode = event.code;
  // Updates content on page
  document.querySelector(".word-guess").textContent = keyPress;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

