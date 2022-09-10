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
    if (result == 1) {
        console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
        return 1;
    }
    else if (result == 0) {
        console.log(`You loose! ${computerSelection} beats ${playerSelection}!`);
        return 0;
    }
    else if (result == -1) {
        console.log("Looks like it's a tie! Try again");
        return -1;
    }
}

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i++) {
//         const computerChoice = getComputerChoice();
//         let playResult = parseInt(playRound(playerChoice, computerChoice));
//         switch(playResult) {
//             case 1:
//                 playerScore++;
//                 break;
//             case 0:
//                 computerScore++;
//                 break;
//             default:
//                 i--;
//         }
//     }
//     if (playerScore > computerScore) 
//         console.log(`Player Wins! ${playerScore} - ${computerScore}`);
//     else 
//         console.log(`Computer Wins! ${playerScore} - ${computerScore}`);
// }

//Setting scores as global variables since it's just simpler.
let playerScore = 0, computerScore = 0;

function updateScore() {
    const score = document.querySelector('.score');
    score.textContent = `${computerScore} - ${playerScore}`;
}

//This processes the click of a button, it will be used to also manage the game score.
function makePlay(e) {
    let playOutcome;
    switch(e.target.className) {
        case 'rock':
            playOutcome = playRound('Rock', getComputerChoice());
            break;
        case 'paper':
            playOutcome = playRound('Paper', getComputerChoice());
            break;
        case 'scissors':
            playOutcome = playRound('Scissors', getComputerChoice());
            break;
        default:
            return;
    }
    switch(playOutcome) {
        case 1:
            playerScore++;
            break;
        case 0:
            computerScore++;
            break;
        default:
            break;
    }
    updateScore();
    if (computerScore === 5 || playerScore === 5) {
        buttons.forEach(button => button.removeEventListener('click', makePlay));
    }
}

const buttons = document.querySelectorAll("button");
buttons.forEach(button => button.addEventListener('click', makePlay));