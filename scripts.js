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
    // don't let the user cancel
    while (input === null) {
        input = prompt("You need to choose rock, paper, or scissors")
    }
    // make the input case insensitive
    input = input.toLowerCase();

    // validate the user's input matches an item in the choices array 
    // prompt the user if it doesn't

    let check = validateInput(input);
    while (check === false) {
        input = prompt("You need to choose rock, paper, or scissors");
        while (input === null) {
            input = prompt("You need to choose rock, paper, or scissors")
        }
        input = input.toLowerCase();
        check = validateInput(input); // keeps prompting user until check returns true
    }

}

function computerChoice() {
    // this function returns a random choice of rock, paper, scissors, from the choices array //
    return choices[Math.floor(Math.random() * choices.length)]
}

function validateInput(choice) {
    // make sure what the user types matches an item in the choices array (rock, paper, or scissors)
    choices.includes(choice) // will return true if choices includes choice
}

game();