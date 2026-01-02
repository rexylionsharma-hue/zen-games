let score = 0;

const scoreDiv = document.getElementById("score");
const btn = document.getElementById("tapBtn");

btn.addEventListener("click", () => {
  score++;
  scoreDiv.innerText = "Score: " + score;
});
