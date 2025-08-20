// Function to change background color when a button is clicked
function changeBackgroundColor() {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
}

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  document.body.style.backgroundColor = ''
}

// Function to display the key pressed by the user
function displayKeyPress(event) {
  document.getElementById('keyPressDisplay').textContent = 'Key pressed: ' + event.key
}

// Function to display user input in real-time
function displayUserInput() {
  const value = document.getElementById('textInput').value
  document.getElementById('textInputDisplay').textContent = 'You typed: ' + value
}

// Attach Event Listeners
function setupEventListeners() {
  document.getElementById('changeColorButton').addEventListener('click', changeBackgroundColor)
  document.getElementById('resetColorButton').addEventListener('dblclick', resetBackgroundColor)
  document.addEventListener('keydown', displayKeyPress)
  document.getElementById('textInput').addEventListener('input', displayUserInput)
}

// Initialize event listeners when the DOM is loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', setupEventListeners)
}

module.exports = {
  changeBackgroundColor,
  resetBackgroundColor,
  displayKeyPress,
  displayUserInput,
  setupEventListeners,
}