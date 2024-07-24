const candidate = Array(45)
  .fill()
  .map((v, i) => i + 1);
const shuffle = [];
for (let i = candidate.length; i > 0; i--) {
  const random = Math.floor(Math.random() * i);
  const spliceArray = candidate.splice(random, 1);
  const value = spliceArray[0];
  shuffle.push(value);
}

const winBalls = shuffle.slice(0, 6).sort((a, b) => a - b);
const bonus = shuffle[6];

const $result = document.querySelector("#result");
function drawBall(number, $parent) {
  const $ball = document.createElement("div");
  $ball.className = "ball";
  $ball.textContent = number;
  $parent.appendChild($ball);
}

for (let i = 0; i < winBalls.length; i++) {
  setTimeout(() => {
    drawBall(winBalls[i], $result);
  }, 1000 * (i + 1));
}

const $bonus = document.querySelector("#bonus");
setTimeout(() => {
  drawBall(bonus, $bonus);
}, 7000);
