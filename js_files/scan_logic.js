const videoElement = document.getElementById('videoElement');
const startScanButton = document.getElementById('startScan');

startScanButton.addEventListener('click', function() {
    // Prompt user to get userMedia (camera)
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
        .then(function (stream) {
            videoElement.srcObject = stream;
        })
        .catch(function (error) {
            console.log("Something went wrong with the camera stream!");
        });
    }
});