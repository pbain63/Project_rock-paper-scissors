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

function userChoice(event) {
  let playerSelection = event.target.id;

  let computerSelection = getComputerChoice();

  let runningResult = playRound(playerSelection, computerSelection);

  while (playerScore <= 5 && computerScore <= 5) {
    if (playerScore === 5 || computerScore === 5) {
      resultDiv.textContent = `Game Over :   ${winGame()} `;
    } else {
      resultDiv.textContent = `Player Selected = { ${playerSelection} } ; 
      Computer Selected = { ${computerSelection} } ;
      Running Result =   ${runningResult} ; 
      Player Score: [ ${playerScore} ] ;  
      Computer Score:  [ ${computerScore} ] `;
    }

    break;
  }
}

let arrayOfChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  let choiceOfComputer = arrayOfChoices[randomChoice];

  return choiceOfComputer;
}

let playerScore = parseInt(0);
let computerScore = parseInt(0);

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;

    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    playerScore++;

    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "It's a Draw!";
  } else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "It's a Draw!";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;

    return "You Lose! Scissors beat Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    playerScore++;

    return "You Win! Paper beats Rock";
  } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    playerScore++;

    return "You Win! Scissors beat Paper";
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return "It's a Draw!";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;

    return "You Lose! Rock beats Scissors";
  }

  return;
}

function winGame() {
  if (playerScore === 5) {
    return "You have reached 5 points. You Won!";
  } else if (computerScore === 5) {
    return "Computer have reached 5 points. You Lost!";
  }
}
