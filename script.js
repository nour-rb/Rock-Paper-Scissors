let rock = 0;
let paper = 1;
let scissors = 2;
// get computer choice 
// generate a number
let computerNumber = Math.floor(Math.random() * 3);
//console.log(computerNumber);
function getComputerChoice(computerNumber){
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
getComputerChoice(computerNumber);

// get human choice
function getHumanChoice(humanChoice){
    let Choice = prompt("rock, paper or scissors? ");
    return humanChoice;
}
let humanChoice = getHumanChoice();


// compare them
// score 1 to the winner
// repeat 2 more times
// compare scores
// print final winner
