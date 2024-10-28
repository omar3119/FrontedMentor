let $advice = document.querySelector(".advice__main");
let $adviceId = document.querySelector(".advice__id");
let $iconDice = document.querySelector(".container__icon-dice");

let urlAdvice = "https://api.adviceslip.com/advice";

function fetchAdvice() {
  fetch(urlAdvice).then((response) => {
    let data = response.json();
    data.then((dataAdvice) => {
      $adviceId.textContent = dataAdvice.slip.id;
      $advice.textContent = dataAdvice.slip.advice;
    });
  });
}

$iconDice.addEventListener("click", fetchAdvice);
