

// create Array of words

// set variables for:
    // wrong guesses []
    // correct guesses []
    // max wrong guesses
    // current array index
    // wins
    // losses

// Array of possible words
var wordArray = [
    "coldplay",
    "weezer",
    "queen",
    "prince",
    "nirvana",
    "feeder",
    "gorillaz",
    "jamiroquai",
    "muse",
    "outkast",
    "pixies"
]

// Setting variables
var wrongGuesses = [];
var answerArray = [];
var maxWrongGuesses = 10;
var randomIndex;
var wordIndex;
var wins = 0;
var losses = 0;
var userGuess = [];


// function on reset:
    // random array index chosen
    // wins & losses set to 0
    // empty wrongGuesses & correctGuesses arrays

document.addEventListener("DOMContentLoaded", function(event) { 
        
    randomIndex = Math.floor(Math.random() * wordArray.length);
    wordIndex = wordArray[randomIndex];
    console.log(wordIndex);

    // wins and losses

    // --------------- document.getElementById("#winSpan").textContent = wins;

    // Use random word length to determine number of underscores.

    for (var i = 0; i < wordIndex.length; i++) {
        answerArray[i] = "_";
    };
    
    var stringArray = answerArray.join(" ");

    document.getElementById("activeWord").innerHTML = stringArray;

    });

// function to make sure key presses are letters

document.onkeydown = function(event) {



    if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toLocaleLowerCase())
    };

};


// function for making the guess


// function making sure the chosen letter hasn't been used already

function makeGuess(letter) {

    if (userGuess.indexOf(letter) === -1) {
        //var userGuess = event.key;
        console.log(letter);
        //userGuess.push(letter);
        //evaluateGuess(letter);
    };
};




