// A simple example of JavaScript
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});

// Target only the logo element  // Get the logo container
const logoContainer = document.querySelector('.logo-hit-area');

// Prevent text selection and dragging only on the logo area
// 
//logo.addEventListener('mousedown', function(event) {
//    event.preventDefault(); // Prevent text selection and dragging on the logo
//});

// Wait until the page is fully loaded
window.onload = function() {
    const logo = document.getElementById('logo'); // The logo image
    let isBouncing = false; // Flag to track if the bounce is active

 // Add event listeners to track when the bounce animation starts and ends
    logo.addEventListener('animationstart', function() {
        isBouncing = true; // Animation started
    });

    logo.addEventListener('animationend', function() {
        isBouncing = false; // Animation ended
    });

    // Add a click event listener to the logo image
    logo.addEventListener('click', function() {
// Only toggle bounce if it's not already bouncing
        if (!isBouncing) {
        logo.classList.toggle('bounce');
        }
    });

  // Wait until the page is fully loaded

    // Function to create a particle explosion
    function explode(x, y) {
        const colors = ['#0ff', '#39ff14', '#ff00ff', '#ff4500']; // Neon blue, neon green, and others
      
        for (let i = 0; i < 20; i++) {
            // Create particle element
            let particle = document.createElement('div');
            particle.classList.add('particle');
            document.body.appendChild(particle);

            // Set initial particle position using `left` and `top`
            gsap.set(particle, {
                position: 'absolute',
                left: x + 'px',
                top: y + 'px'
            });

            // Animate particle explosion
            gsap.to(particle, {
                left: x + (Math.random() - 0.5) * 200 + 'px', // Random spread horizontally
                top: y + (Math.random() - 0.5) * 300 + 'px',  // Random spread vertically
                scale: 0,      // Shrink particle
                opacity: 1,    // Fade particle out
                duration: 1,   // Animation duration
                ease: 'power3.out',  // Easing for natural explosion effect
                onComplete: () => particle.remove() // Remove particle after animation
            });
        }
    }

    // Add click event listener to the logo
    logo.addEventListener('click', function(event) {
        const rect = logo.getBoundingClientRect();

        // Calculate the center of the logo relative to the entire page
        const x = rect.left + window.scrollX + rect.width / 2; // Add scroll position
        const y = rect.top + window.scrollY + rect.height / 2; // Add scroll position

        explode(x, y); // Trigger the explosion at the correct position
    });
};

