alert("Let's play rock, paper, scissors!");

// const userChoice = prompt('Choose between rock, paper or scissors');

const choiceList = ['rock', 'paper', 'scissors'];

// function computerPlay() {
//const computerChoice = choiceList[Math.floor(Math.random() *choiceList.length)];
// }


scoreUser = 0;
tieNumber = 0;
loseNumber = 0;

function playRound(playerSelection, computerSelection) {

    const userChoice = prompt('Choose between rock, paper or scissors').toLowerCase();
    playerSelection = userChoice;

    const computerChoice = choiceList[Math.floor(Math.random() *choiceList.length)]
    computerSelection = computerChoice;

    
//----------------------------------------
if (playerSelection == 'rock' && computerSelection == 'scissors') {
    alert(`${playerSelection} beats ${computerSelection}`);
    scoreUser = ++scoreUser;
}
else if (playerSelection == 'paper' && computerSelection == 'rock') {
    alert(`${playerSelection} beats ${computerSelection}`);
    scoreUser = ++scoreUser;
}
else if (playerSelection == 'scissors' && computerSelection == 'paper') {
    alert(`${playerSelection} beats ${computerSelection}`);
    scoreUser = ++scoreUser;
}
else if (playerSelection == computerSelection) {
    alert(`${playerSelection} and ${computerSelection}, it's a tie!`);
    tieNumber = ++tieNumber;

}
else {
    alert('You lose!');
    loseNumber = ++loseNumber;
}
alert(`You won ${scoreUser}, you lose ${loseNumber} and you had ${tieNumber} draws`);
}

function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}
game()

if (scoreUser > loseNumber) {
    alert('You win the game!');
}
else if(loseNumber > scoreUser) {
    alert('You lose the game!');
}