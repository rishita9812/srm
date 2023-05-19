// Global variables
var timer;
var defaultTime = 20 * 60; 

function startTimer(duration) {
  var timerDisplay = document.getElementById("timer");

  var timerMinutes, timerSeconds;
  timer = setInterval(function() {
    timerMinutes = parseInt(duration / 60, 10);
    timerSeconds = parseInt(duration % 60, 10);

    timerMinutes = timerMinutes < 10 ? "0" + timerMinutes : timerMinutes;
    timerSeconds = timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;

    timerDisplay.textContent = timerMinutes + ":" + timerSeconds;

    if (--duration < 0) {
      clearInterval(timer);
      alert("Timer has ended!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  startTimer(defaultTime);
}

function changeDefaultTime() {
  var newDefaultTime = prompt("Enter the new default time in minutes:");

  // Validate the user input
  if (newDefaultTime !== null && !isNaN(newDefaultTime) && newDefaultTime !== "") {
    defaultTime = parseInt(newDefaultTime, 10) * 60;
    resetTimer();
  }
}

window.onload = function() {
  startTimer(defaultTime);
};
