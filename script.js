// UI
const rockBtn = document.querySelector('#rockButton');
const paperBtn = document.querySelector('#paperButton');
const scissorsBtn = document.querySelector('#scissorsButton');

const infoResult = document.querySelector('.info-result');
const infoReason = document.querySelector('.info-reason');

const playerSign = document.querySelector('#playerSign');
const playerPoints = document.querySelector('#playerPoints');
const computerSign = document.querySelector('#computerSign');
const computerPoints = document.querySelector('#computerPoints');

const roundedSquare = document.querySelectorAll('.rounded-square');

const endBox = document.querySelector('#end-box');
const endText = document.querySelector('#end-text');
const playAgain = document.querySelector('#restart');

//// Script ////

// assign score variables // 
let playerScore = 0;
let computerScore = 0;
let roundwinner = '';


function playRound(playerSelection, computerSelection) {
    /* For Draws */
    if (playerSelection == computerSelection) {
        infoResult.textContent = "It's a draw!"
        infoReason.textContent = "Same sign ties with each other"
    }
    /* For Computer Wins */
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        infoResult.textContent = "You Lose!"
        infoReason.textContent = "Paper beats rock"
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        infoResult.textContent = "You Lose!"
        infoReason.textContent = "Scissors beats Paper"
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        infoResult.textContent = "You Lose!"
        infoReason.textContent = "Rock beats Scissors"
    }

    /* For Player Wins */
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        infoResult.textContent = "You Win!"
        infoReason.textContent = "Paper beats rock"
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        infoResult.textContent = "You Win!"
        infoReason.textContent = "Scissors beats Paper"
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        infoResult.textContent = "You Win!"
        infoReason.textContent = "Rock beats Scissors"
    }
}

function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0) {
        computerSign.textContent = "✊"
        return "rock";
    }
    else if (randomNumber == 1) {
        computerSign.textContent = "✋"
        return "paper";
    }
    else {
        computerSign.textContent = "✌"
        return "scissors";
    }
}



function game(playerChoice) {
    if (playerScore < 5 && computerScore < 5) {
        playRound(playerChoice, computerChoice());
        playerPoints.textContent = `Your score: ${playerScore}`;
        computerPoints.textContent = `Computer's score: ${computerScore}`;

        if (playerScore == 5) {
            endText.textContent = "You win!" ;
            endBox.style.visibility = 'visible';
            // loop through every button and disable them
            for (var button in roundedSquare) {
                roundedSquare[button].disabled = true;
            }
            // reload page when play again btn clicked
            playAgain.onclick = () => window.location.reload();
        }

        if (computerScore == 5) {
            endText.textContent = "You lost!" ;
            endBox.style.visibility = 'visible';
            for (var button in roundedSquare) {
                roundedSquare[button].disabled = true;
            }
            playAgain.onclick = () => window.location.reload();
        }
    }
}

rockBtn.addEventListener('click', () => {
    // Call the function start with 'rock' as argument 
    playerSign.textContent = "✊"
    game('rock');
});

paperBtn.addEventListener('click', () => {
    // Call the function start with 'paper' as argument 
    game('paper');
    playerSign.textContent = "✋"
});

scissorsBtn.addEventListener('click', () => {
    // Call the function start with 'scissors' as argument 
    game('scissors');
    playerSign.textContent = "✌"
});