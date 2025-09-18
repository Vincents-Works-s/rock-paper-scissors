function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

function getHumanChoice() {
    const humanChoice = prompt('Choose rock, paper, or scissors').toLowerCase();
    return humanChoice;
}

let humanScore = 0, computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'rock') {
            console.log('Tie! You both chose rock!');
        } else if (computerChoice === 'paper') {
            console.log('You lose! Paper beats rock!');
            computerScore++;
        } else if (computerChoice === 'scissors') {
            console.log('You win! Rock beats scissors!');
            humanScore++;
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            console.log('You win! Paper beats rock!');
            humanScore++;
        } else if (computerChoice === 'paper') {
            console.log('Tie! You both chose paper!');
        } else if (computerChoice === 'scissors') {
            console.log('You lose! Scissors beats paper!');
            computerScore++;
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            console.log('You lose! Rock beats scissors!');
            computerScore++;
        } else if (computerChoice === 'paper') {
            console.log('You win! Scissors beats paper!');
            humanScore++;
        } else if (computerChoice === 'scissors') {
            console.log('Tie! You both chose scissors!');
        }
    }
}

function playGame() {
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log(`YOU WIN! Human: ${humanScore}, Computer: ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`YOU LOST! Human: ${humanScore}, Computer: ${computerScore}`);
    } else {
        console.log(`TIE! Human: ${humanScore}, Computer: ${computerScore}`);
    }
}

playGame();