var alphaGenerator = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guessesProvided = [];
var computerGuess = alphaGenerator[Math.floor(Math.random() * alphaGenerator.length)];

document.onkeyup = function (event) {

  // Determines which key was pressed.
  var userGuess = event.key;
  // .push event will add the user's guest to the guessesProvided variable
  guessesProvided.push(userGuess);
  // Randomly chooses a choice from the options array. This is the Computer's guess.
  var computerGuess = alphaGenerator[Math.floor(Math.random() * alphaGenerator.length)];

  // Run if statement if userGuess equals the computer's guess. If userGuess equals computerGuess, reset the game
  if (userGuess === computerGuess) {
    wins++;
    uessesLeft = 10;
    guessesProvided = [];
    console.log(computerGuess);
    console.log(userGuess);
  }

  // Run if statement if userGuess does not equal computerGuess.  Take one away from computerGuess. 
  if (userGuess !== computerGuess) {
    guessesRemaining--;

  }
  // Run if statement if guess count falls to 0.  Add a loss to the loss variable and reset the game. 
  if (guessesRemaining == 0) {
    losses++;
    guessesRemaining = 10;
    guessesProvided = [];
  }
  

  //Run variable to insert text into HTML document on user key press. 
  var htmlText =
    '<p><h1>The Psychic Game</h1></p>' +
    '<img src="assets/images/tmg-article_default_mobile.jpg" alt="Crystal Ball">'+
    '<hr class="my-4"></hr>'+
    '<p><b>Pick a letter.  If your choice matches that of the Psychic, you win!</b></p>' +
    '<hr class="my-4"></hr>'+
    '<p>Wins: ' + wins + '</p>' +
    '<p>Losses: ' + losses + '</p>' +
    '<p>Guesses Left: ' + guessesRemaining + '</p>' +
    '<p>Your Guesses: ' + guessesProvided + '</p>';

  document.getElementById("game").innerHTML = htmlText;

};

