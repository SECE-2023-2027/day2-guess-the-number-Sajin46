'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Utility to update result message
const showMessage = (msg) => {
  document.querySelector('.result').textContent = msg;
};

// Check button event
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.input').value);

  if (!guess) {
    showMessage('⚠️ Enter a number!');
  } else if (guess === secretNumber) {
    showMessage('🎉 Correct!');
    document.querySelector('.box').textContent = secretNumber;
    document.querySelector('.box').style.backgroundColor = '#8bc34a';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } else {
    if (score > 1) {
      showMessage(guess > secretNumber ? '📉 Too high!' : '📈 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      showMessage('💥 Game over!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Reset button
document.querySelector('.reset').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;

  showMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.box').textContent = '?';
  document.querySelector('.box').style.backgroundColor = '#ddd';
  document.querySelector('.input').value = '';
});
