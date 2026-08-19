const time = document.getElementById("time");
const currentTime = document.getElementById("current-time");
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  time.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
}

function pad(num) {
  return num.toString().padStart(2, "0");
}

function startWatch() {
  if (!interval) {
    interval = setInterval(updateTime, 1000);
  }
}

function stopWatch() {
  clearInterval(interval);
  interval = null;
}

function resetWatch() {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  minutes = 0;
  hours = 0;
  time.textContent = "00:00:00";
}   

function currenttime() {
    const now = new Date()
   currentTime.textContent = now.toLocaleTimeString()
}


setInterval(currenttime, 1000) // runs currenttime() every second, forever