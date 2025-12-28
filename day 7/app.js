const weight = document.getElementById('weight');
const height = document.getElementById('height');
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result'); 

calculateBtn.addEventListener('click', calculateBMI);
function calculateBMI() {
  const w = parseFloat(weight.value);
  const h = parseFloat(height.value) / 100;

  if (isNaN(w) || isNaN(h) || h <= 0 || w <= 0) {
    alert('Please enter valid weight and height values.');
    return;
  }
  const bmi = (w / (h * h)).toFixed(2);
  
  result.textContent = `Your BMI is ${bmi}`;
  
}