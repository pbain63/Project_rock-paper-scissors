
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

//3.6. create new function called playGame(). Use the
//previous function inside of this one to play a five
//round game that keeps score and reports a winner or
//loser at the end.
function playGame() {
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
  return;
}

playGame();
