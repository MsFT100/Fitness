document.addEventListener('scroll', function() {
    const section = document.getElementById('section-2');
    const video = document.querySelector('.video');
    const text = document.querySelector('.about-content');
    
    // Get the amount of scrolling
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;
    
    // Calculate how far we are from the top of the section
    const distanceFromTop = section.getBoundingClientRect().top;
    
    if (distanceFromTop < 0) {
        // Calculate how much to scale the video based on scroll position
        const scrollFactor = Math.min(Math.abs(distanceFromTop) / windowHeight, 1);
        
        // Scale the video and hide text based on scrollFactor
        video.style.transform = `scale(${1 + scrollFactor})`; // 1 is original size, add scrollFactor to scale
        text.style.opacity = `${1 - scrollFactor}`; // Fade out text
        
        // Add a class when the video is fully stretched
        if (scrollFactor >= 1) {
            video.classList.add('fullscreen');
        } else {
            video.classList.remove('fullscreen');
        }
    }
});
