// A simple example of JavaScript
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});
// Wait until the page is fully loaded
window.onload = function() {
    const logo = document.getElementById('logo'); // The logo image

    // Add a click event listener to the logo image
    logo.addEventListener('click', function() {
        // Toggle the 'bounce' class to start/stop the animation
        logo.classList.toggle('bounce');
    });
// Wait until the page is fully loaded
//window.onload = function() {
  //  const logo = document.getElementById('logo'); // The logo image

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
                top: y + (Math.random() - 0.5) * 200 + 'px',  // Random spread vertically
                scale: 0,      // Shrink particle
                opacity: 0,    // Fade particle out
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

