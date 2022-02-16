//Welcome message
alert("Let's play rock, paper, scissors!");
//Array used for the computer choices
const choiceList = ['rock', 'paper', 'scissors'];


//Scoreboard values - used line 60
scoreUser = 0;
tieNumber = 0;
loseNumber = 0;

//Main game
function playRound(playerSelection, computerSelection) {
//What the user will input?
    const userChoice = prompt('Choose between rock, paper or scissors').toLowerCase();
    playerSelection = userChoice;
//What the computer will chose? 
    const computerChoice = choiceList[Math.floor(Math.random() *choiceList.length)]
    computerSelection = computerChoice;

//Conditions  
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
//Scoreboard
alert(`You won ${scoreUser}, you lose ${loseNumber} and you had ${tieNumber} draws`);
}


//Allow to play 5 times
function game() {
    for (let i = 0; i < 5; i++) {
        playRound()
    }
}
game()

//Final result
if (scoreUser > loseNumber) {
    alert('You win the game!');
}
else if(loseNumber > scoreUser) {
    alert('You lose the game!');
}