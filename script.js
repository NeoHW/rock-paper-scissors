/* assign score variables */ 
let playerScore = 0;
let computerScore = 0;
let roundwinner = '';

function playRound(playerSelection, computerSelection) {
    /* For Draws */
    if (playerSelection == computerSelection) {
        console.log("It's a draw!");
    }
    /* For Computer Wins */
    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        console.log("You Lose! Paper beats rock");
        
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        console.log("You Lose! Scissors beats Paper");
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        console.log("You Lose! Rock beats Scissors");
    }
    /* For Player Wins */
    else if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore++;
        console.log("You Win! Paper beats rock");
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        console.log("You Win! Scissors beats Paper");
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore++;
        console.log("You Win! Rock beats Scissors");
    }
}

function computerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);

    if(randomNumber == 0) {
        return "rock";
    }
    else if (randomNumber == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}



function game(playerChoice) {
    if (playerScore < 5 && computerScore < 5) {
        playRound(playerChoice, computerChoice());
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer's score: ${computerScore}`);
    }

    else if (playerScore == 5) {
        console.log("you have bested the computer") 
    }
    else if (computerScore == 5) {
        console.log("It appears computers are better than humans after all")
    }

}


// UI 
const rockBtn = document.querySelector('#rockButton');
const paperBtn = document.querySelector('#paperButton');
const scissorsBtn = document.querySelector('#scissorsButton');

rockBtn.addEventListener('click', () => {
    // Call the function start with 'rock' as argument 
    game('rock');
});

paperBtn.addEventListener('click', () => {
    // Call the function start with 'paper' as argument 
    game('paper');
});

scissorsBtn.addEventListener('click', () => {
    // Call the function start with 'scissors' as argument 
    game('scissors');
});