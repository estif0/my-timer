const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const finalDate = new Date("6 January 2025");

function countdown() {
  const finalDate = new Date("11 June 2023");
  const totalSeconds = (finalDate - new Date()) / 1000;
  const [days, hours, minutes, seconds] = [
    Math.floor(totalSeconds / 86400),
    Math.floor(totalSeconds % 86400 / 3600),
    Math.floor(totalSeconds % 3600 / 60),
    Math.floor(totalSeconds % 60)
  ];
  daysEl.textContent = days;
  hoursEl.textContent = hours.toString().padStart(2, "0");
  minsEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1000);
countdown(); // initial call
