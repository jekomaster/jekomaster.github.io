export function removeWhiteBackground() {
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

    // Call the function to resize the canvas
    resizeCanvasAfterModification();
}

function resizeCanvasAfterModification() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    // Define padding value
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

