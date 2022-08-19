// global variables
const choices = ["rock", "paper", "scissors"]
let playerWins = 0
let computerWins = 0
let ties = 0



// gets a random computer choice of rock, paper, scissors
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    return choices[ranNum]
}


// plays one round of rock, paper, scissors
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        ties++;
        return "Tie!"
    } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock") {
        playerWins++;
        return "Player wins!"
    } else {
        computerWins++;
        return "Computer wins!"
    }
}

// plays a 5 round game that keeps score and reports a winner or loser
function game() {
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice()
        let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase()
        playRound(playerSelection, computerSelection)
    }
    if (playerWins > computerWins) {
        console.log(`Player wins it all! ${playerWins} to ${computerWins}`)
    } else if (playerWins < computerWins) {
        console.log(`Computer wins it all! ${computerWins} to ${playerWins}`)
    } else if (playerWins === computerWins) {
        console.log("Ties!!!!")
    }
}
game()

