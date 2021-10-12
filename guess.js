// Guess That Number
// Message to be used throughout the file/project
const enterNumText = `Please enter a number greater than zero`;

// For restarting the game
let restartGame = true;

// For storing the range of the number to be guessed/random number that will be created
let rangeNum;

// For storing the number to be guessed
let randomNum;

// For storing the number of attempts that the user has left
let attempts;

// For storing the user's guess
let guess;

// For storing user's response to play again or not play again
let playAgain;

// Starting alert message
alert(`Welcome to "GUESS THAT NUMBER!" Please click "OK" to start the game.`)

// Game restarts as long as restartGame has value of true
while(restartGame){
// Asks user to enter a number to set the upper boundary for the random number (AKA the number to be guessed) to be created. 
// 
rangeNum = prompt(`Please enter a maximum number for the range:`);

// Using parseInt to attempt to convert the user's response into a number value (NOTE: The value returned from a prompt will always be a string value. Also, if the value cannot be converted, then the value returned will be NaN).
rangeNum = parseInt(rangeNum);

// Verifies the user's entry for the range number is indeed a number greater than zero (NOTE: NaN has default boolean value of false. Also, all numbers positive and negative, have a default boolean value of true EXCEPT for zero, which has a default boolean value of false.)
while (!rangeNum || rangeNum < 1) {
    rangeNum = prompt (enterNumText);
    rangeNum = parseInt(rangeNum);
    // rangeNum = parseInt(prompt(enterNumText));
}
// Creates the random number (number to be guessed) using the range number entered by the user. 
//Math.random() is any number from 0 to 1 (decimals too)
randomNum = Math.floor(Math.random()* rangeNum) + 1;

    break;
}