const WINNING_COMBINATIONS = {
    rock: 'scissors',
    paper: 'rock',
    scissors: 'paper'
};

let humanScore = 0;
let computerScore = 0;

const selection = document.getElementById('selection');
const roundMessage = document.getElementById('round-message');
const scoreText = document.getElementById('score-text');
const winnerText = document.getElementById('winner-text');

const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function updateSelection(humanChoice, computerChoice) {
    selection.textContent = `You chose: ${humanChoice} -- The House chose: ${computerChoice}`;
}

function updateRoundMessage(winningMove, losingMove, winner) {
    if (winner === 'tie') {
        roundMessage.textContent = `${winningMove} ties with ${losingMove}...`;
    } else {
        const verb = winner === 'You' ? 'win' : 'wins';
        roundMessage.textContent = `${winningMove} beats ${losingMove}. ${winner} ${verb}!`;
    }
}

function updateScore(humanScore, computerScore) {
    scoreText.textContent = `You: ${humanScore} -- The House: ${computerScore}`;
}

function updateWinner() {
    if (humanScore >= 5) {
        winnerText.textContent = 'You win!';
    } else if (computerScore >= 5) {
        winnerText.textContent = 'The House wins!';
    }
}

function playRound(humanChoice, computerChoice) {
    updateSelection(humanChoice, computerChoice);

    if (WINNING_COMBINATIONS[humanChoice] === computerChoice) {
        updateRoundMessage(humanChoice, computerChoice, 'You');
        humanScore++;
    } else if (WINNING_COMBINATIONS[computerChoice] === humanChoice) {
        updateRoundMessage(computerChoice, humanChoice, 'The House');
        computerScore++;
    } else {
        updateRoundMessage(humanChoice, computerChoice, 'tie');
    }
    
    updateScore(humanScore, computerScore);
    updateWinner();
}

[rockBtn, paperBtn, scissorsBtn].forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.value, getComputerChoice());
    });
});