let pScore = 0;
let tieScore = 0;
let cScore = 0;

const choices = ["ROCK", "PAPER", "SCISSORS"];
const opponents = ["Squidward", "Larry the Lobster", "Plankton", "Mrs. Puff", 
                    "Gary the Snail", "Squilliam Fancyson", "Bubble Bass"]

const rockButton = document.querySelector('#rockButton');
const paperButton = document.querySelector('#paperButton');
const scissorsButton = document.querySelector('#scissorsButton');

const opponentSection = document.querySelector('.opponentSection');
const chosen = document.querySelector('.chosen');
chosen.textContent = "First to 5 points wins!"
const roundResult = document.querySelector('.roundResult');
const gameResult = document.querySelector('.gameResult');
gameResult.textContent = "Winner to be determined..."

const playerTally = document.querySelector('.playerTally');
const tieTally = document.querySelector('.tieTally');
const computerTally = document.querySelector('.computerTally');

playerTally.textContent = pScore;
tieTally.textContent = tieScore;
computerTally.textContent = cScore;

const playAgain = document.querySelector('.playAgain');

// Generate a random opponent
function getOpponent(){
    const opponent = opponents[Math.floor(Math.random()*opponents.length)];
    opponentSection.textContent = `Your opponent will be ${opponent}!`;
    return opponent;
}

const opponent = getOpponent();
            
// Computer will randomly generate rock, paper, or scissors
function getComputerChoice() {
    return choices[Math.floor(Math.random()*choices.length)];
}

// Function that plays a single round
function playRound(playerType, computerType) {
    if (playerType === computerType) {
        tieScore++;
        roundResult.textContent = "Round is a TIE.";
    } else if ((playerType === "ROCK" && computerType === "SCISSORS") || (playerType === "PAPER" && computerType === "ROCK") || (playerType === "SCISSORS" && computerType === "PAPER")) {
        pScore++;
        roundResult.textContent = "Round goes to PLAYER.";
    } else {
        cScore++;
        roundResult.textContent = `Round goes to ${opponent}.`;
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
        chosen.textContent = `You chose ROCK. ${opponent} chose ${computerSelection}.`;
        finalResult();
    }
});
paperButton.addEventListener('click', () => {
    if (pScore < 5 && tieScore < 5 && cScore < 5) {
        const playerSelection = "PAPER";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playerSelection, computerSelection, pScore, tieScore, cScore);
        chosen.textContent = `You chose PAPER. ${opponent} chose ${computerSelection}.`;
        finalResult();
    }
});

scissorsButton.addEventListener('click', () => {
    if (pScore < 5 && tieScore < 5 && cScore < 5) {
        const playerSelection = "SCISSORS";
        const computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
        console.log(playerSelection, computerSelection, pScore, tieScore, cScore);
        chosen.textContent = `You chose SCISSORS. ${opponent} chose ${computerSelection}.`;
        finalResult();
    }    
});

function finalResult() {
    if (pScore === 5) {
        playAgain.classList.remove('playAgain');
        gameResult.textContent = `You defeated ${opponent}!`;
    } else if (tieScore === 5) {
        playAgain.classList.remove('playAgain');
        gameResult.textContent = "The game is a draw!";
    } else if (cScore === 5) {
        playAgain.classList.remove('playAgain');
        gameResult.textContent = `${opponent} wins! Better luck next time.`;
    } 
}


playAgain.addEventListener('click', () => {
    window.location.reload()
});













