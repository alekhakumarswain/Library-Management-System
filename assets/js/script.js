// script.js

// Initialize WebRTC components
let localStream;
let remoteStream;
let peerConnection;

// Function to initialize the WebRTC connection
function initWebRTC() {
    // Initialize local stream
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            localStream = stream;
            document.getElementById('local-video').srcObject = stream;
        })
        .catch(error => {
            console.error('Error accessing media devices:', error);
        });
}

// Function to initiate a call
function startCall() {
    // Create peer connection
    peerConnection = new RTCPeerConnection();
    
    // Add local stream to peer connection
    localStream.getTracks().forEach(track => {
        peerConnection.addTrack(track, localStream);
    });
    
    // Event listener for receiving remote stream
    peerConnection.ontrack = event => {
        remoteStream = event.streams[0];
        document.getElementById('remote-video').srcObject = remoteStream;
    };

    // Add your signaling logic here to send a call invitation to the other user
    // Example: send a signaling message via WebSocket to the other user
}

// Event listener for the start call button
document.getElementById('start-call-btn').addEventListener('click', startCall);

// Initialize WebRTC when the script loads
initWebRTC();
