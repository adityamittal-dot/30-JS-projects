const time = document.getElementById("clock");
const date = document.getElementById("date");

function updateClock() {
  const now = new Date();

  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let day = now.getDate();
  let month = now.getMonth() + 1; // Months are zero-based
  let year = now.getFullYear();

  hours = hours < 10 ? "0" + hours : hours;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  day = day < 10 ? "0" + day : day;
  month = month < 10 ? "0" + month : month;
  year = year < 10 ? "0" + year : year;

  const currentTime = `${hours}:${minutes}:${seconds}`;
  const currentDate = `${day}/${month}/${year}`;

  time.textContent = currentTime;
  date.textContent = currentDate;
}

updateClock();
setInterval(updateClock, 1000);
