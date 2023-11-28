// Check if the browser supports the Web Speech API
if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser does not support the Web Speech API. Please use Google Chrome or another supported browser.");
  } else {
    // Create a new instance of SpeechRecognition
    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';
  
    var isListening = false; // Variable to track if the recognition is active
  
    // Function to toggle microphone icon
    function toggleMicIcon() {
      var micButton = document.getElementById('micButton');
      if (isListening) {
        micButton.src = '../images/mic2.png'; // Change to listening image
      } else {
        micButton.src = '../images/mic.png'; // Change back to default image
      }
    }
  
    // When the recognition starts
    recognition.onstart = function() {
      console.log("Voice recognition started. Speak now.");
      isListening = true;
      toggleMicIcon();
    };
  
    // When the recognition gets a result
    recognition.onresult = function(event) {
      var transcript = event.results[0][0].transcript;
      console.log("You said: " + transcript);
    };
  
    // When the recognition ends
    recognition.onend = function() {
      console.log("Voice recognition ended.");
      isListening = false;
      toggleMicIcon();
    };
  
    // Handle any errors
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

// Function to update the prompt based on the current step
function updatePrompt() {
    var prompts = ["Please say the book title", "Now say the author's name", "Next, say the genre of the book", "Finally, say the number of pages"];
    document.getElementById('promptDisplay').innerText = prompts[currentStep];
  }

// Function to display results
function displayResults() {
  var results = `Title: "${bookDetails.title}", Author: "${bookDetails.author}", Genre: "${bookDetails.genre}", Pages: "${bookDetails.pages}"`;
  document.getElementById('resultsDisplay').innerText = results;
}

// Function to handle recognition result
function handleRecognitionResult(transcript) {
  switch(currentStep) {
    case 0:
      bookDetails.title = transcript;
      break;
    case 1:
      bookDetails.author = transcript;
      break;
    case 2:
      bookDetails.genre = transcript;
      break;
    case 3:
      bookDetails.pages = transcript;
      break;
  }
  currentStep++;
  if (currentStep < 4) {
    updatePrompt();
    recognition.start(); // Automatically start the next step
  } else {
    displayResults();
  }
}

// Modify the existing recognition.onresult function
recognition.onresult = function(event) {
  var transcript = event.results[0][0].transcript;
  console.log("You said: " + transcript);
  handleRecognitionResult(transcript);
};

  
// Modify the existing event listener for the microphone icon
document.getElementById('micButton').addEventListener('click', function() {
    if (!isListening) {
      updatePrompt();
      recognition.start();
    }
  });
  }
  