const BillAmount = document.getElementById('billAmount');
const TipPercentage = document.getElementById('tipPercentage');
const CalculateTipButton = document.getElementById('calculateTip');
const TipResult = document.getElementById('tipResult');

CalculateTipButton.addEventListener('click', () => {
  const bill = parseFloat(BillAmount.value);
  const tip = parseFloat(TipPercentage.value);
  const total = bill + (bill * tip / 100);
  TipResult.textContent = `Total Amount (including tip): $${total.toFixed(2)}`;
});


