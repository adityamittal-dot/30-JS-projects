const guessInput = document.getElementById("guessInput");
const guessButton = document.getElementById("guessButton");

const guessNumber = Math.floor(Math.random() * 100) + 1;
console.log(guessNumber);
guessButton.addEventListener("click", guessHandler);

function guessHandler() {

  let userGuess = Number(guessInput.value);

    if (!userGuess || userGuess < 1 || userGuess > 100) {
    alert("Please enter a valid number between 1 and 100");
userGuess
  }
  if (guessNumber > userGuess) {
    alert("Your guess is low");
  } else if (guessNumber < userGuess) {
    alert("Your guess is high");
  } else {
    alert("Congratulations! You guessed the number.");
  }

}