

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
    "pixies",
    "killers",
    "incubus",
    "aerosmith",
    "eagles",
    "rush",
    "kansas",
    "ramones",
    "paramore",
    "rammstein",
    "stereophonics",
]

// Setting variables
var wrongGuesses = [];
var answerArray = [];
var maxWrongGuesses = 7;
var randomIndex;
var wordIndex;
var wins = 0;
var losses = 0;
var userGuess = [];
var winsSpan;
var lossSpan;
var remainingSpan;

// Setting up page on initial load.

document.addEventListener("DOMContentLoaded", function(event) {

    
    winsSpan = document.getElementById("winSpan");
    lossSpan = document.getElementById("lossSpan");
    remainingSpan = document.getElementById("guesses-remaining");
    
    winsSpan.innerHTML = wins;
    lossSpan.innerHTML = losses;
    remainingSpan.innerHTML = maxWrongGuesses;

    gameReset();


});


// function on reset:
    // random array index chosen
    // wins & losses set to 0
    // empty wrongGuesses & correctGuesses arrays

function gameReset() { 

    answerArray = [];
    wrongGuesses = [];
    userGuess = [];

    wins = 0;
    winsSpan.innerHTML = wins;

    losses = 0;
    lossSpan.innerHTML = losses;
    
    maxWrongGuesses = 7;
    // ----- remainingSpan.innerHTML = maxWrongGuesses;
    randomIndex = Math.floor(Math.random() * wordArray.length);
    wordIndex = wordArray[randomIndex];
    console.log(wordIndex);

    // wins and losses

    // ----- document.getElementById("#winSpan").textContent = wins;

    // Use random word length to determine number of underscores.

    for (var i = 0; i < wordIndex.length; i++) {
        answerArray[i] = "_";
    };
    


    document.getElementById("activeWord").innerHTML = answerArray.join(" ");

};

// function to generate new word without losing wins/losses

function newWord() {

    answerArray = [];
    wrongGuesses = [];
    userGuess = [];

    randomIndex = Math.floor(Math.random() * wordArray.length);
    wordIndex = wordArray[randomIndex];
    console.log(wordIndex);

    for (var i = 0; i < wordIndex.length; i++) {
        answerArray[i] = "_";
    };

    document.getElementById("activeWord").innerHTML = answerArray.join(" ");


};

// function to make sure key presses are letters

document.onkeyup = function(event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {
        makeGuess(event.key.toLocaleLowerCase())
        // checkWin();
    };

};


// function for making the guess

function makeGuess(letter) {

    // function making sure the chosen letter hasn't been used already

    if (userGuess.indexOf(letter) === -1) {
        userGuess.push(letter);
        console.log(letter);
        // ----- evaluateGuess(letter);


        // Replacing underscores with correct guesses
        for (i = 0; i < wordIndex.length; i++ ) {
            if (wordIndex[i] === letter) {
                answerArray[i] = letter;
                console.log("ok");

                checkWin();

            }

        };
        
        document.getElementById("activeWord").innerHTML = answerArray.join(" ");

        console.log(answerArray);
        // Adding wrong guesses onto the screen
       
        if (answerArray.indexOf(letter) === -1) {
            wrongGuesses.push(letter);
            document.getElementById("wrong-letters").innerHTML = wrongGuesses.join(", ");
            console.log("wrong letter")

            // updating the number of guesses
            maxWrongGuesses--;
            remainingSpan.innerHTML = maxWrongGuesses;
            console.log(maxWrongGuesses);

            checkWin();
        };
            
        
        // function to check when the game ends (called after wrong and correct guesses above) then reset, adding to wins/losses

        function checkWin() {
            if (answerArray.indexOf('_') === -1) {
                wins ++;
                winsSpan.innerHTML = wins;
                

                setTimeout( function () {
                    alert("You win!");
                    newGame();
                    newWord();
                });

                return;

            } else if (maxWrongGuesses === 0) {
                alert('You Lost!');
                losses ++;
                lossSpan.innerHTML = losses;
                newGame();
                newWord();

                return;
            }
        };

        function newGame() {

            maxWrongGuesses = 7;
            remainingSpan.innerHTML = maxWrongGuesses;

            document.getElementById("activeWord").innerHTML = answerArray.join(" ");

            wrongGuesses = [];
            document.getElementById("wrong-letters").innerHTML = wrongGuesses;


        };

    
        
    };




};




