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

