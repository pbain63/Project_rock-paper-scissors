//algorithm:
//1.3.create function that'll return random either ‘Rock’,
//‘Paper’ or ‘Scissors’.
//2.4. write a function take two parameters - the
//playerSelection and computerSelection - and then
//return a string that declares the winner or tie
//of the round like so: "You Lose! Paper beats Rock"
//3. Takes random user choice as "prompt()" and play 
//with computer infinitely
//
//

arrayOfChoices = ["Rock", "Paper", "Scissors"];

const userChoice = prompt(
  "Type any word from the 'Rock', 'Paper', 'Scissors' to play: "
);

const playerSelection =
  userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();

console.log("Player selected: " + playerSelection);

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  let choiceOfComputer = arrayOfChoices[randomChoice];

  return choiceOfComputer;
}
getComputerChoice();
//console.log(getComputerChoice()); /*return output but not same

function playRound(playerSelection, computerSelection) {
  //let playerSelection=ROCK
  if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "Rock" && computerSelection === "Rock") {
    return "It's a Draw! Let's play again";
  }

  //let playerSelection=Paper
  else if (playerSelection === "Paper" && computerSelection === "Paper") {
    return "It's a Draw! Let's play again";
  } else if (
    playerSelection === "Paper" &&
    computerSelection === "Scissors"
  ) {
    return "You Lose! Scissors beat Paper";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You Win! Rock beats Paper";
  }

  //let playerSelection=Scissors
  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "You Win! Scissors beat Paper";
  } else if (
    playerSelection === "Scissors" &&
    computerSelection === "Scissors"
  ) {
    return "It's a Draw! Let's play again";
  } else if (playerSelection === "Scissors" && computerSelection === "Rock") {
    return "You Lose! Rock beats Scissors";
  }
  return;
}

//const userChoice = "rock";

const computerSelection = getComputerChoice();
console.log("Computer selection: " + computerSelection);
const roundPlay = playRound(playerSelection, computerSelection);
console.log("Play round result: " + roundPlay);


function playGame() {
  
  return;
}
playGame();

