const { handlePrompt, gpt4 } = require('./aihandler.js');

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const validUsername = 'CNSS';
  const validPassword = 'Class10Batch2080';

  if (username === validUsername && password === validPassword) {
    document.getElementById('message').textContent = 'Login successful!';
    window.location.href = 'page2.html';
  } else {
    document.getElementById('message').textContent = 'Invalid username or password. Please try again.';
  }
});

const video = document.getElementById('videoBG');

const inputText = document.getElementById('username');
const previewText = document.getElementById('message');

inputText.addEventListener('input', function() {
  previewText.textContent = inputText.value;
});

document.querySelectorAll('header nav a').forEach(function(link) {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    // Do something when the link is clicked
  });
});

document.getElementById('getAIResponseButton').addEventListener('click', async function() {
  const inputText = document.querySelector('.search-box').value;
  const aiResponseElement = document.getElementById('aiResponse');

  if (!inputText) {
    aiResponseElement.innerText = 'Please enter some text.';
    return;
  }

  const aiResponse = await handlePrompt(inputText);

  aiResponseElement.innerText = `AI Response: ${aiResponse}`;
});
document.getElementById("myElement").addEventListener("touchstart", function() {
  this.style.backgroundColor = "red";
});