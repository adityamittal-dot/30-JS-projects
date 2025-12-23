const colorButton = document.getElementById('colorButton');

const title = document.querySelector('h1');

const colors = ['red', 'blue', 'green', 'yellow', 'pink', 'purple', 'orange', 'brown', 'black', 'white','gray', 'cyan', 'magenta', 'lime', 'teal'];

let currentColor = null;
colorButton.addEventListener('click', changingColor);

function changingColor() {
  
  let randomColor;
  do {
    randomColor = colors[Math.floor(Math.random() * colors.length)];   // picks a random color from the above array 'colors'
  } while (randomColor === currentColor);


  document.body.style.backgroundColor = randomColor; // updates the background color of the body to the random color picked

  currentColor = randomColor;   // updates the current color to the newly picked random color

   // Change title color for better visibility
  if (currentColor === 'black' || currentColor === 'brown') {
    title.style.color = 'white';
  } else {
    title.style.color = 'black';
  }

}