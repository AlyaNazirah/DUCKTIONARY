// Vocabulary data with image URLs (replace with actual URLs)
const vocabulary = {
  jobs: [
    { word: 'Actor - A person who become someone else in a show or movie', image: 'https://i.imgur.com/sQKVTHq.png' },
    { word: 'Astronaut - A person who goes to space', image: 'https://i.imgur.com/TvC8CCB.png' },
    { word: 'Baker - A person who makes bread and cakes', image: 'https://i.imgur.com/8SOo0IB.png' },
    { word: 'Businessman - A person who works to make money', image: 'https://i.imgur.com/ZtkL9KS.png' },
    { word: 'Police - A person who caught bad people', image: 'https://i.imgur.com/h0yKaDJ.png' },
    { word: 'Photographer - A person who takes pictures', image: 'https://i.imgur.com/lNknE5U.png' },
    { word: 'Designer - A person who plan to make something', image: 'https://i.imgur.com/I9POjqX.png' },
    { word: 'Engineer - A person who makes or builds machines and buildings', image: 'https://i.imgur.com/7mbApiL.png' },
    { word: 'Firefighter - A person who stops fires', image: 'https://i.imgur.com/Qa9dOe0.png' },
    { word: 'Singer - A person who sings songs', image: 'https://i.imgur.com/a4lhBW8.png' }
  ],
  places: [
    { word: 'Airport - A place for airplanes', image: 'https://i.imgur.com/KeLUp0n.png' },
    { word: 'Bank - A place where people put money', image: 'https://i.imgur.com/T5lLzAn.png' },
    { word: 'College - A school for older kids', image: 'https://i.imgur.com/FjPleqB.png' },
    { word: 'Stadium - A big place to play football', image: 'https://i.imgur.com/wlTjKXN.png' },
    { word: 'Fire station - A place where firefighters work', image: 'https://i.imgur.com/vnYunFt.png' }
  ],
  transport: [
    { word: 'Car - A small vehicle for people to drive', image: 'https://i.imgur.com/BqzOfbo.png' },
    { word: 'Train - A long vehicle that moves on tracks', image: 'https://i.imgur.com/WrfWdhS.png' },
    { word: 'Motorcycle - A fast vehicle with two wheels', image: 'https://i.imgur.com/SKurxgb.png' },
    { word: 'Ambulance - A vehicle that takes hurt people to the hospital', image: 'https://i.imgur.com/CZT55Ir.png' },
    { word: 'Bicycle - A two-wheeled vehicle with pedal', image: 'https://i.imgur.com/oMgnw5r.png' }
  ],
  nature: [
    { word: 'Earth - The planet we live on', image: 'https://i.imgur.com/GrXfIAN.png' },
    { word: 'Land - The ground where we walk', image: 'https://i.imgur.com/l1l77Im.png' },
    { word: 'Air - What we breathe', image: 'https://i.imgur.com/PyKKezq.png' },
    { word: 'Wood - The hard part of a tree', image: 'https://i.imgur.com/BXuELqO.png' },
    { word: 'Water - What we drink', image: 'https://i.imgur.com/Jt0UYFV.png' }
  ],
  health: [
    { word: 'Medicine - Something we take to feel better when sick', image: 'https://i.imgur.com/knHSpI3.png' },
    { word: 'Exercise - Activity to stay healthy', image: 'https://i.imgur.com/nLHLbFu.png' },
    { word: 'Disease - Something that makes people sick', image: 'https://i.imgur.com/grvFwVh.png' }
  ],
  entertainment: [
    { word: 'Band - A group of people who play music', image: 'https://i.imgur.com/HSsHKhP.png' },
    { word: 'Concert - A show with music', image: 'https://i.imgur.com/GuyYc2p.png' },
    { word: 'Festival - A big celebration with music and fun', image: 'https://i.imgur.com/bw5hGKI.png' },
    { word: 'Movie - A story that people watch on a big screen', image: 'https://i.imgur.com/ap2Ecxi.png' }
  ],
  education: [
    { word: 'History - Learning about things that happened in past', image: 'https://i.imgur.com/8PwrJJ3.png' },
    { word: 'Language - Words we use to talk', image: 'https://i.imgur.com/0eEVq6g.png' },
    { word: 'Geography - Learning about places', image: 'https://i.imgur.com/UYPwofC.png' },
    { word: 'Science - Learning about how things work', image: 'https://i.imgur.com/gLpk9wc.png' },
    { word: 'Mathematics - Learning about numbers and counting', image: 'https://i.imgur.com/Vl4j3AZ.png' }
  ],
  actions: [
    { word: 'Act - To pretend to be someone else', image: 'https://i.imgur.com/tYsard4.png' },
    { word: 'Bake - To cook food in an oven', image: 'https://i.imgur.com/nGQKLta.png' },
    { word: 'Borrow - To take something and give it back later', image: 'https://i.imgur.com/JkcLjtR.png' },
    { word: 'Explore - To go look at new places', image: 'https://i.imgur.com/PoTHqSP.png' },
    { word: 'Follow - To go behind someone', image: 'https://i.imgur.com/YwLTgsI.png' },
    { word: 'Prepare - To get things ready', image: 'https://i.imgur.com/b9JFcLA.png' },
    { word: 'Search - To look for something', image: 'https://i.imgur.com/YmqXJ0o.png' }
  ],
  expressions: [
    { word: 'Amazing - Very, very good', image: 'https://i.imgur.com/0QdA8HK.png' },
    { word: 'Excellent - Very good', image: 'https://i.imgur.com/9cRaqMq.png' },
    { word: 'Hard - Not easy to do', image: 'https://i.imgur.com/7OebhIn.png' },
    { word: 'Worried - Scared or nervous', image: 'https://i.imgur.com/pEW1mIY.png' }
  ],
  time: [
    { word: 'Dawn - When the sun comes up in the morning', image: 'https://i.imgur.com/gq7M3rN.png' },
    { word: 'Future - Things that will happen later', image: 'https://i.imgur.com/awsgmqJ.png' },
    { word: 'Past - Things that already happened', image: 'https://i.imgur.com/vkN7Kzv.png' },
    { word: 'Tomorrow - The day after today', image: 'https://i.imgur.com/Uif0uSz.png' },
    { word: 'Tonight - The time after the sun goes down', image: 'https://i.imgur.com/w903JOd.png' }
  ]
};

// Function to show flashcards
function showFlashcards(category) {
  const flashcardsContainer = document.getElementById('flashcards');
  flashcardsContainer.innerHTML = ''; // Clear previous flashcards
  const words = vocabulary[category];

  words.forEach(item => {
    const flashcard = document.createElement('div');
    flashcard.classList.add('flashcard');

    const flashcardInner = document.createElement('div');
    flashcardInner.classList.add('flashcard-inner');

    const flashcardFront = document.createElement('div');
    flashcardFront.classList.add('flashcard-front');
    flashcardFront.innerText = item.word;

    const flashcardBack = document.createElement('div');
    flashcardBack.classList.add('flashcard-back');

    const img = document.createElement('img');
    img.src = item.image;

    flashcardBack.appendChild(img);

    flashcardInner.appendChild(flashcardFront);
    flashcardInner.appendChild(flashcardBack);
    flashcard.appendChild(flashcardInner);

    // Flip effect and play pronunciation
    flashcard.addEventListener('click', function () {
      this.classList.toggle('flipped');
      if (this.classList.contains('flipped')) {
        playPronunciation(item.word);
      }
    });

    flashcardsContainer.appendChild(flashcard);
  });
}

// Function to play the pronunciation using Google Text-to-Speech
function playPronunciation(text) {
  // Get only the first part of the text (the word)
  const firstWord = text.split(' - ')[0]; // This splits by ' - ' and takes the first part
  const utterance = new SpeechSynthesisUtterance(firstWord);
  window.speechSynthesis.speak(utterance);
}

// Event listener for category buttons
document.querySelectorAll('.category-button').forEach(button => {
  button.addEventListener('click', function () {
    const category = this.dataset.category;
    showFlashcards(category);
  });
});
