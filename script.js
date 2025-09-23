// Get all video elements
const videos = document.querySelectorAll('video');

// Function to play all videos
function playAllVideos() {
  videos.forEach(video => {
    video.play().catch(e => {
      console.warn('Autoplay blocked:', e);
    });
  });
}

// Function to pause all videos
function pauseAllVideos() {
  videos.forEach(video => video.pause());
}

// Function to set global playback speed
function setGlobalSpeed(speed) {
  videos.forEach(video => {
    video.playbackRate = speed;
  });
}

// Event listeners for central controls
document.getElementById('playAll').addEventListener('click', playAllVideos);
document.getElementById('pauseAll').addEventListener('click', pauseAllVideos);

// Event listener for global speed control slider
document.getElementById('globalSpeed').addEventListener('input', (e) => {
  const speed = parseFloat(e.target.value);
  setGlobalSpeed(speed);
});

// Optional: Ensure all videos start playing when the page loads
document.addEventListener('DOMContentLoaded', () => {
  videos.forEach(video => {
    video.play().catch(e => {
      console.warn('Autoplay blocked:', e);
    });
  });
});
