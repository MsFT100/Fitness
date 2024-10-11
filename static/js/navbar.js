document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menuBtn');
  const closeBtn = document.querySelector('.nav-menu-closeBtn');
  const navMenu = document.querySelector('.nav-menu');
  const navMenuUl = document.querySelector('.nav-menu-holder');

  if (menuBtn) {
    menuBtn.addEventListener('click', function() {
      if (!navMenu.classList.contains('active')) {
        // Show nav-menu with smooth height animation
        navMenu.style.height = "600px"; // Set height to match content
        navMenu.classList.add('active');
        
        // Once the transition is done, set the height to 'auto' to allow for content resizing if needed
        setTimeout(function() {
          navMenu.style.height = 'max-content';
        }, 1000); // Match this time with the CSS transition time
      }
    });
  } else {
    console.log("Error: menuBtn not found.");
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', function() {
      // Hide the nav-menu with smooth height animation
      navMenu.style.height = navMenuUl.scrollHeight + 'px'; // Temporarily set to full height to trigger the closing animation
      setTimeout(function() {
        navMenu.style.height = '0'; // Then transition to 0 height
      }, 10); // Delay slightly to ensure the height gets reset before the transition
      
      navMenu.classList.remove('active');
    });
  } else {
    console.log("Error: closeBtn not found.");
  }

  // After transition is complete, reset the height for smooth animations in the future
  navMenu.addEventListener('transitionend', function() {
    if (!navMenu.classList.contains('active')) {
      navMenu.style.height = '0'; // Reset height when not active
    }
  });


  // Handling navbar auto-hide
  let prevScrollpos = window.scrollY; // Use window.scrollY instead of window.pageYOffset

  window.onscroll = function() {

    console.log("Scrolling up, showing navbar");
      let currentScrollPos = window.scrollY; // Use window.scrollY here as well
      if (prevScrollpos > currentScrollPos) {
          // Scrolling up, show the navbar
          console.log("Scrolling up, showing navbar");
          document.getElementById("navbar").style.top = "0";
      } else {
          // Scrolling down, hide the navbar
          console.log("Scrolling down, hiding navbar");
          document.getElementById("navbar").style.top = "-50px";  // Adjust based on navbar height
      }
      prevScrollpos = currentScrollPos;
  };


});





