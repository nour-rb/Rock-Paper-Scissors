let rock = 0;
let paper = 1;
let scissors = 2;

// get computer choice 
function getComputerChoice(){
    // generate a number
    let computerNumber = Math.floor(Math.random() * 3);
    // convert the generated number to a word
    let computerChoice;
    if (computerNumber === 0){
        computerChoice = "rock";
        console.log(computerChoice)
        return computerChoice;
    }
    if (computerNumber === 1){
        computerChoice = "paper";
        console.log(computerChoice)
        return computerChoice;
    }
    if (computerNumber === 2){
        computerChoice = "scissors";
        console.log(computerChoice)
        return computerChoice;
    }
}

// get human choice
function getHumanChoice(){
    let choice = prompt("rock, paper or scissors? ");
    return choice;
}

// initialize scores
let computerScore = 0;
let humanScore = 0;

// function logic for one round
function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();
    if (computerChoice === humanChoice){
        return("it's a tie!");
    }
    else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ){
        return("You win!");
    }
    else{
        return("Computer wins!");
    }
}

function playGame(){
    for (i = 0; i < 5; i++){
        let computerChoice = getComputerChoice(); 

        let humanChoice = getHumanChoice(); 
        if (humanChoice) {
            humanChoice = humanChoice.toLowerCase();
        }

        let result = playRound(humanChoice, computerChoice); 

        // Update scores based on the result
        if (result === "You win!"){
            humanScore++;
        }
        else if (result === "Computer wins!"){
            computerScore++;
        }
    }
    // After 5 rounds, announce the final winner
    if (computerScore > humanScore){
        console.log("The computer wins the game!");
    }
    else if (computerScore < humanScore){
        console.log("You win the game!");
    }
    else{
        console.log("It's a tie game!");
    }
}
playGame();
