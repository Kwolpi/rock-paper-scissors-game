alert("Rock, Paper, Scissors game, yeah, let's go!");
// ask the user to prompt: r, p, s
let user_choice = prompt('Choose between (r)ock, (p)aper,(s)cissors');
// rock, paper, scissors
const choices = ['r', 'p', 's'];
// random computer choice
const computer = Math.floor(Math.random() *choices.length);

//conditions r>s, p>r, s>p, user_choice == computer

function playRound(user_choice, computer) {
if (user_choice == 'r' && computer =='s') {
    alert('You win!');
}
else if (user_choice == 'p' && computer == 'r') {
    alert ('You win!');
}
else if (user_choice == 's' && computer == 'p') {
    alert('You win!');
}
else if (user_choice == computer) {
    alert('It\'s a tie');
}
else {
    alert('You lose');
}

};

function game() {
    for (let i = 0; i<5; i++) {
    playRound()
    }
};

game()