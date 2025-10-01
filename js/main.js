// Play YouTube video when button is clicked
document.addEventListener('DOMContentLoaded', function() {
    const playButton = document.getElementById('playButton');
    const videoContainer = document.querySelector('.video-container');
    const thumbnail = document.querySelector('.video-thumbnail');

    if (playButton) {
        playButton.addEventListener('click', function() {
            // Get thumbnail dimensions before hiding it
            const width = thumbnail.offsetWidth;
            const height = thumbnail.offsetHeight;

            // Create YouTube iframe
            const iframe = document.createElement('iframe');
            iframe.src = 'https://www.youtube.com/embed/mUGYPlAgJPw?autoplay=1&rel=0';
            iframe.width = width;
            iframe.height = height;
            iframe.style.borderRadius = '8px';
            iframe.setAttribute('frameborder', '0');
            iframe.setAttribute('allowfullscreen', '');
            iframe.allow = 'autoplay; encrypted-media';

            // Hide thumbnail and button, show video
            thumbnail.style.display = 'none';
            playButton.style.display = 'none';
            videoContainer.appendChild(iframe);
        });
    }
});