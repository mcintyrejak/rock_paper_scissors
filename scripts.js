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

console.log("Computer choice: ", getComputerChoice());

// checkInputs(){
//     // Check that case doesn't matter
// }

function getPlayerChoice() {
    // Get the player's choice of rock, paper, scissors
    // Output the player's choice
    let playerChoice = prompt("Choose rock, paper, or scissors");
    console.log("Player choice: ", playerChoice)
}

console.log(getPlayerChoice())


// determineWinner(){
//     // Compare computer's choice to player's choice
//     // Output winner
// }

// game(){
//     // Play five rounds
//     // Display winners
// }

// overallWinner(){
//     // Determine the winner of all five rounds
// }

