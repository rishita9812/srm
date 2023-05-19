// Global variables
/*
var timer;
var defaultTime = 20 * 60; 
var isTimerOn=true;
var timerMinutes, timerSeconds;


function startTimer(duration,timercheck) {
  if (timercheck==true){
    var timerDisplay = document.getElementById("timer");
    timer = setInterval(function() {
      timerMinutes = parseInt(duration / 60, 10);
      timerSeconds = parseInt(duration % 60, 10);

      timerMinutes = timerMinutes < 10 ? "0" + timerMinutes : timerMinutes;
      timerSeconds = timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;

      timerDisplay.textContent = timerMinutes + ":" + timerSeconds;

      if (--duration < 0) {
        clearInterval(timer);
        alert("Timer has ended!");
        resetTimer()
      }
    }, 1000);
  }
}

function pauseTimer() {
  clearInterval(timer);
  isTimerOn=false;
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
  startTimer(defaultTime,isTimerOn);
};





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

function pauseTimer() {
  clearInterval(timer);
  isTimerOn=false;
}

function playTimer(){}


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


var timer;
var defaultTime = 20 * 60;
var isTimerOn = false;
var pausedTime;

function startTimer(duration) {
  var timerDisplay = document.getElementById("timer");

  var timerMinutes, timerSeconds;
  timer = setInterval(function() {
    timerMinutes = parseInt(duration / 60, 10);
    timerSeconds = parseInt(duration % 60, 10);
    pausedTime=duration;
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

function pauseTimer() {
  clearInterval(timer);
  isTimerOn = false;
  pausedTime = defaultTime;
}

function playTimer() {
  isTimerOn=true;
  startTimer(pa)
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
  pausedTime=1200;
  playTimer(defaultTime);
  
};
*/

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
/*
function updateTimerDisplay() {
  var timerDisplay = document.getElementById("timer");
  var timerMinutes = parseInt(currentTime / 60, 10);
  var timerSeconds = parseInt(currentTime % 60, 10);

  timerMinutes = timerMinutes < 10 ? "0" + timerMinutes : timerMinutes;
  timerSeconds = timerSeconds < 10 ? "0" + timerSeconds : timerSeconds;

  timerDisplay.textContent = timerMinutes + ":" + timerSeconds;
}
*/
window.onload = function() {
  startTimer(defaultTime);
};
