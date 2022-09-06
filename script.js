//Returns "Rock", "Paper" or "Scissors". It will act as the computer's "choice".
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);

    return options[choice];
}

//If the player's choice wins, the function returns 1, if he loses, it returns 0. It will return -1 in case of a tie.
function whoWins(playerSel, computerSel) {
    //Always comparing in upper case to make it case INsensitive.
    if (playerSel.toUpperCase() === computerSel.toUpperCase())
        return -1;
    else if (playerSel.toUpperCase() === "ROCK" && computerSel.toUpperCase() === "SCISSORS")
        return 1;
    else if (playerSel.toUpperCase() === "PAPER" && computerSel.toUpperCase() === "ROCK") 
        return 1;
    else if (playerSel.toUpperCase() === "SCISSORS" && computerSel.toUpperCase() === "PAPER")
        return 1;
    else 
        return 0;
}

//Plays a round. Receives the player selection and the computer selection.
function playRound (playerSelection, computerSelection) {
    const result = whoWins(playerSelection, computerSelection);
    if (result == 1)
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    else if (result == 0)
        console.log(`You loose! ${computerSelection} beats ${playerSelection}!`);
    else if (result == -1) 
        console.log("Looks like it's a tie!");
}

