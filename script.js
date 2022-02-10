let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate random number at the start of each new round
const generateTarget = () => Math.floor(Math.random() * 10);


// calculate distance between user and computer entry number
const getAbsoluteDistance = (number1, number2) => {
  return Math.abs(number1 - number2);
};

//function will be called each round to determine which guess is closest to the target number
const compareGuesses = (userGuess, computerGuess, targetGuess) => {
  // calculate distance with getAbsoluteDistance function
  let userDistance = getAbsoluteDistance(userGuess, targetGuess);
  let computerDistance = getAbsoluteDistance(computerGuess, targetGuess);

  if (userDistance === computerDistance) {
    return true;
  } else if (userDistance < computerDistance) {
    return true;
  } else if (userDistance > computerDistance) {
    return false;
  }

  /******************************************************** */
  // calculate distance without getAbsoluteDistance function
  /******************************************************** */
  /*
  if (
    Math.abs(userGuess - targetGuess) === Math.abs(computerGuess - targetGuess)
  ) {
    return true;
  } else if (
    Math.abs(userGuess - targetGuess) < Math.abs(computerGuess - targetGuess)
  ) {
    return true;
  } else {
    return false;
  }
  */
};

// updates score of one player based on how is the winner
const updateScore = (announceWinner) => {
  if (announceWinner === "human") {
    humanScore++;
  } else if (announceWinner === "computer") {
    computerScore++;
  }
};

// update the round number after each round
const advanceRound = () => currentRoundNumber++;
