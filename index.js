//algorithm:
//1.3.create function that'll return random either ‘Rock’,
//‘Paper’ or ‘Scissors’.

arrayOfChoices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3);

  let choiceOfComputer = arrayOfChoices[randomChoice];
  //console.log(choiceOfComputer); //*return output but not same
  return choiceOfComputer;
}
getComputerChoice();
//console.log(getComputerChoice()); /*return output but not same

