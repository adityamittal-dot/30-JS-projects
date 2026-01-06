const passwordInput = document.getElementById('password');
const strengthTest = document.getElementById('strengthText');
const strengthBar = document.getElementById('strengthBar');

passwordInput.addEventListener('input', () => {
  const password = passwordInput.value;
  let score = 0;

  if(password.length >= 8) score++;
  if(/[A-Z]/.test(password)) score++;
  if(/[a-z]/.test(password)) score++;
  if(/[0-9]/.test(password)) score++;
  if(/[^A-Za-z0-9]/.test(password)) score++;

  updateStrengthUI(score);
});

function updateStrengthUI(score) {
  let barColor = "";
  let barWidth = (score/5) * 100;

  if(score <= 1) {
    strength = "very Weak";
    barColor = "bg-red-500";
  } else if(score === 2) {
    strength = "Weak";
    barColor = "bg-orange-500";
  } else if(score === 3) {
    strength = "Medium";
    barColor = "bg-green-500";
  } else if(score === 4) {
    strength = "strong";
    barColor = "bg-yellow-500";
  } else {
    strength = "very strong";
    barColor = "bg-blue-500";
  }

  strengthTest.textContent = strength;
  strengthBar.style.width = `${barWidth}%`;
  strengthBar.className = `h-full rounded-full transition-all duration-300 ${barColor}`;
}
