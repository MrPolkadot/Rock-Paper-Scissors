//ROCK-PAPER-SCISSORS//

//Create array of choices
const choices = ['rock', 'paper', 'scissors'];

//Create a random choice
function getComputerChoice() {
    let randomize = Math.floor(Math.random() * choices.length);
    if (randomize === 0) {
        console.log(choices[0])
    } else if (randomize === 1) {
        console.log(choices[1])
    } else if (randomize === 2) {
        console.log(choices[2])
    }
}

//Create a function that returns a string that declares the winner of a game
function playRound(playerSelection, computerSelection) {
    if ((RegExp(/playerSelection/i) === choices[0]) && (computerSelection === choices[0])) {
        console.log("It's a tie! Rock equals Rock");
    } else if ((RegExp(/playerSelection/i) === choices[0]) && (computerSelection === choices[1])) {
        console.log("You lose! Paper beats Rock");
    } else if ((RegExp(/playerSelection/i) === choices[0]) && (computerSelection === choices[2])) {
        console.log("You win! Rock beats Scissors");
    } else if ((RegExp(/playerSelection/i) === choices[0]) && (computerSelection === choices[2])) {}
}