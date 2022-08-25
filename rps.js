/* Computer will randomly generate rock, paper, or scissors*/

function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    if (randomChoice === 0) {
        return "ROCK";
    } else if (randomChoice === 1) {
        return "PAPER";
    } else {
        return "SCISSORS";
    }
}

/* Function that plays single round of rock-paper-scissors*/
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toUpperCase() === "ROCK") {
        if (computerSelection === "ROCK") {
            return "It's a tie!";
        } else if (computerSelection === "PAPER") {
            return "Sorry, PAPER beats ROCK. Better luck next time!";
        } else if (computerSelection === "SCISSORS") {
            return "You won!";
        }
    } else if (playerSelection.toUpperCase() === "PAPER") {
        if (computerSelection === "ROCK") {
            return "You won!";
        } else if (computerSelection === "PAPER") {
            return "It's a tie!";
        } else if (computerSelection === "SCISSORS") {
            return "You Lost! SCISSORS beats PAPER.";
        }
    } else if (playerSelection.toUpperCase() === "SCISSORS") {
        if (computerSelection === "ROCK") {
            return "Uh oh. ROCK beats SCISSORS!";
        } else if (computerSelection === "PAPER") {
            return "You won!";
        } else if (computerSelection === "SCISSORS") {
            return "It's a tie!";
        }
    } else {
        return "Invalid Option!";
    };

}

const playerSelection = "scissors";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));