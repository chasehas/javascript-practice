let playerScore = 0;
let computerScore = 0;
const result = document.getElementById("result");
const score = document.getElementById("score");

function computerPlay() {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  // convert both selections to lowercase
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  let roundResult = "";
  let gossipResult= "";

  const choices = `Player: ${playerSelection} Computer: ${computerSelection}`;

  if (playerSelection === computerSelection) {
    roundResult = `Tie! ${choices}`;
    gossipResult = "The only winning move is not to play."
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundResult = `You win this round! ${choices}`;
    gossipResult = "I'll get you next time."
  } else {
    computerScore++;
    roundResult = `Computer wins this round! ${choices}`;
    gossipResult = "Electrons beat emotions."
  }

  score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

  if (playerScore === 5) {
    result.textContent = "You win the game!";
    disableButtons();
  } else if (computerScore === 5) {
    result.textContent = "Computer wins the game!";
    disableButtons();
  } else {
    result.textContent = roundResult;
    gossip.textContent = gossipResult;
  }
}


function disableButtons() {
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.disabled = true;
  });
}

const rockButton = document.getElementById("rock");
rockButton.addEventListener("click", () => {
  playRound("rock", computerPlay());
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
  playRound("paper", computerPlay());
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
  playRound("scissors", computerPlay());
});