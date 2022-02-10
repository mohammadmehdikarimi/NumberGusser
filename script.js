let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate random number at the start of each new round
const generateTarget = () => Math.floor(Math.random() * 10);

//function will be called each round to determine which guess is closest to the target number
const compareGuesses = (userGuess, computerGuess, secretNumber) => {
    if (secretNumber < userGuess && secretNumber < computerGuess) {
        if (userGuess < computerGuess) {
            return true;
        } else {
            return false;
        }
    } else if (userGuess < secretNumber < computerGuess) {
        if (secretNumber - userGuess === computerGuess - secretNumber) {
            return true;
        } else if (secretNumber - userGuess < computerGuess - secretNumber) {
            return true;
        } else {
            return false;
        }
    } else if (userGuess < secretNumber && computerGuess < secretNumber) {
        if (userGuess > computerGuess) {    
            return true;
        } else {
            return false;
        }
    } else if (userGuess === secretNumber) {
        return true;
    } else if (computerGuess === secretNumber) {
        return false;
    } 
}
// updates score of one player based on how is the winner 
const updateScore = (announceWinner) => {
    if (announceWinner === 'human') {
        humanScore += 1; 
    } else {
        computerScore += 1;
    }
}

// update the round number after each round
const advanceRound = () => currentRoundNumber += 1;