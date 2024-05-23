const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER = 'PLAYER';
const RESULT_COMPUTER = 'COMPUTER';

let gameIsRunning = false;

const getPlayerChoice = () => {
    const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSORS}?`, '').toUpperCase();
    if (
        selection!== ROCK &&
        selection!== PAPER &&
        selection!== SCISSORS
    ) {
        alert('Invalid input, please enter "Rock", "Paper" or "Scissors"');
        return getPlayerChoice();
    }
    return selection;
}

const getComputerChoice = () => {
    const randomNumber = Math.random();
    if (randomNumber < 0.34) {
        return ROCK;
    } else if (randomNumber < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const determineWinner = (cChoice, pChoice) => {
    switch (pChoice) {
        case cChoice:
            return RESULT_DRAW;
        case ROCK:
            return cChoice === SCISSORS? RESULT_PLAYER : RESULT_COMPUTER;
        case PAPER:
            return cChoice === ROCK? RESULT_PLAYER : RESULT_COMPUTER;
        case SCISSORS:
            return cChoice === PAPER? RESULT_PLAYER : RESULT_COMPUTER;
    }
}

startGameBtn.addEventListener('click', () => {
    if (gameIsRunning) {
        alert('The game is already running!');
        return;
    }
    gameIsRunning = true;
    console.log('Game is starting...');
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    const winner = determineWinner(computerSelection, playerSelection);
    alert('Winner: ' + winner + `\n\nPlayer's choice: ${playerSelection}. Computer's choice: ${computerSelection}`);
    gameIsRunning = false;
});