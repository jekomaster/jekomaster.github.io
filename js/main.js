import { applyBouncingEffect } from './bouncing.js';
import { explode } from './particles.js';
import { preventLogoSelectionAndDragging } from './logo.js';
//import { removeWhiteBackground } from './background.js';

document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");
});

window.addEventListener("load", function() {
    const logo = document.getElementById('logo');

    // Apply bouncing effect
    applyBouncingEffect(logo);

    // Add explosion effect on logo click
    logo.addEventListener('click', function(event) {
        const rect = logo.getBoundingClientRect();
        const x = rect.left + window.scrollX + rect.width / 2;
        const y = rect.top + window.scrollY + rect.height / 2;
        explode(x, y);
    });

    // Automatically remove white background and resize canvas
    //removeWhiteBackground();

    // Prevent text selection and dragging on the logo
    preventLogoSelectionAndDragging();
});
window.addEventListener("load", () => {
  const img = document.getElementById("sourceImage");
  const canvas = document.getElementById("canvas");
  
  // Wait for the image to load to get accurate dimensions
  img.onload = function() {
    // Set canvas dimensions based on the image
    canvas.width = img.clientWidth;
    canvas.height = img.clientHeight;
  };
});

// Select elements
const markdownInput = document.getElementById("markdown");
const outputDiv = document.getElementById("output");

// Function to render Markdown as HTML
function renderMarkdown() {
  const markdownText = markdownInput.value;
  const html = marked(markdownText); // Convert Markdown to HTML
  outputDiv.innerHTML = html;
}

// Event listener for real-time conversion
markdownInput.addEventListener("input", renderMarkdown);

