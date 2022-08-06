
// checkInputs(){
//     // Check that case doesn't matter
// }

function getPlayerChoice() {
    // Get the player's choice of rock, paper, scissors
    // Output the player's choice
    let input = prompt("Choose rock, paper, or scissors");
    return input
}

let playerChoice = getPlayerChoice();
console.log("Player choice: ", playerChoice);
function getComputerChoice() {
    // Get the computer's choice of rock, paper, scissors
    // Output the computer's choice
    let ranNum = Math.floor((Math.random() * 3) + 1)
    if (ranNum === 1) {
        return "rock"
    } else if (ranNum === 2) {
        return "paper"
    } else {
        return "scissors"
    }
}

let computerChoice = getComputerChoice();

console.log("Computer choice: ", computerChoice);


function determineWinner() {
    // Compare computer's choice to player's choice
    // Output winner
    if (computerChoice === playerChoice) {
        return "Tie"
    }
}

console.log("Winner: ", determineWinner())

// game(){
//     // Play five rounds
//     // Display winners
// }

// overallWinner(){
//     // Determine the winner of all five rounds
// }

