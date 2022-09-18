//ROCK-PAPER-SCISSORS//
const computerChoiceDisplay = document.getElementById('computer-choice');
const playerSelectionDisplay = document.getElementById('player-selection');
const resultDisplay = document.getElementById('result');
const choices = document.querySelectorAll('button');
const gameOver = document.getElementById('game-over');
function game() {
    let playerSelection;
    let computerSelection;
    let result;
    let playerScore = 0;
    let computerScore = 0;


    //Create score log
    let playerScoreDisplay = document.getElementById('player-score');
    let computerScoreDisplay = document.getElementById('computer-score');


    choices.forEach(choice => choice.addEventListener('click', (e) => {
        playerSelection = e.target.id;
        playerSelectionDisplay.innerHTML = 'You chose: ' + playerSelection;
        getComputerChoice();
        playRound();
        playerScoreDisplay.innerHTML = "Your score is: " + playerScore;
        computerScoreDisplay.innerHTML = "Computer score is: " + computerScore;
       
        gameEnd();
    }));


    //Create a random choice
    function getComputerChoice() {
        let randomize = Math.floor(Math.random() * choices.length);
        if (randomize === 0) {
            computerSelection = 'Rock';
        } else if (randomize === 1) {
            computerSelection = 'Paper';
        } else if (randomize === 2) {
            computerSelection = 'Scissors';
        }
        computerChoiceDisplay.innerHTML = 'Computer Selection: ' + computerSelection;
    };

    //Create a function that returns a string that declares the winner of a game
    function playRound() {
        if (playerSelection === 'Rock' && computerSelection === 'Rock') {
            result = "It's a tie! Rock equals Rock";
        } else if (playerSelection === 'Rock' && computerSelection === 'Paper') {
            computerScore++;
            result = "You lose! Paper beats Rock";
        } else if (playerSelection === 'Rock' && computerSelection === 'Scissors') {
            playerScore++;
            result = "You win! Rock beats Scissors";
        } else if (playerSelection === 'Paper' && computerSelection === 'Rock') {
            playerScore++;
            result = "You win! Paper beats rock";
        } else if (playerSelection === 'Paper' && computerSelection === 'Paper') {
            result = "It's a tie! Paper equals Paper";
        } else if (playerSelection === 'Paper' && computerSelection === 'Scissors') {
            computerScore++;
            result = "You lose! Scissors beats Paper";
        } else if (playerSelection === 'Scissors' && computerSelection === 'Rock') {
            computerScore++;
            result = "You lose! Rock beats Scissors";
        } else if (playerSelection === 'Scissors' && computerSelection === 'Paper') {
            playerScore++;
            result = "You win! Scissors beats Paper";
        } else if (playerSelection === 'Scissors' && computerSelection === 'Scissors') {
            result = "It's a tie! Scissors equals Scissors";
        }
        resultDisplay.innerHTML = 'Result: ' + result;
    }




    // function to play several rounds
    function gameEnd() {
        if (playerScore == 5) {
            gameOver.innerHTML = 'GAME OVER: YOU WIN!';
            document.getElementById('Rock').disabled = true;
            document.getElementById('Paper').disabled = true;
            document.getElementById('Scissors').disabled = true;
            const container = document.getElementById('container');
            const div = document.createElement('div');
            container.appendChild(div);
            const replayButton = document.createElement('button');
            replayButton.innerText = 'Play Again';
            div.appendChild(replayButton);
            //reloads page
            replayButton.addEventListener('click', () => {
                location.reload();
            })
            
            replayButton.innerText = "Play Again";
        } else if (computerScore == 5) {
            gameOver.innerHTML = 'GAME OVER: COMPUTER WINS';
            document.getElementById('Rock').disabled = true;
            document.getElementById('Paper').disabled = true;
            document.getElementById('Scissors').disabled = true;
            const container = document.getElementById('container');
            const div = document.createElement('div');
            container.appendChild(div);
            const replayButton = document.createElement('button');
            replayButton.innerText = 'Play Again';
            div.appendChild(replayButton);
            //reloads page
            replayButton.addEventListener('click', () => {
                location.reload();
            })
            
        }
    };
};

    game();