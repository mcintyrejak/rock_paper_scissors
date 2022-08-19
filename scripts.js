// global variables
const choices = ["rock", "paper", "scissors"]
const playerSelection = "rock"
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
        console.log(playRound(playerSelection, computerSelection))
    }
}

game()

