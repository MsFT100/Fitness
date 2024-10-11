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



  //handling navbar autohide
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
  }

});





