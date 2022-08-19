// global variables
const choices = ["rock", "paper", "scissors"]
const playerSelection = "rock"
const computerSelection = getComputerChoice()
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
    // computerChoice = computerSelection;
    // playerChoice = playerSelection;
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

console.log(playRound(playerSelection, computerSelection))

