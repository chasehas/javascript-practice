function computerPlay() {
    // generate a random number between 0 and 2
    const randomNumber = Math.floor(Math.random() * 3);
  
    // return 'rock', 'paper', or 'scissors' based on the random number
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    // convert both selections to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    // determine the winner based on the selections
    if (playerSelection === computerSelection) {
      return 'Tie!';
    } else if (
      (playerSelection === 'rock' && computerSelection === 'scissors') ||
      (playerSelection === 'paper' && computerSelection === 'rock') ||
      (playerSelection === 'scissors' && computerSelection === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
  }
  
  function game() {
    // play 5 rounds of rock paper scissors
    for (let i = 0; i < 5; i++) {
      const playerSelection = prompt('Choose rock, paper, or scissors');
      const computerSelection = computerPlay();
      console.log(playRound(playerSelection, computerSelection));
    }
  }
  
  game();
  