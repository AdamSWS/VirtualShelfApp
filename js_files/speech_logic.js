
// Check if the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
  alert("Your browser does not support the Web Speech API. Please use Google Chrome or another supported browser.");
} else {
  hideButtons();
  var recognition = new webkitSpeechRecognition();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  var isListening = false;

  function toggleMicIcon() {
      var micButton = document.getElementById('micButton');
      if (isListening) {
          micButton.src = '../images/mic2.png'; // Listening image
      } else {
          micButton.src = '../images/mic.png'; // Default image
      }
  }

  recognition.onstart = function() {
      console.log("Voice recognition started. Speak now.");
      isListening = true;
      toggleMicIcon();
  };

  recognition.onresult = function(event) {
      var transcript = event.results[0][0].transcript;
      console.log("You said: " + transcript);
      handleRecognitionResult(transcript);
  };

  recognition.onend = function() {
      console.log("Voice recognition ended.");
      isListening = false;
      toggleMicIcon();
  };

  recognition.onerror = function(event) {
      console.log("Error occurred in recognition: " + event.error);
      isListening = false;
      toggleMicIcon();
  };

  var currentStep = 0;
  var bookDetails = {
      title: '',
      author: '',
      genre: '',
      pages: ''
  };

  function updatePrompt() {
      var prompts = ["Please say the book title", "Now say the author's name", "Next, say the genre of the book", "Finally, say the number of pages"];
      document.getElementById('promptDisplay').innerText = prompts[currentStep];
  }

  function displayResults() {
      var currentField = ["Title", "Author", "Genre", "Pages"];
      var resultText = `${currentField[currentStep]}: "${bookDetails[currentField[currentStep].toLowerCase()]}"`;
      document.getElementById('resultsDisplay').innerText = resultText;
  }

  function handleRecognitionResult(transcript) {
      var fields = ['title', 'author', 'genre', 'pages'];
      bookDetails[fields[currentStep]] = transcript;
      displayResults();
      showButtons();
  }

  document.getElementById('micButton').addEventListener('click', function() {
      if (!isListening) {
          updatePrompt();
          recognition.start();
      }
  });

  function showButtons() {
      document.getElementById('confirmButton').style.display = 'inline-block';
      document.getElementById('retryButton').style.display = 'inline-block';
  }

  function hideButtons() {
      document.getElementById('confirmButton').style.display = 'none';
      document.getElementById('retryButton').style.display = 'none';
  }

  document.getElementById('confirmButton').addEventListener('click', function() {
      currentStep++;
      if (currentStep < 4) {
          hideButtons();
          updatePrompt();
          recognition.start();
      } else {
        window.location.href = '../html_files/shelf.html'; 
      }
  });

  document.getElementById('retryButton').addEventListener('click', function() {
      hideButtons();
      updatePrompt();
      recognition.start();
  });
}
