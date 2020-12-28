const refs = {
  body: document.querySelector("body"),
  buttonStart: document.querySelector(`[data-action="start"]`),
  buttonStop: document.querySelector(`[data-action="stop"]`),
};

refs.buttonStart.addEventListener("click", bodyColor);
refs.buttonStop.addEventListener("click", bodyColorStop);

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; // генерує випадкове число

const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

let intervalId = null;
let btnStartIsActive = false;

function bodyColor() {
  if (btnStartIsActive) {
    return;
  }
  btnStartIsActive = true;
  refs.buttonStart.setAttribute("disabled", "true");
  intervalId = setInterval(() => {
    refs.body.style.backgroundColor =
      colors[randomIntegerFromInterval(0, colors.length - 1)];
  }, 1000);
  console.log("start");
}

function bodyColorStop() {
  btnStartIsActive = false;
  refs.buttonStart.removeAttribute("disabled");
  clearInterval(intervalId);
  console.log("stop");
}
