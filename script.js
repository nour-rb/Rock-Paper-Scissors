// Select the button container and all buttons inside it
const container = document.querySelector('#container');
const buttons = container.querySelectorAll('button');

// Get a random computer choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Compare player and computer and return result
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }

  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };

  if (winningCombos[playerSelection] === computerSelection) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  } else {
    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

// Loop through buttons and add click event to each
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    const playerSelection = button.id; // id is "rock", "paper", or "scissors"
    const computerSelection = getComputerChoice();
    const result = playRound(playerSelection, computerSelection);
    console.log(result); // Show the result in the console (for now)
  });
});

