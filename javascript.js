let isGameRunning = false;
let totalTime = 0;
let roundCount = 0;
let activeArea = 0;
let createdTime = null;
const startButton = document.querySelector("#button");

function handleClick(event) {
  if (!isGameRunning) return
  const target = event.target;
  const id = target.dataset.id;
  if (Number(id) === Number(activeArea)) {
    const clickedTime = new Date();
    const delay = clickedTime - createdTime;
    totalTime += delay;
    roundCount++;
    if (roundCount === 5) {
      resetColor();
      window.alert("Media de tempo por click: " + totalTime / 5 + "ms");
      console.log(totalTime);
      roundCount = 0;
      totalTime = 0;
      startButton.classList.remove("hidden");
      startButton.innerHTML = "<h1>RESTART</h1>";
      isGameRunning = false;
    } else {
      start();
    }
  } 
}

function colorGrid() {
  resetColor();
  const area = document.querySelector(`[data-id='${activeArea}']`);
  if (!area) return;
  area.style.background = "green";
}

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}

function start() {
  startButton.classList.add("hidden");
  createdTime = new Date();
  let randomNumber = activeArea;
  while(randomNumber === activeArea){
    randomNumber = getRandomInt(1,10);
  }
  activeArea = randomNumber;
  colorGrid();
  isGameRunning = true;
}

function resetColor() {
  const allAreas = document.querySelectorAll("div#area");
  allAreas.forEach((area) => {
    area.style.background = "red";
  });
}
