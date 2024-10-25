// A simple example of JavaScript
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});

// Target the logo element and container
const logoContainer = document.querySelector('.logo-hit-area');

// Prevent text selection and dragging on the logo area (commented out as it might be unnecessary)
// logo.addEventListener('mousedown', function(event) {
//     event.preventDefault(); // Prevent text selection and dragging on the logo
// });

// Combine both functionalities in a single `window.onload`
window.addEventListener("load", function() {
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

    // Add click event listener to the logo for the explosion effect
    logo.addEventListener('click', function(event) {
        const rect = logo.getBoundingClientRect();

        // Calculate the center of the logo relative to the entire page
        const x = rect.left + window.scrollX + rect.width / 2; // Add scroll position
        const y = rect.top + window.scrollY + rect.height / 2; // Add scroll position

        explode(x, y); // Trigger the explosion at the correct position
    });

    // Automatically remove white background when the page loads
    removeWhiteBackground();
});

function removeWhiteBackground() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var img = document.getElementById('sourceImage');

    // Set canvas size to match image size
    canvas.width = img.width;
    canvas.height = img.height;

    // Draw image onto the canvas
    ctx.drawImage(img, 0, 0);

    // Get the image data (pixel array)
    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;

    // Loop through each pixel and make white pixels transparent
    for (var i = 0; i < data.length; i += 4) {
        // Get the RGB values
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];

        // If the pixel is "white" (you can adjust the tolerance)
        if (r > 240 && g > 240 && b > 240) {
            // Set alpha to 0 (transparent)
            data[i + 3] = 0;
        }
    }

    // Put the modified image data back to the canvas
    ctx.putImageData(imgData, 0, 0);
    // Resize canvas and image to fit the desired dimensions (e.g., 500x500)
    resizeCanvasAfterModification();
}
function resizeCanvasAfterModification() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

   // Define the padding value
    var padding = 20;

    // Store the current canvas content as an image
    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');
    
    // Copy the current canvas content into the temp canvas
    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempCtx.drawImage(canvas, 0, 0);

// Resize the canvas to the desired size + padding (e.g., 400x400 + padding)
    canvas.width = 400 + padding * -8; // Add padding to both sides
    canvas.height = 400 + padding * -8; // Add padding to top and bottom

    // Draw the temp canvas content (with background removed) onto the resized canvas
    ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
}



window.addEventListener("load", function() {
    const logoContainer = document.getElementById('logo-container');
    const logo = document.getElementById('logo');

    // Prevent text selection and dragging on the container and the logo
    logoContainer.addEventListener('mousedown', function(event) {
        event.preventDefault(); // Prevent text selection in the container
    });

    logo.addEventListener('mousedown', function(event) {
        event.preventDefault(); // Prevent text selection on the logo
    });

    logo.addEventListener('dragstart', function(event) {
        event.preventDefault(); // Prevent dragging of the logo
    });

    // Ensure the logo is non-draggable
    logo.setAttribute('draggable', false);
});

