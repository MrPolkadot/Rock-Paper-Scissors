//ROCK-PAPER-SCISSORS//

//Create array of choices
const choices = ['rock', 'paper', 'scissors'];

//Create a random choice
function getComputerChoice() {
    let randomize = Math.floor(Math.random() * choices.length);
    if (randomize === 0) {
        return choices[0];
    } else if (randomize === 1) {
        return choices[1];
    } else if (randomize === 2) {
       return choices[2];
    }
}

//Create a function that returns a string that declares the winner of a game
function playRound(playerSelection, computerSelection) {
    if ((playerSelection === choices[0]) && (computerSelection === choices[0])) {
        return "It's a tie! Rock equals Rock";
    } else if ((playerSelection === choices[0]) && (computerSelection === choices[1])) {
        return "You lose! Paper beats Rock";
    } else if ((playerSelection === choices[0]) && (computerSelection === choices[2])) {
        return "You win! Rock beats Scissors";
    } else if ((playerSelection === choices[1]) && (computerSelection === choices[0])) {
        return "You win! Paper beats rock";
    } else if ((playerSelection === choices[1]) && (computerSelection === choices[1])) {
        return "It's a tie! Paper equals Paper";
    } else if ((playerSelection === choices[1]) && (computerSelection === choices[2])) {
        return "You lose! Scissors beats Paper";
    } else if ((playerSelection === choices[2]) && (computerSelection === choices[0])) {
        return "You lose! Rock beats Scissors";
    } else if ((playerSelection === choices[2]) && (computerSelection === choices[1])) {
        return "You win! Scissors beats Paper";
    } else if ((playerSelection === choices[2]) && (computerSelection === choices[2])) {
        return "It's a tie! Scissors equals Scissors";
    } 
}

//Test results
const playerSelection = prompt();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

//Create function to play several rounds
function game() {
   let games = playRound();
    for (let i = 0; i < 5; i++) {
       if 
    }
}