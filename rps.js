let playerScore = 0;
let computerScore = 0;
const result = document.getElementById("result");
const score = document.getElementById("score");
const startButton = document.getElementById("startButton");
const introScreen = document.getElementById("introScreen");
const gameScreen = document.getElementById("gameScreen");
let lastPlayerSelection = ""
let lastRoundResult = ""

function computerPlay(opponentSelect) {
  if (opponentSelect === "Medium") {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
      case 1:
        return "paper";
      case 2:
        return "scissors";
    }
  } else if (opponentSelect === "Easy") {
    return "rock";
  } else if (opponentSelect === "Hard") {
    if (lastPlayerSelection !== "" && lastRoundResult === "computer-win") {
      if (lastPlayerSelection == "rock") {
        return "scissors";
      }
      else if (lastPlayerSelection == "paper") {
        return "rock";
      }
      if (lastPlayerSelection == "scissors") {
        return "paper";
      }
    } else {
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
  }
}

function playRound(playerSelection, computerSelection) {
  // convert both selections to lowercase
  // playerSelection = playerSelection.toLowerCase();
  // computerSelection = computerSelection.toLowerCase();
  let roundResult = "";
  let gossipResult= "";
  lastPlayerSelection = playerSelection;
  const choices = `Player: ${playerSelection} Computer: ${computerSelection}`;

  if (playerSelection === computerSelection) {
    roundResult = `Tie! ${choices}`;
    gossipResult = "The only winning move is not to play."
    lastRoundResult = "tie"
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    roundResult = `You win this round! ${choices}`;
    gossipResult = "I'll get you next time."
    lastRoundResult = "player-win"
  } else {
    computerScore++;
    roundResult = `Computer wins this round! ${choices}`;
    gossipResult = "Electrons beat emotions."
    lastRoundResult = "computer-win"
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
  const playerSelection = "rock";
  const computerSelection = computerPlay(document.getElementById("opponentSelect").value);
  playRound(playerSelection, computerSelection);
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
  const playerSelection = "paper";
  const computerSelection = computerPlay(document.getElementById("opponentSelect").value);
  playRound(playerSelection, computerSelection);
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
  const playerSelection = "scissors";
  const computerSelection = computerPlay(document.getElementById("opponentSelect").value);
  playRound(playerSelection, computerSelection);
});

startButton.addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value;
  const opponentSelect = document.getElementById("opponentSelect").value;
  introScreen.style.display = "none";
  gameScreen.style.display = "block";
});