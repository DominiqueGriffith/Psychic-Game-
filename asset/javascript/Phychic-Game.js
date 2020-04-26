var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var lettersGuesses= [];
var guessesLeft = 6;


// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
// console.log(computerGuess)

// variables for user and computer text
// var winsText = document.getElementById("Wins-Text")
// var lossesText = document.getElementById("Losses-Text")
// var guessesLeftText = document.getElementById("Guesses-Left-Text")

// // winsText.textContent = "Wins " + wins;
// // lossesText.textContent = "Losses " + losses;
// // guessesLeftText.textContent = "Guesses Left " + guessesLeft;



// This function is run whenever the user presses a key.
document.onkeyup = function (event) {
    // Determines which key was pressed.
    var userGuess = event.key.toLowerCase();

   console.log(userGuess)

    function reset() {
        guessesLeft = 6;
        guessesSoFarText = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
    }


    // if ((userGuess = letters)) {
    if (userGuess === computerGuess) {
        wins++;
        alert("You've guessed right. It was letter " + userGuess)
        reset();

    }

    else {
        guessesLeft--;
        lettersGuesses.push(userGuess);
    }
    if (guessesLeft === 0) {
        losses++;
        alert("Damn, you lost");
        reset();
    }
    var html = "<h1>The Psychic Game</h1>"+
    "<p>Guess what letter I'm thinking of</p>" +
        "<p>Wins: " + wins + "</p>" +
    "<p>Losses: " + losses + "</p>" +
    "<p>Guesses Left: " + guessesLeft + "</p>" +
    "<p>Guesses So-Far: " + lettersGuesses + "</p>"+
    "<img src=https://images.law.com/contrib/content/uploads/sites/405/2019/10/crystal-ball-Article-201911261828.jpg>";


    document.querySelector("#game").innerHTML = html;
    console.log(html);






    // }

};




