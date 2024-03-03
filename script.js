//
const container = document.createElement("div");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const resultDiv = document.createElement("div");

container.setAttribute("id", "container");
btnRock.setAttribute("id", "Rock");
btnPaper.setAttribute("id", "Paper");
btnScissors.setAttribute("id", "Scissors");
resultDiv.setAttribute("id", "result");

container.textContent = "To Play, please click on any button: ";
btnRock.textContent = "ROCK";
btnPaper.textContent = "PAPER";
btnScissors.textContent = "SCISSORS";

btnRock.setAttribute("style", "margin: 10px; background-color: grey");
btnPaper.setAttribute("style", "margin: 10px; background-color: ash");
btnScissors.setAttribute("style", "margin: 10px; background-color: green");

document.body.appendChild(container);
container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);
container.appendChild(resultDiv);

const rockClick = document.querySelector("#Rock");
const paperClick = document.querySelector("#Paper");
const scissorsClick = document.querySelector("#Scissors");

rockClick.addEventListener("click", userChoice);
paperClick.addEventListener("click", userChoice);
scissorsClick.addEventListener("click", userChoice);
