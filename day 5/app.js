// concept would be to make a button to intiate the dice roll, then use random to generate a no. between 1-6

const rollButton = document.getElementById("rollButton");
const yourRoll = document.getElementById("yourRoll");
const fullScreenRoll = document.getElementById("fullScreenRoll");
const fullScreenNumber = document.getElementById("fullScreenNumber");

let diceRolls = [];
let totalRoll = 0;

rollButton.addEventListener("click", function() {
  // Generate a random number between 1 and 6
  const roll = Math.floor(Math.random() * 6) + 1;

  diceRolls.push(roll);
  totalRoll += roll;

  showFullScreenRoll(roll);
});

function showFullScreenRoll(roll) {
  fullScreenNumber.textContent = roll;
  fullScreenRoll.classList.remove("hidden");

  setTimeout(() => {
    fullScreenRoll.classList.add("hidden");
    rollButton.disabled = false;
    updateDisplay(roll);
  }, 1000);
}

function updateDisplay(roll) {
  yourRoll.textContent = `you rolled a ${roll}`;
}
