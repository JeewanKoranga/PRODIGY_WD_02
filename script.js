let startTime = 0;
let elapsedTime = 0;
let timerInterval;
let isRunning = false;

const timerDisplay = document.getElementById("timer");
const startBtn = document.getElementById("start-btn");
const pauseBtn = document.getElementById("pause-btn");
const resetBtn = document.getElementById("reset-btn");
const lapBtn = document.getElementById("lap-btn");
const lapsList = document.getElementById("laps");

function updateTimer() {
  const now = Date.now();
  elapsedTime = now - startTime;
  const time = new Date(elapsedTime);

  const hours = String(time.getUTCHours()).padStart(2, "0");
  const minutes = String(time.getUTCMinutes()).padStart(2, "0");
  const seconds = String(time.getUTCSeconds()).padStart(2, "0");
  const milliseconds = String(time.getUTCMilliseconds()).padStart(3, "0");

  timerDisplay.textContent = `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function startTimer() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTimer, 10); // Update every 10 milliseconds for smooth display
    isRunning = true;
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  isRunning = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  timerDisplay.textContent = "00:00:00.000";
  lapsList.innerHTML = "";
  isRunning = false;
}

function recordLap() {
  if (isRunning) {
    const lapTime = timerDisplay.textContent;
    const lapItem = document.createElement("li");
    lapItem.textContent = lapTime;
    lapsList.appendChild(lapItem);
  }
}

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", pauseTimer);
resetBtn.addEventListener("click", resetTimer);
lapBtn.addEventListener("click", recordLap);
