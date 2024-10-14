document.addEventListener('DOMContentLoaded', function() {
    document.addEventListener('scroll', function () {
        const aboutContent = document.querySelector('.about-content');
        const videoContainer = document.querySelector('.intro-video-display');
        const video = document.querySelector('.intro-video-display video');
        
        // Get the scroll position
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Check if the user has scrolled enough to trigger the video scale effect
        if (scrollTop > 100) {
            console.log("Teboo");
            aboutContent.classList.add('hidden');  // Hide the text
            videoContainer.classList.add('scaled-video');  // Scale the video
        } else {
            console.log("Yeboo");
            aboutContent.classList.remove('hidden');  // Show the text again
            videoContainer.classList.remove('scaled-video');  // Reset video scaling
        }
    });
});

function CloseVideo() {
    const video = document.querySelector('.bottom-left-video');
    if (video) {
        video.style.display = 'none';  // Hide the video
    }
    console.log("Video closed");
}

function scrollToNextSection() {
    // Scroll to the next section (section-2)
    const nextSection = document.getElementById('section-2');
    nextSection.scrollIntoView({ behavior: 'smooth' });
}
