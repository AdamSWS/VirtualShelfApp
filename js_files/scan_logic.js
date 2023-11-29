const videoElement = document.getElementById('videoElement');
const startScanButton = document.getElementById('startScan');
const scanningMessage = document.getElementById('scanningMessage');

startScanButton.addEventListener('click', function() {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            videoElement.srcObject = stream;
            startScanningAnimation(); // Start scanning animation
            startScanButton.style.display = 'none'; // Hide the button
        })
        .catch(function (error) {
            console.log("Something went wrong with the camera stream!");
        });
    }
});

function startScanningAnimation() {
    let count = 0;
    let message = "Scanning Book";
    const scanningMessageElement = document.getElementById('scanningMessage');
    const startScanButtonElement = document.getElementById('startScan');

    scanningMessageElement.innerText = message;
    scanningMessageElement.style.display = 'block'; // Show scanning message
    startScanButtonElement.style.display = 'none'; // Hide start button

    const interval = setInterval(() => {
        count++;
        scanningMessageElement.innerText = message + '.'.repeat(count % 4);
        if (count >= 5) {
            clearInterval(interval);
            scanningMessageElement.innerText = ""; // Clear message after 5 seconds
            setTimeout(() => {
                window.location.href = '../html_files/shelf.html'; // Redirect after scanning
            }, 1000); // Wait a second before redirecting
        }
    }, 1000);
}