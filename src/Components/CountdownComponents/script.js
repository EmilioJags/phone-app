const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const newYears = "1 Jan " + (currentYear + 1);

function countdown() {
  //console.log(currentYear);
  //console.log(newYears);

  const remainingSeconds = (new Date(newYears) - new Date()) / 1000;

  const days = Math.floor(remainingSeconds / 3600 / 24);

  const hours = Math.floor(remainingSeconds / 3600) % 24;

  const minutes = Math.floor(remainingSeconds / 60) % 60;

  const seconds = Math.floor(remainingSeconds % 60);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = formatTime(hours);
  minutesEl.innerHTML = formatTime(minutes);
  secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? "0" + time : time;
}

countdown();

setInterval(() => {
  countdown();
}, 1000);
