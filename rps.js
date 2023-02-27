let playerScore = 0;
let computerScore = 0;
const result = document.getElementById("result");
const score = document.getElementById("score");
const startButton = document.getElementById("startButton");
const introScreen = document.getElementById("introScreen");
const gameScreen = document.getElementById("gameScreen");
let computerDifficulty = ""
let playerName = ""
let secretMessage = document.getElementById("secret-message")
let lastPlayerSelection = ""
let lastRoundResult = ""
let globalPlayerSelection = ""

function randomRPS() {
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

function computerPlay(opponentSelect) {
  if (opponentSelect === "Medium") {
    return randomRPS();
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
      else if (lastPlayerSelection == "scissors") {
        return "paper";
      }
    } else {
      return randomRPS();
    }
  } else if (opponentSelect === "Impossible") {
      if (playerName ==="no cap" || playerName === "nocap"){
        return randomRPS();
      }
      else {
        if (globalPlayerSelection == "rock") {
        return "paper";
        }
        else if (globalPlayerSelection == "paper") {
        return "scissors";
        }
        else if (globalPlayerSelection == "scissors") {
        return "rock";
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
    roundResult = `You lose this round! ${choices}`;
    gossipResult = "A perfect strategy."
    lastRoundResult = "computer-win"
  }

  score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;

  if (playerScore === 5) {
    gossip.textContent = "You win the game! Refresh to play again!";
    if (computerDifficulty === "Easy"){
      secretMessage.textContent = "Rock, I still believe in you! BTW, the others might have clues for Dr. Impossible!";
    }
    else if (computerDifficulty === "Medium"){
      secretMessage.textContent = "Eh, you win some, you lose some. Your clue is: The opposite of yes.";
    }
    else if (computerDifficulty === "Hard"){
      secretMessage.textContent = "My perfect strategy let me down. Your clue is: The thing that closes your toothpaste.";
    }
    else if (computerDifficulty === "Impossible"){
      secretMessage.textContent = "Defeated by no cap. That's crazy. Thanks for playing Chase's EPIC RPS Tournament.";
    }
    disableButtons();
  } else if (computerScore === 5) {
    gossip.textContent = "You lose the game! Refresh to play again!";
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
  globalPlayerSelection = playerSelection;
  const computerSelection = computerPlay(computerDifficulty);
  
  playRound(playerSelection, computerSelection);
});

const paperButton = document.getElementById("paper");
paperButton.addEventListener("click", () => {
  const playerSelection = "paper";
  globalPlayerSelection = playerSelection;
  const computerSelection = computerPlay(computerDifficulty);
  
  playRound(playerSelection, computerSelection);
});

const scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", () => {
  const playerSelection = "scissors";
  globalPlayerSelection = playerSelection;
  const computerSelection = computerPlay(computerDifficulty);
  
  playRound(playerSelection, computerSelection);
});

startButton.addEventListener("click", () => {
  const nameInput = document.getElementById("nameInput").value;
  playerName = nameInput;
  const opponentSelect = document.getElementById("opponentSelect").value;
  computerDifficulty = opponentSelect;
  introScreen.style.display = "none";
  gameScreen.style.display = "block";
  introGossip()
});

function introGossip(){
  
  if (computerDifficulty === "Easy"){
    gossip.textContent = "Rock is a lock.";
  }
  if (computerDifficulty === "Medium"){
    gossip.textContent = "Medium? Not for you, noob.";
  }
  if (computerDifficulty === "Hard"){
    gossip.textContent = "Psychology, 1. You, 0.";
  }
  if (computerDifficulty === "Impossible"){
    gossip.textContent = "Go away.";
  }
  if (computerDifficulty === "Impossible" && (playerName === "nocap" || playerName === "no cap")){
    gossip.textContent = "What? My powers!";
  }

}