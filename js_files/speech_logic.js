if (!('webkitSpeechRecognition' in window)) {
    alert("Your browser does not support the Web Speech API. Please use Google Chrome or another supported browser.");
} else {

    var recognition = new webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = 'en-US';

    var isListening = false;

    function toggleMicIcon() {
        var micButton = document.getElementById('micButton');
        if (isListening) {
            micButton.src = '../images/mic2.png';
        } else {
            micButton.src = '../images/mic.png';
        }
    }

    recognition.onstart = function () {
        console.log("Voice recognition started. Speak now.");
        isListening = true;
        toggleMicIcon();
    };

    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        console.log("You said: " + transcript);
    };

    recognition.onend = function () {
        console.log("Voice recognition ended.");
        isListening = false;
        toggleMicIcon();
    };

    recognition.onerror = function (event) {
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
        var results = `Title: "${bookDetails.title}", Author: "${bookDetails.author}", Genre: "${bookDetails.genre}", Pages: "${bookDetails.pages}"`;
        document.getElementById('resultsDisplay').innerText = results;
    }

    function handleRecognitionResult(transcript) {
        switch (currentStep) {
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
            recognition.start();
        } else {
            displayResults();
        }
    }

    recognition.onresult = function (event) {
        var transcript = event.results[0][0].transcript;
        console.log("You said: " + transcript);
        handleRecognitionResult(transcript);
    };

    document.getElementById('micButton').addEventListener('click', function () {
        if (!isListening) {
            updatePrompt();
            recognition.start();
        }
    });
}
