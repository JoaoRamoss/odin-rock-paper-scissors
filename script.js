//Returns "Rock", "Paper" or "Scissors". It will act as the computer's "choice".
function getComputerChoice() {
    const options = ["Rock", "Paper", "Scissors"];
    let choice = Math.floor(Math.random() * 3);

    return options[choice];
}


