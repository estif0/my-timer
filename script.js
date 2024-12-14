const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minsEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const millisEl = document.getElementById("milliseconds"); // new element
const finalDate = new Date("6 January 2025");

function countdown() {
  const finalDate = new Date("6 January 2025");
  const totalMillis = finalDate - new Date();
  const totalSeconds = totalMillis / 1000;
  const [days, hours, minutes, seconds, milliseconds] = [
    Math.floor(totalSeconds / 86400),
    Math.floor((totalSeconds % 86400) / 3600),
    Math.floor((totalSeconds % 3600) / 60),
    Math.floor(totalSeconds % 60),
    String(Math.floor((totalMillis % 1000) / 10)).padStart(2, "0"),
  ];
  daysEl.textContent = days;
  hoursEl.textContent = hours.toString().padStart(2, "0");
  minsEl.textContent = minutes.toString().padStart(2, "0");
  secondsEl.textContent = seconds.toString().padStart(2, "0");
  millisEl.textContent = milliseconds; // update milliseconds
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countdown, 1); // update interval to 1ms
countdown(); // initial call
