const words = [ "spoon",
                "fork",
                "knife",
                "plate",
                "bowl",
                "pan",
                "kettle",
                "oven",
                "blender",
                "microwave",];

const maxAttempts = 5;

let secretWord;
let attemptsLeft;

const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const restartBtn = document.getElementById("restartBtn");
const message = document.getElementById("message");
const attemptsDisplay = document.getElementById("attempts");
const hint = document.getElementById("hint");

function startGame() {
    secretWord = words[Math.floor(Math.random() * words.length)];

    attemptsLeft = maxAttempts;

    message.textContent = "";
    attemptsDisplay.textContent = "Attempts left: " + attemptsLeft;
    hint.textContent = "Hint: Kitchen Things, Word starts with '" + secretWord[0].toUpperCase() + "'";
    guessInput.value = "";

    document.body.classList.remove("win", "lose");
    document.body.style.backgroundColor = "#bde980";

    console.log("Secret word:", secretWord);
}

function checkGuess() {

    for (let i = 0; i < 1; i++) {

        let userGuess = guessInput.value.trim().toLowerCase();

        if (attemptsLeft <= 0) {
            return;
        }

        if (userGuess === secretWord) {
    message.textContent = "Congratulations! You guessed the secret word!";
    document.body.classList.remove("lose");
    document.body.classList.add("win");
    attemptsLeft = 0;
} 
else {
    attemptsLeft--;

    if (attemptsLeft > 0) {
        message.textContent =
            "Incorrect guess. You have " + attemptsLeft + " attempts left. Try again!";
    } 
    else {
        message.textContent =
            "Game over! The secret word was '" + secretWord + "'.";
        document.body.classList.remove("win");
        document.body.classList.add("lose");
    }
}


        attemptsDisplay.textContent = "Attempts left: " + attemptsLeft;
    }

    guessInput.value = "";
}


submitBtn.addEventListener("click", checkGuess);

guessInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

restartBtn.addEventListener("click", startGame);

startGame();


