const videoElement = document.getElementById('videoElement');
const setupCameraButton = document.getElementById('setupCamera');
const startScanButton = document.getElementById('startScan');
const scanningMessage = document.getElementById('scanningMessage');

// Setup camera button event listener
setupCameraButton.addEventListener('click', function() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            videoElement.srcObject = stream;
            setupCameraButton.style.display = 'none'; // Hide setup button
            startScanButton.style.display = 'block'; // Show start scan button
        })
        .catch(function (error) {
            console.log("Something went wrong with the camera stream!");
        });
    }
});

// Start scanning button event listener
startScanButton.addEventListener('click', function() {
    startScanningAnimation(); // Start scanning animation
    startScanButton.style.display = 'none'; // Hide the button
});

function startScanningAnimation() {
    let count = 0;
    let message = "Scanning Book";
    scanningMessage.innerText = message;
    scanningMessage.style.display = 'block'; // Show scanning message

    const interval = setInterval(() => {
        count++;
        scanningMessage.innerText = message + '.'.repeat(count % 4);
        if (count >= 5) {
            clearInterval(interval);
            scanningMessage.innerText = ""; // Clear message after 5 seconds
            setTimeout(() => {
                window.location.href = '../html_files/shelf.html'; // Redirect after scanning
            }, 1000); // Wait a second before redirecting
        }
    }, 1000);
}
