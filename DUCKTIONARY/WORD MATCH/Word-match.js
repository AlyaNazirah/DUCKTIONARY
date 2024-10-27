const words = {
  easy: [
    { word: 'Baker', definition: 'A person who makes bread and cakes' },
    { word: 'Singer', definition: 'A person who sings songs' },
    { word: 'Car', definition: 'A small vehicle for people to drive' },
    { word: 'Airport', definition: 'A place for airplanes' },
    { word: 'Bicycle', definition: 'A two-wheeled vehicle with pedal' }
  ],
  intermediate: [
    { word: 'Photographer', definition: 'A person who takes pictures' },
    { word: 'Movie', definition: 'A story that people watch on a big screen' },
    { word: 'Exercise', definition: 'Activity to stay healthy' },
    { word: 'Concert', definition: 'A show with music' },
    { word: 'Earth', definition: 'The planet we live on' }
  ],
  hard: [
    { word: 'Astronaut', definition: 'A person who is trained to travel in space' },
    { word: 'Geography', definition: 'Learning about places' },
    { word: 'History', definition: 'Learning about things that happened in the past' },
    { word: 'Engineer', definition: 'A person who makes or builds machines and buildings' },
    { word: 'Explore', definition: 'To go look at new places' }
  ]
};

let selectedWords = [];
let score = 0;
let lives = 3;
let selectedWord = null;
let previousSelectedWordBox = null; 
let previousSelectedDefinitionBox = null; 

function startGame(level) {
  document.getElementById('level-selection').classList.add('hidden');
  document.getElementById('game-page').classList.remove('hidden');
  
  selectedWords = words[level];
  score = 0;
  lives = 3;

  document.getElementById('life-count').textContent = lives;
  document.getElementById('score-count').textContent = score;

  loadWordsAndDefinitions();
}

function loadWordsAndDefinitions() {
  const wordList = document.getElementById('word-list');
  const definitionList = document.getElementById('definition-list');
  wordList.innerHTML = '';
  definitionList.innerHTML = '';
  
  // Shuffle words and definitions
  const shuffledWords = [...selectedWords].sort(() => Math.random() - 0.5);
  const shuffledDefinitions = [...selectedWords].sort(() => Math.random() - 0.5);

  // Create word boxes
  shuffledWords.forEach(item => {
    const wordBox = document.createElement('div');
    wordBox.classList.add('word-box');
    wordBox.textContent = item.word;
    wordBox.onclick = () => selectWord(item.word, wordBox);
    wordList.appendChild(wordBox);
  });

  // Create definition boxes
  shuffledDefinitions.forEach(item => {
    const definitionBox = document.createElement('div');
    definitionBox.classList.add('definition-box');
    definitionBox.textContent = item.definition;
    definitionBox.onclick = () => selectDefinition(item.definition, definitionBox);
    definitionList.appendChild(definitionBox);
  });
}

function selectWord(word, wordBox) {
  selectedWord = word;
  displayFeedback('Word selected: ' + word);

  if (previousSelectedWordBox) {
    previousSelectedWordBox.classList.remove('selected');
  }
  wordBox.classList.add('selected');
  previousSelectedWordBox = wordBox;
}

function selectDefinition(definition, definitionBox) {
  if (!selectedWord) {
    displayFeedback('Please select a word first.');
    return;
  }

  if (previousSelectedDefinitionBox) {
    previousSelectedDefinitionBox.classList.remove('selected');
  }
  definitionBox.classList.add('selected');
  previousSelectedDefinitionBox = definitionBox;

  const match = selectedWords.find(item => item.word === selectedWord && item.definition === definition);
  
  if (match) {
    correctAnswer();
  } else {
    wrongAnswer();
  }

  selectedWord = null;
}

function correctAnswer() {
  score += 5;
  document.getElementById('score-count').textContent = score;
  displayFeedback('Correct!', 'correct');

  if (score === selectedWords.length * 5) {
    endGame();
  }
}

function wrongAnswer() {
  lives--;
  document.getElementById('life-count').textContent = lives;
  displayFeedback('Wrong!', 'wrong');

  if (lives === 0) {
    endGame();
  }
}

function displayFeedback(message, type) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;

  if (type === 'correct') {
    feedback.style.color = 'green';
  } else if (type === 'wrong') {
    feedback.style.color = 'red';
  } else {
    feedback.style.color = 'black'; 
  }
}

function endGame() {
  document.getElementById('game-page').classList.add('hidden');
  document.getElementById('game-over').classList.remove('hidden');
  document.getElementById('final-score').textContent = `Your final score is: ${score}`;
}

function backToMenu() {
  document.getElementById('game-over').classList.add('hidden');
  document.getElementById('level-selection').classList.remove('hidden');
}

// New function to go back to homepage
function backToHomepage() {
  window.location.href = "https://codepen.io/nazirah/full/rNXpGxW"; // Redirect to homepage
}
