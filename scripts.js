function getComputerChoice() {
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === 1) {
        computerChoice = "Rock";
    } else if (computerChoice === 2) {
        computerChoice = "Paper";
    } else {
        computerChoice = "Scissors";
    }
    return computerChoice;
    console.log(computerChoice);
}



function playRound(playerSelection, computerChoice) {
    if (playerSelection === computerChoice) {
        return "It's a tie!"
    } else if (playerSelection === "Rock" && computerChoice === "Scissors") {
        return "You win!"
    } else if (playerSelection === "Scissors" && computerChoice === "Rock") {
        return "You win!"
    } else if (playerSelection === "Paper" && computerChoice === "Rock") {
        return "You win!"
    } else {
        return "Computer wins, bitch!"
    }

}
const playerSelection = "Rock";
console.log("Player choice: " + playerSelection);
const computerChoice = getComputerChoice();
console.log("Computer choice: " + computerChoice);
console.log(playRound(playerSelection, computerChoice));


