document.addEventListener('DOMContentLoaded', function() {
  // Your code here
  const menuBtn = document.querySelector('.menuBtn');
  const closeBtn = document.querySelector('.nav-menu-closeBtn');
  
  if (menuBtn) {
      menuBtn.addEventListener('click', function() {
          // Toggle nav-menu visibility
          const navMenu = document.querySelector('.nav-menu');
          navMenu.classList.toggle('active');
          
          // Toggle floating video visibility
          const floatingVideo = document.querySelector('.bottom-left-video');
          floatingVideo.classList.toggle('deactivate');
      });
  } else {
    console.log("Error: menuBtn not found.");
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      // Toggle back the nav-menu visibility when close button is clicked
      const navMenu = document.querySelector('.nav-menu');
      navMenu.classList.remove('active'); // Removes the active class
    });
  } else {
    console.log("Error: closeBtn not found.");
  }
});
