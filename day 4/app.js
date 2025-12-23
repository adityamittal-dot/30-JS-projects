let incrementButton = document.getElementById("incrementButton");
let decrementButton = document.getElementById("decrementButton");
let resetButton = document.getElementById("resetButton");

let counterDisplay = document.getElementById("counterValue");

let counter = 0;

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", decrementCounter);
resetButton.addEventListener("click", resetCounter);

function incrementCounter() {
  counter++;
  updateDisplay();

  if (counter === 10) {
    alert("Counter has reached 10! keep going!");
  }
}

function decrementCounter() {
  counter--;
  updateDisplay();

  if (counter === -10) {
    alert("Counter has reached -10! keep going!");
  }
}

function resetCounter() {
  counter = 0;
  updateDisplay();
}

function updateDisplay() {
  counterDisplay.textContent = counter;
}

