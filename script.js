const playGame = (humanChoice, computerChoice, humanScore, computerScore) => {
  let numOfGames = 5;
  let counter = 0;
  while (counter < numOfGames) {
    humanChoice = getHumanChoice();
    computerChoice = getComputerChoice();
    const result = playRound(humanChoice,computerChoice, humanScore, computerScore);
    humanScore = result.humanScore;
    computerScore = result.computerScore;
    console.log(`After ${counter+1} rounds, human: ${humanScore} | ${computerScore}: computers. 
                  Your choice: ${humanChoice} | Computer choice: ${computerChoice}`) 
    counter++;
  }
  if (humanScore === computerScore) {
    console.log(`It's a tie. your score is ${humanScore}, computer score is ${computerScore}`)
  } else if (humanScore > computerScore) {
    console.log(`You win. your score is ${humanScore}. comptuer score is ${computerScore}`)
  } else {
    console.log(`Computer win. your score is ${humanScore}. Computer score is ${computerScore}`)
  }
}
const playRound = (humanChoice, computerChoice, humanScore, computerScore) => {
  humanChoice = humanChoice.toLowerCase();
  const choices = {'rock' : 0, 'paper': 1, 'scissors': 2};

  humanNum = choices[humanChoice];
  computerNum = choices[computerChoice];

  const result = (3 + humanNum - computerNum) % 3;
  let message;
  if (result === 0) {
    message = `You choose ${humanChoice}. Computer choose ${computerChoice}. It's a tie.`;
  } else if (result === 1) {
    message = `You choose ${humanChoice}. Computer choose ${computerChoice}. You win.`;
    humanScore++;
  } else if (result === 2) {                         
    message = `You choose ${humanChoice}. Computer choose ${computerChoice}. Computer win.`;
    computerScore++;
  }
  return {message, humanScore, computerScore};
}

const getComputerChoice = () => {
  const randomNum = Math.floor(Math.random() * (3));
  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else if (randomNum === 2) {
    return "scissors";
  }
}

const getHumanChoice = () => {
  let humanChoice = prompt("rock, paper, or scissors: ")
  return humanChoice;
}

console.log(playGame(getHumanChoice(), getComputerChoice(), 0, 0))
