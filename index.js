//algorithm:
//1.3.create function that'll return random either ‘Rock’,
//‘Paper’ or ‘Scissors’.
//2.4. write a function take two parameters - the
//playerSelection and
//computerSelection - and then return a string that
//declares the winner or tie
//of the round like so: "You Lose! Paper beats Rock"
arrayOfChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  let choiceOfComputer = arrayOfChoices[randomChoice];
  //console.log(choiceOfComputer); 
  return choiceOfComputer;
}
getComputerChoice();
//console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (computerSelection === "Paper" && playerSelection === computerSelection) {
      return "You Lose! Paper beats Rock";
    } else if (
      computerSelection === "Scissors" &&
      playerSelection === computerSelection
    ) {
      return "You Win! Rock beats Scissors";
    } else if (
      computerSelection === "Rock" &&
      playerSelection === computerSelection
    ) {
      return "It's a Draw! Let's play again";
    }
    return;
  }
  
  const userChoice = "rock";
  const playerSelection =
    userChoice[0].toUpperCase() + userChoice.slice(1).toLowerCase();
  
  const computerSelection = getComputerChoice();
  console.log(computerSelection);
  //playRound(playerSelection, computerSelection);
  console.log(playRound(playerSelection, computerSelection));