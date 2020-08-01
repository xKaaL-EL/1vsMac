/*Declaration of global variables*/
//------------------------------------------------------------------------------
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;
//------------------------------------------------------------------------------
/*This function is used to generate the new secret target number.*/
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
}
//------------------------------------------------------------------------------
/*This function is used to Determine the closeness of guessed number from
the secret number.*/
const getAbsoluteDistance = (guess, secretNumber) => {
  return Math.abs(secretNumber - guess);
}
//------------------------------------------------------------------------------
/*This function is used to determine who guesses the number close to the secret
number and returns results in boolean operator.*/
const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
  if (humanGuess >= 0 && humanGuess <= 9) {
    let humDistance = getAbsoluteDistance(humanGuess, secretTarget);
    let compDistance = getAbsoluteDistance(computerGuess, secretTarget);
    if (humDistance > compDistance) {
      return false;
    } else if (humDistance === compDistance) {
      return true;
    } else {
      return true;
    }
  } else {
    window.alert(`Your input as ${humanGuess} does'nt lies in between 0 to 9. You lost! TRY AGAIN.`)
  }
}
//------------------------------------------------------------------------------
/*This function is used for updating the score.*/
const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else {
    computerScore += 1;
  }
}
//------------------------------------------------------------------------------
/*This function is used to increase the round number.*/
const advanceRound = () => {
  currentRoundNumber += 1;
}
//------------------------------------------------------------------------------
