

const redButton = document.getElementById('red');
const greenButton = document.getElementById('green');
const blueButton = document.getElementById('blue');
const randomButton = document.getElementById('random');
const resetButton = document.getElementById('reset');
const body = document.body;

redButton.addEventListener('click', function() {
  console.log('Red button clicked!');
  body.style.backgroundColor = 'red'
});

greenButton.addEventListener('click', function() {
  console.log('Green button clicked!');
  body.style.backgroundColor = 'green'
});

blueButton.addEventListener('click', function() {
  console.log('Blue button clicked!');
  body.style.backgroundColor = 'blue'
});
randomButton.addEventListener('click', function() {
  console.log('Random button clicked!');
  const randomColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
  body.style.backgroundColor = randomColor;
});
resetButton.addEventListener('click', function() {
  console.log('Reset button clicked!');
  body.style.backgroundColor = 'white'
});