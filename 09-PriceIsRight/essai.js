//assume player didnt guess correctly
let correctGuess = false;

//set up the range of number
let minScore = 20;
let maxScore = 80;
//generate random number from 20-80
let randomNumber = Math.floor(Math.random() * 80) + 20;
let guess = prompt('I am thinking of a number between 20 and 80. What is it?');

//test to see if player is correct
//if player is out of range tell him to focus
if (parseInt(guess) < minScore || parseInt(guess) > maxScore) {
  let outOfRange = prompt('you\'re off topic mate, FOCUS!')
  //if player guess is higher than the random number the player gets a hint and another try
} else if (parseInt(guess) === randomNumber) {
  correctGuess = true;
} else if (parseInt(guess) < randomNumber) {
  let guessMore = prompt('Hahaha ! Try again sweety it\'s higher than ' + guess);
  if (parseInt(guessMore) === randomNumber) {
    correctGuess = true;
  }
} else if (parseInt(guess) > randomNumber) {
  let guessLess = prompt('Wow mate, The right number is lower than ' + guess);
  if (parseInt(guessLess) === randomNumber) {
    correctGuess = true;
  }
}
//finally the outcome !

if (correctGuess) {
  document.write('<p>Yaaaayyyy! ' + randomNumber + 'was the right number buddy !  </p>');
} else {

}/*else {
  document.write('<p>Sorry. The number was ' + randomNumber + ' you stupid face.</p>');
}*/
