const form = document.getElementById('myForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

const nameError = document.getElementById('nameError'); 
const emailError = document.getElementById('emailError');
const phoneError = document.getElementById('phoneError');

form.addEventListener("submit", function(e) {
  e.preventDefault();

  let isValid = true;

  nameError.textContent = '';
  emailError.textContent = '';
  phoneError.textContent = '';

  if(nameInput.ariaValueMax.trim().length <3) {
    nameError.textContent = 'Name must be at least 3 characters long.';
    isValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if(!emailRegex.test(emailInput.value.trim())) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  const phoneRegex = /^\d{10}$/;
  if(!phoneRegex.test(phoneInput.value.trim())) {
    phoneError.textContent = 'Phone number must be 10 digits.';
    isValid = false;
  }
  if(isValid) {
    alert("Form submitted successfully!");
    form.reset();
  }
});