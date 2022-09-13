// global variables
const choices = ["rock", "paper", "scissors"]
let playerWins = 0
let computerWins = 0
let ties = 0

const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorsBtn = document.querySelector('#scissors');
const resultEl = document.querySelector('#result')
const tiesEl = document.querySelector('#ties');
const winsEl = document.querySelector('#wins');
const lossesEl = document.querySelector('#losses');







// gets a random computer choice of rock, paper, scissors
function getComputerChoice() {
    let ranNum = Math.floor(Math.random() * 3);
    return choices[ranNum]
}


// plays one round of rock, paper, scissors
function playRound(playerChoice, computerChoice) {
    let totalGames = ties + playerWins + computerWins;
    if (totalGames >= 5) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        if (playerWins > computerWins) {
            resultEl.textContent = "You win the game!";
        } else if (computerWins > playerWins) {
            resultEl.textContent = "Computer wins the game!";
        } else {
            resultEl.textContent = "Tie for the game!";
        }
    } else if (playerChoice === computerChoice) {
        ties++;
        resultEl.textContent = "Tie this time!";
        tiesEl.textContent = `Ties: ${ties}`;
    } else if (playerChoice === "rock" && computerChoice === "scissors" || playerChoice === "scissors" && computerChoice === "paper" || playerChoice === "paper" && computerChoice === "rock") {
        playerWins++;
        resultEl.textContent = `Computer picked ${computerChoice}. You win this one!`
        winsEl.textContent = `Wins: ${playerWins}`;
    } else {
        computerWins++;
        resultEl.textContent = `Computer picked ${computerChoice}. Computer wins this one!`
        lossesEl.textContent = `Losses: ${computerWins}`;
    }
}




//listen for clicks on each button and call playRound() with the correct playerSelection every time the button is clicked
rockBtn.addEventListener('click', () => {
    let playerChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
})

paperBtn.addEventListener('click', () => {
    let playerChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
})

scissorsBtn.addEventListener('click', () => {
    let playerChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
    console.log(playerChoice);
    console.log(computerChoice);
})






















// plays a 5 round game that keeps score and reports a winner or loser
// function game() {
//     for (let i = 0; i < 5; i++) {
//         let computerSelection = getComputerChoice()
//         let playerSelection = prompt("Rock, paper, or scissors?").toLowerCase()
//         playRound(playerSelection, computerSelection)
//     }
//     if (playerWins > computerWins) {
//         console.log(`Player wins it all! ${playerWins} to ${computerWins}`)
//     } else if (playerWins < computerWins) {
//         console.log(`Computer wins it all! ${computerWins} to ${playerWins}`)
//     } else if (playerWins === computerWins) {
//         console.log("Ties!!!!")
//     }
// }
// game()

