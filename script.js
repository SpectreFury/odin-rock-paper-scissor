const getComputerChoice = () => {
  const gameOptions = ["Rock", "Paper", "Scissor"];
  const choice = gameOptions[Math.floor(Math.random() * 3)];
  return choice;
};

const gameRound = (playerSelection, computerSelection) => {
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
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt(
      "Enter your choice, player! and please, like, 'Rock', 'Paper', 'Scissor', I'm tired sorry!"
    );
    const computerSelection = getComputerChoice();
    const result = gameRound(playerSelection, computerSelection);
    if (result.includes("win")) {
      console.log(result);
      playerScore++;
    } else if (result.includes("lose")) {
      console.log(result);
      computerScore++;
    } else {
      console.log(result);
    }
  }

  console.log(playerScore, computerScore);

  if (playerScore > computerScore) {
    console.log("You won!");
  } else if (playerScore < computerScore) {
    console.log("You lose!");
  } else {
    console.log(`Tis' a draw!`);
  }
};

game();
