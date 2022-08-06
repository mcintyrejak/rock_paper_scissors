function getComputerChoice() {
    // Get the computer's choice of rock, paper, scissors
    // Output the computer's choice
    let ranNum = Math.floor((Math.random() * 3) + 1)
    if (ranNum === 1) {
        return "Rock"
    } else if (ranNum === 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

let computerChoice = getComputerChoice();

console.log(computerChoice);
// checkInputs(){
//     // Check that case doesn't matter
// }

function getPlayerChoice() {
    // Get the player's choice of rock, paper, scissors
    // Output the player's choice
    let playerChoice = prompt("Choose rock, paper, or scissors");
    console.log("Player choice: ", playerChoice)
}


// function determineWinner() {
//     // Compare computer's choice to player's choice
//     // Output winner
//     if (playerChoice === computer)
// }

// game(){
//     // Play five rounds
//     // Display winners
// }

// overallWinner(){
//     // Determine the winner of all five rounds
// }

