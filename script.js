// const playGame = (humanChoice, computerChoice, humanScore, computerScore) => {
//   let numOfGames = 5;
//   let counter = 0;
//   while (counter < numOfGames) {
//     humanChoice = getHumanChoice();
//     computerChoice = getComputerChoice();
//     const result = playRound(humanChoice,computerChoice, humanScore, computerScore);
//     humanScore = result.humanScore;
//     computerScore = result.computerScore;
//     console.log(`After ${counter+1} rounds, human: ${humanScore} | ${computerScore}: computers. 
//                   Your choice: ${humanChoice} | Computer choice: ${computerChoice}`) 
//     counter++;
//   }
//   if (humanScore === computerScore) {
//     console.log(`It's a tie. your score is ${humanScore}, computer score is ${computerScore}`)
//   } else if (humanScore > computerScore) {
//     console.log(`You win. your score is ${humanScore}. comptuer score is ${computerScore}`)
//   } else {
//     console.log(`Computer win. your score is ${humanScore}. Computer score is ${computerScore}`)
//   }
// }
let humanScore = 0;
let computerScore = 0;

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

// Create 3 buttons for rock paper scissors
const playBtn1 = document.createElement("button");
const playBtn2 = document.createElement("button");
const playBtn3 = document.createElement("button");

// Implement text and functionality
playBtn1.textContent = "Rock";
playBtn2.textContent = "Paper";
playBtn3.textContent = "Scissors";


playBtn1.addEventListener("click", () => {
  const result = playRound("rock", getComputerChoice(), humanScore, computerScore);

  // Update the result
  humanScore = result.humanScore;
  computerScore = result.computerScore;

  resultDiv.textContent = result.message;

  // Update score display
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  // Check if someone won the game
  checkWinner();

  
});
playBtn2.addEventListener("click", () => {
  const result = playRound("paper", getComputerChoice(), humanScore, computerScore);
  // Update the result
  humanScore = result.humanScore;
  computerScore = result.computerScore;

  resultDiv.textContent = result.message;

  // Update score display
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  // Check if someone won the game
  checkWinner();
});
playBtn3.addEventListener("click", () => {
  const result = playRound("scissors", getComputerChoice(), humanScore, computerScore);
  // Update the result
  humanScore = result.humanScore;
  computerScore = result.computerScore;

  resultDiv.textContent = result.message;

  // Update score display
  scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

  // Check if someone won the game
  checkWinner();
});

//container element
const buttonContainer = document.createElement("div");
buttonContainer.appendChild(playBtn1);
buttonContainer.appendChild(playBtn2);
buttonContainer.appendChild(playBtn3);
document.body.appendChild(buttonContainer);

//Create result display area
const resultDiv = document.createElement("div");
resultDiv.id = "results";
document.body.appendChild(resultDiv);

//Create score display
const scoreDisplay = document.createElement("div");
scoreDisplay.id = "score";
scoreDisplay.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
document.body.appendChild(scoreDisplay);

const checkWinner = () => {
  if (humanScore >= 5 || computerScore >= 5) {
   const winnerMessage = document.createElement("h2");
   
   if (humanScore === computerScore) {
    winnerMessage.textContent = "It's a tie game!";
   } else if(humanScore > computerScore) {
    winnerMessage.textContent = "You win the game!";
   } else {
    winnerMessage.textContent = "Computer win the game!";
   }

   document.body.appendChild(winnerMessage);

  }
};