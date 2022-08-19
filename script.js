const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissor = document.querySelector(".scissor");
const display = document.querySelector(".display");
const playerBoard = document.querySelector(".player");
const computerBoard = document.querySelector(".computer");
let playerScore = 0;
let computerScore = 0;

rock.addEventListener("click", clickedRock);
paper.addEventListener("click", clickedPaper);
scissor.addEventListener("click", clickedScissor);

function clickedRock() {
  if (playerScore === 5) {
    display.textContent = "YOU WON!";
    return;
  } else if (computerScore === 5) {
    display.textContent = "YOU LOST!";
    return;
  } else {
    const computerSelection = getComputerChoice();
    const playerSelection = "Rock";
    const result = gameRound(playerSelection, computerSelection);
    if (result.includes("win")) {
      playerScore++;
      playerBoard.textContent = playerScore;
      display.textContent = result;
    } else if (result.includes("lose")) {
      computerScore++;
      computerBoard.textContent = computerScore;
      display.textContent = result;
    } else {
      display.textContent = result;
    }
  }
}

function clickedPaper() {
  if (playerScore === 5) {
    display.textContent = "YOU WON!";
    return;
  } else if (computerScore === 5) {
    display.textContent = "YOU LOST!";
    return;
  } else {
    const computerSelection = getComputerChoice();
    const playerSelection = "Paper";
    const result = gameRound(playerSelection, computerSelection);
    if (result.includes("win")) {
      playerScore++;
      playerBoard.textContent = playerScore;
      display.textContent = result;
    } else if (result.includes("lose")) {
      computerScore++;
      computerBoard.textContent = computerScore;
      display.textContent = result;
    } else {
      display.textContent = result;
    }
  }
}
function clickedScissor() {
  if (playerScore === 5) {
    display.textContent = "YOU WON!";
    return;
  } else if (computerScore === 5) {
    display.textContent = "YOU LOST!";
    return;
  } else {
    const computerSelection = getComputerChoice();
    const playerSelection = "Scissor";
    const result = gameRound(playerSelection, computerSelection);
    if (result.includes("win")) {
      playerScore++;
      playerBoard.textContent = playerScore;
      display.textContent = result;
    } else if (result.includes("lose")) {
      computerScore++;
      computerBoard.textContent = computerScore;
      display.textContent = result;
    } else {
      display.textContent = result;
    }
  }
}

function getComputerChoice() {
  const gameOptions = ["Rock", "Paper", "Scissor"];
  const choice = gameOptions[Math.floor(Math.random() * 3)];
  return choice;
}

function gameRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "This is a draw!";
  } else if (playerSelection === "Rock" && computerSelection === "Paper") {
    return "You lose! Rock does not beat paper!";
  } else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "You win! Paper beats rock!";
  } else if (playerSelection === "Rock" && computerSelection === "Scissor") {
    return "You win! Rock beats Scissor";
  } else if (playerSelection === "Scissor" && computerSelection === "Rock") {
    return "You lose! Scissor does not beat Rock!";
  } else if (playerSelection === "Paper" && computerSelection === "Scissor") {
    return "You lose! Paper does not beat Scissor";
  } else if (playerSelection === "Scissor" && computerSelection === "Paper") {
    return "You win! Scissor beats Paper";
  }
}
