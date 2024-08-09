const choices = ['rock', 'paper', 'scissors'];
const resultMessage = document.getElementById('result-message');
const resetButton = document.getElementById('reset-btn');

// Event listeners for game buttons
document.getElementById('rock').addEventListener('click', () => play('rock'));
//click is type of an event and 
// addEventListener: This is a method in JavaScript used to attach an event handler to a particular event on an element.
//when the element (in this case, the button with ID rock) is clicked, the specified function (in this case, the arrow function () => play('rock')) will be executed.
document.getElementById('paper').addEventListener('click', () => play('paper'));
document.getElementById('scissors').addEventListener('click', () => play('scissors'));

// Event listener for reset button
resetButton.addEventListener('click', resetGame);

function play(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result;

    if (playerChoice === computerChoice) {
        result = 'It\'s a tie!';

        
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        result = 'You win!';
    } else {
        result = 'You lose!';
    }

    resultMessage.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
}

function resetGame() {
    resultMessage.textContent = 'Choose an option to start the game!';
}
