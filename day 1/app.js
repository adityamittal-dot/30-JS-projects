
function tosshandler(){
  const random = Math.round(Math.random())
  const result = random === 0 ? "Heads" : "Tails";
  console.log(result);
  document.querySelector("#result").textContent = result;
}