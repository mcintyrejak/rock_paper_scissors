// global variables //
const choices = ["rock", "paper", "scissors"]

function game() {
    // play the game
    // play five rounds
    // console based
    playRound();
}

function playRound() {
    // save the random computer selection in a variable for use 
    // save the player inputted choice in a variable for use
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
}

function playerChoice() {
    // get input from the player
    let input = prompt("Rock, paper, or scissors?");
    // make the input case insensitive
    input = input.toLowerCase();
    console.log(input);
}

function computerChoice() {
    // this function returns a random choice of rock, paper, scissors, from the choices array //
    return choices[Math.floor(Math.random() * choices.length)]
}

game();