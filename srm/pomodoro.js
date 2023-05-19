

var timer;
var defaultTime = 20 * 60; // 20 minutes
var currentTime = defaultTime;
var isTimerRunning = false;

function startTimer(duration) {
  var timerDisplay = document.getElementById("timer");

  var timerMinutes, timerSeconds;
  timer = setInterval(function() {
    timerMinutes = parseInt(duration / 60, 10);
    timerSeconds = parseInt(duration % 60, 10);

    timerMinutes = timerMinutes < 10 ? "0" + timerMinutes : timerMinutes;
    timerSeconds = timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;

    timerDisplay.textContent = timerMinutes + ":" + timerSeconds;
    currentTime=timerMinutes*60+timerSeconds;
    if (--duration < 0) {
      clearInterval(timer);
      alert("Timer has ended!");
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  currentTime = defaultTime;
  startTimer(defaultTime);
  isTimerRunning = false;
}

function pauseTimer() {
  clearInterval(timer);
  isTimerRunning = false;
}

function playTimer() {
  if (!isTimerRunning) {
    startTimer(currentTime);
    isTimerRunning = true;
  }
}

function changeDefaultTime() {
  var newDefaultTime = prompt("Enter the new default time in minutes:");

  if (newDefaultTime !== null && !isNaN(newDefaultTime) && newDefaultTime !== "") {
    defaultTime = parseInt(newDefaultTime, 10) * 60;
    resetTimer();
  }
}

window.onload = function() {
  startTimer(defaultTime);
};
