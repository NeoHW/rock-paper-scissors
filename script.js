/* assign score variables */ 
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
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

function game() {
    while (playerScore < 5 && computerScore < 5){
        /* Prompt user for input */
        do {
            let x = prompt("Choose rock, paper or scissors");
            playerChoice = x.toLowerCase();
        }
        /* while (!(playerChoice == "rock" || playerChoice == "paper" || playerChoice == "scissors" )) */
        /* Remember that !(a || b) == (!a && !b) */
        while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"); 


        playRound(playerChoice, computerPlay());
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer's score: ${computerScore}`);
    }
    if (playerScore == 5) {
        console.log("you have bested the computer") 
    }
    else if (computerScore == 5) {
        console.log("It appears computers are better than humans after all") 
    }
}

game()