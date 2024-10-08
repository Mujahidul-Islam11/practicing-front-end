let num1 = Math.ceil(Math.random() * 10);
let num2 = Math.ceil(Math.random() * 10);

const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const scoreEl = document.getElementById("score");

questionEl.innerHTML = `What is ${num1} multiply by ${num2}?`;

const correctAns = num1 * num2;
let score = localStorage.getItem("score");
scoreEl.innerHTML = `Score:- ${score}`

formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++;
    updateLocalStorage()
  } else {
    score--;
    updateLocalStorage()
  }
});

const updateLocalStorage = ()=>{
    localStorage.setItem("score", JSON.stringify(score))
}