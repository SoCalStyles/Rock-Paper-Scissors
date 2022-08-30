let pScore = 0;
let tieScore = 0;
let cScore = 0;

// Function to play 5 rounds, keep score, and report winner
function game() {
    for (let i = 0; i < 5; i++){

            
// Computer will randomly generate rock, paper, or scissors
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

// Function to get player choice and filter input
function getPlayerChoice() {
    let input;
    while (true) {
        input = prompt("Choose Your Weapon");
        if (input == null) {
            input = prompt("Choose Your Weapon");
        }
        input = input.toUpperCase();
        if (input === "ROCK" || input=== "PAPER" || input === "SCISSORS") {
            return input;
        }
    }
}

// Function that plays a single round
function playRound(playerType, computerType) {
    let winner = "";
    if (playerType === computerType) {
        tieScore++;
        return winner = "TIE";
    } else if ((playerType === "ROCK" && computerType === "SCISSORS") || (playerType === "PAPER" && computerType === "ROCK") || (playerType === "SCISSORS" && computerType === "PAPER")) {
        pScore++;
        return winner = "PLAYER";
    } else {
        cScore++;
        return winner = "EVIL COMPUTER";
    }

}

const choices = ["ROCK", "PAPER", "SCISSORS"];
const playerSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));

console.log(pScore);
console.log(tieScore);
console.log(cScore);

} 
}  

game();

function checkScore(playerScore, computerScore) {
    let winner;
    if (playerScore === computerScore) {
        return winner = "TIE GAME";
    } else if (playerScore > computerScore) {
        return winner =  "PLAYER WINS";
    } else {
        return winner = "EVIL COMPUTER WINS";
    }
}

console.log(checkScore(pScore, cScore));

