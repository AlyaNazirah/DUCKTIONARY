const sentences = {
    easy: [
        "The ____ performed beautifully in the new movie.",
        "My friend wants to be a ____ and create delicious pastries.",
        "A successful ____ is often very busy with meetings and deals.",
        "A ____ sings songs that inspire and entertain people.",
        "The ____ is busy with planes taking off and landing."
    ],
    intermediate: [
        "An ____ travels to space to explore the universe.",
        "The ____ help keep our community safe and enforce the law.",
        "A professional ____ captures important moments in photos.",
        "A fashion ____ designs clothes and accessories.",
        "The ____ is where firefighters respond to emergencies."
    ],
    hard: [
        "The ____ builds bridges and buildings to make our lives easier.",
        "A ____ is a vehicle that can be driven on roads.",
        "Regular ____ is beneficial for your health.",
        "The ____ holds many possibilities for new adventures.",
        "I love to ____ cookies for my friends."
    ]
};

const answers = {
    easy: ["Actor", "Baker", "Businessman", "Singer", "Airport"],
    intermediate: ["Astronaut", "Police", "Photographer", "Designer", "Fire Station"],
    hard: ["Engineer", "Car", "Exercise", "Future", "Bake"]
};

let currentSentenceIndex;
let currentLevel;
let lives;
let score;

function startGame(level) {
    currentLevel = level;
    lives = 3;
    score = 0;
    document.querySelector(".difficulty-buttons").classList.add("hidden");
    document.getElementById("game").classList.remove("hidden");
    generateGame();
}

function generateGame() {
    currentSentenceIndex = 0;
    loadSentence();
}

function loadSentence() {
    if (currentSentenceIndex < sentences[currentLevel].length) {
        const sentence = sentences[currentLevel][currentSentenceIndex];
        const blankWord = "____";

        const optionsHTML = answers[currentLevel]
            .map(answer => `<div class="option" draggable="true" ondragstart="drag(event)">${answer}</div>`)
            .sort(() => Math.random() - 0.5)
            .join('');

        document.getElementById("options").innerHTML = optionsHTML;
        document.getElementById("sentence-container").innerHTML = sentence.replace(blankWord, `<span class="blank" id="blank-${currentSentenceIndex}">${blankWord}</span>`);
        document.getElementById("feedback").classList.add("hidden");
        document.getElementById("next-button").classList.add("hidden");
    } else {
        endGame();
    }
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.innerText);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");
    const correctAnswer = answers[currentLevel][currentSentenceIndex];

    if (data === correctAnswer) {
        score += 5;
        document.getElementById(`blank-${currentSentenceIndex}`).innerText = data;
        document.getElementById("feedback").innerText = "Correct!";
    } else {
        lives--;
        document.getElementById("feedback").innerText = `Wrong! Lives left: ${lives}`;
        if (lives === 0) {
            endGame();
            return;
        }
    }

    document.getElementById("feedback").classList.remove("hidden");
    document.getElementById("life-count").innerText = lives;
    document.getElementById("score-count").innerText = score;

    document.querySelectorAll('.option').forEach(option => option.draggable = false);
    document.getElementById("next-button").classList.remove("hidden");
}

function nextQuestion() {
    currentSentenceIndex++;
    loadSentence();
    document.getElementById("next-button").classList.add("hidden");
}

function endGame() {
    document.getElementById("sentence-container").innerHTML = `<h2>Game Over!</h2><p>Your score: ${score}</p>`;
    document.getElementById("options").innerHTML = "";
    document.getElementById("feedback").classList.add("hidden");
    document.getElementById("back-button").classList.remove("hidden");
    document.getElementById("homepage-button").classList.remove("hidden"); // Show homepage button
}

function backToMenu() {
    document.querySelector(".difficulty-buttons").classList.remove("hidden");
    document.getElementById("game").classList.add("hidden");
}

function goToHomepage() {
    window.location.href = "https://codepen.io/nazirah/full/rNXpGxW"; // Redirect to your homepage
}