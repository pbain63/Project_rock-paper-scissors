const container = document.createElement("div");
const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");
const resultDiv = document.createElement("div");

//container.classList.add("container");
container.setAttribute("id", "container");
btnRock.setAttribute("id", "rock");
btnPaper.setAttribute("id", "paper");
btnScissors.setAttribute("id", "scissors");
resultDiv.setAttribute("id", "result");

container.textContent = "To Play, please click any button: ";
btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

resultDiv.textContent = `Running Score: () ;
 () reach to the 5 points. () Wins!`;

btnRock.setAttribute("style", "margin: 10px; background-color: grey");
btnPaper.setAttribute("style", "margin: 10px; background-color: white");
btnScissors.setAttribute("style", "margin: 10px; background-color: silver");

document.body.appendChild(container);
container.appendChild(btnRock);
container.appendChild(btnPaper);
container.appendChild(btnScissors);
container.appendChild(resultDiv);

//--

arrayOfChoices = ["Rock", "Paper", "Scissors"];
//1.3.create function that'll return random either ‘Rock’,
//‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  let choiceOfComputer = arrayOfChoices[randomChoice];

  return choiceOfComputer;
}
getComputerChoice();
//console.log(getComputerChoice()); /*return output but not same

let userScore = parseInt(0);
let computerScore = parseInt(0);

//2.4. write a function take two parameters - the
//playerSelection and computerSelection - and then
//return a string that declares the winner or tie
//of the round like so: "You Lose! Paper beats Rock"
function playRound(playerSelection, computerSelection) {
  //let playerSelection=ROCK
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    computerScore++;
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    userScore++;
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "It's a Draw! Let's play again";
  }

  //let playerSelection=Paper
  else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "It's a Draw! Let's play again";
  } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
    computerScore++;
    return "You Lose! Scissors beat Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    userScore++;
    return "You Win! Rock beats Paper";
  }

  //let playerSelection=Scissors
  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    userScore++;
    return "You Win! Scissors beat Paper";
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return "It's a Draw! Let's play again";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    computerScore++;
    return "You Lose! Rock beats Scissors";
  }
  return;
}

//3.6.to play a five
//round game that keeps score and reports a winner or
//loser at the end.

for (let i = 0; i < 5; i++) {
  const userChoice = prompt(
    "Type any word from the 'Rock', 'Paper', 'Scissors' to play: "
  );

  const playerSelection =
    userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
  console.log("You selected: " + playerSelection);

  const computerSelection = getComputerChoice();
  console.log("Computer selected: " + computerSelection);

  console.log(
    "Play round result = " + playRound(playerSelection, computerSelection)
  );
  console.log("After round " + i + ". Your Score = " + userScore);
  console.log("After round " + i + ". Computer's Score = " + computerScore);
}

if (userScore > computerScore) {
  console.log("Scoreboard: You Won!");
  alert(
    "Scoreboard: Your Score = " +
      userScore +
      ". Computer's Score = " +
      computerScore +
      ". You Won!"
  );
} else if (userScore < computerScore) {
  console.log("Scoreboard: You Won!");
  alert(
    "Scoreboard: Your Score = " +
      userScore +
      ". Computer's Score = " +
      computerScore +
      ". Computer Won!"
  );
} else {
  console.log("Scoreboard: It's a Tie!");
  alert(
    "Scoreboard: Your Score = " +
      userScore +
      ". Computer's Score = " +
      computerScore +
      ". It's a Tie!"
  );
}
