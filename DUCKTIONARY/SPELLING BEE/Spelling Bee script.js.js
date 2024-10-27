// Vocabulary lists for each difficulty level
const easyWords = [
    { word: "Bank", hint: "A place where people put money" },
    { word: "Water", hint: "What we drink" },
    { word: "Police", hint: "A person who catches bad people" },
    { word: "Baker", hint: "A person who makes bread and cakes" },
    { word: "Train", hint: "A long vehicle that moves on tracks" },
];

const intermediateWords = [
    { word: "Medicine", hint: "Something we take to feel better when sick" },
    { word: "Follow", hint: "To go behind someone" },
    { word: "Astronaut", hint: "Travels to space" },
    { word: "Festival", hint: "A big celebration with music and fun" },
    { word: "Stadium", hint: "A big place to play football" },
];

const hardWords = [
    { word: "Ambulance", hint: "Used to take people to hospitals" },
    { word: "Motorcycle", hint: "Two-wheeled motor vehicle" },
    { word: "Science", hint: "Learning about how things work" },
    { word: "Excellent", hint: "Very good" },
    { word: "Future", hint: "Things that will happen later" },
];

// Game state variables
let currentWords = [];
let currentIndex = 0;
let lives = 3;
let score = 0;
let hintsRemaining = 3;

// Level selection buttons
document.getElementById('easy').addEventListener('click', () => startGame(easyWords));
document.getElementById('intermediate').addEventListener('click', () => startGame(intermediateWords));
document.getElementById('hard').addEventListener('click', () => startGame(hardWords));

// Start game function
function startGame(words) {
    currentWords = words;
    currentIndex = 0;
    lives = 3;
    score = 0;
    hintsRemaining = 3;
    document.getElementById('game-section').classList.remove('hidden');
    document.querySelector('.level-buttons').classList.add('hidden');
    loadWord();
}

// Load the next word and reset fields
function loadWord() {
    const currentWordObj = currentWords[currentIndex];
    document.getElementById('word-title').innerText = "Spell the word:";
    document.getElementById('hint-btn').innerText = `Hint (${hintsRemaining} left)`;
    document.getElementById('answer-box').value = "";
    document.getElementById('hint-message').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');
}

// Play pronunciation
function playAudio() {
    const word = currentWords[currentIndex].word;
    const speech = new SpeechSynthesisUtterance(word);
    speech.lang = 'en-US';
    speechSynthesis.speak(speech);
}

document.getElementById('play-button').addEventListener('click', playAudio);

// Submit answer
document.getElementById('submit-btn').addEventListener('click', () => {
    const answer = document.getElementById('answer-box').value;
    const correctWord = currentWords[currentIndex].word;
    const feedbackElement = document.getElementById('feedback');

    if (answer.toLowerCase() === correctWord.toLowerCase()) {
        score += 5;
        feedbackElement.innerText = "Correct!";
        feedbackElement.className = "correct";
        document.getElementById('score-count').innerText = score;
    } else {
        lives--;
        feedbackElement.innerText = `Wrong! The correct word was ${correctWord}.`;
        feedbackElement.className = "wrong";
        document.getElementById('life-count').innerText = lives;
        if (lives <= 0) {
            endGame();
        }
    }
    feedbackElement.classList.remove('hidden');
});

// Hint functionality
document.getElementById('hint-btn').addEventListener('click', () => {
    if (hintsRemaining > 0) {
        const hint = currentWords[currentIndex].hint;
        document.getElementById('hint-message').innerText = hint;
        document.getElementById('hint-message').classList.remove('hidden');
        hintsRemaining--;
        document.getElementById('hint-btn').innerText = `Hint (${hintsRemaining} left)`;
        
        if (hintsRemaining === 0) {
            document.getElementById('hint-btn').disabled = true;
            document.getElementById('hint-btn').classList.add('disabled');
        }
    } else {
        alert("No hints remaining!");
    }
});

// End game function
function endGame() {
    document.getElementById('word-title').innerText = `Game Over! You scored ${score} points.`;
    document.getElementById('play-button').classList.add('hidden');
    document.getElementById('submit-btn').classList.add('hidden');
    document.getElementById('hint-btn').classList.add('hidden');
    document.getElementById('answer-box').classList.add('hidden');
    document.getElementById('feedback').classList.add('hidden');

    // Show "Back to Homepage" button
    const backToHomepageButton = document.getElementById('back-to-homepage');
    backToHomepageButton.classList.remove('hidden'); // Ensure it is shown

    // Set the click event listener
    backToHomepageButton.addEventListener('click', () => {
        window.location.href = 'https://codepen.io/nazirah/full/rNXpGxW'; // Redirect to homepage
    });
}

// Reset to Menu
function resetToMenu() {
    document.getElementById('game-section').classList.add('hidden');
    document.getElementById('back-to-menu').remove();

    document.querySelector('.level-buttons').classList.remove('hidden');

    document.getElementById('play-button').classList.remove('hidden');
    document.getElementById('submit-btn').classList.remove('hidden');
    document.getElementById('hint-btn').classList.remove('hidden');
    document.getElementById('answer-box').classList.remove('hidden');

    currentWords = [];
    currentIndex = 0;
    lives = 3;
    score = 0;
    hintsRemaining = 3;
    document.getElementById('hint-btn').innerText = `Hint (${hintsRemaining} left)`;
    document.getElementById('hint-btn').disabled = false;
    document.getElementById('hint-message').classList.add('hidden');
}

// Navigation buttons
document.getElementById('next-btn').addEventListener('click', () => {
    if (currentIndex < currentWords.length - 1) {
        currentIndex++;
        loadWord();
    } else {
        endGame(); // End the game if there are no more words left
    }
});