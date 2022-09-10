let pScore = 0;
let tieScore = 0;
let cScore = 0;

const choices = ["ROCK", "PAPER", "SCISSORS"];

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

const chosen = document.querySelector('.chosen');
const roundResult = document.querySelector('.roundResult');
const gameResult = document.querySelector('.gameResult');

const playerTally = document.querySelector('.playerTally');
const tieTally = document.querySelector('.tieTally');
const computerTally = document.querySelector('.computerTally');
            
// Computer will randomly generate rock, paper, or scissors
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

// Function that plays a single round
function playRound(playerType, computerType) {
    if (playerType === computerType) {
        tieScore++;
        roundResult.textContent = "Round is a TIE";
    } else if ((playerType === "ROCK" && computerType === "SCISSORS") || (playerType === "PAPER" && computerType === "ROCK") || (playerType === "SCISSORS" && computerType === "PAPER")) {
        pScore++;
        roundResult.textContent = "Round goes to PLAYER";
    } else {
        cScore++;
        roundResult.textContent = "Round goes to EVIL COMPUTER";
    }
    playerTally.textContent = pScore;
    tieTally.textContent = tieScore;
    computerTally.textContent = cScore;
    
}

rockButton.addEventListener('click', () => {
    if (pScore < 5 && tieScore < 5 && cScore < 5) {
        const playerSelection = "ROCK";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playerSelection, computerSelection, pScore, tieScore, cScore);
        chosen.textContent = `You chose ROCK, computer chose ${computerSelection}`;
        finalResult();
    }
});
paperButton.addEventListener('click', () => {
    if (pScore < 5 && tieScore < 5 && cScore < 5) {
        const playerSelection = "PAPER";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playerSelection, computerSelection, pScore, tieScore, cScore);
        chosen.textContent = `You chose PAPER, computer chose ${computerSelection}`;
        finalResult();
    }
});

scissorsButton.addEventListener('click', () => {
    if (pScore < 5 && tieScore < 5 && cScore < 5) {
        const playerSelection = "SCISSORS";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playerSelection, computerSelection, pScore, tieScore, cScore);
        chosen.textContent = `You chose SCISSORS, computer chose ${computerSelection}`;
        finalResult();
    }    
});


function finalResult() {
    if (pScore === 5) {
        gameResult.textContent = "You defeated The Evil Computer!";
    } else if (tieScore === 5) {
        gameResult.textContent = "It's a draw!";
    } else if (cScore === 5) {
        gameResult.textContent = "The Evil Computer has won!";
    } 
}













