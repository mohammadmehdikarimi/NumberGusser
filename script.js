let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// generate target number at the start of each new round
const generateTarget = () => {
    return Math.floor(Math.random() * 10);
}

