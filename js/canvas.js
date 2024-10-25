
export function removeWhiteBackground() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var img = document.getElementById('sourceImage');

    canvas.width = img.width;
    canvas.height = img.height;

    ctx.drawImage(img, 0, 0);

    var imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var data = imgData.data;

    for (var i = 0; i < data.length; i += 4) {
        var r = data[i];
        var g = data[i + 1];
        var b = data[i + 2];

        if (r > 240 && g > 240 && b > 240) {
            data[i + 3] = 0;
        }
    }

    ctx.putImageData(imgData, 0, 0);
    resizeCanvasAfterModification();
}

function resizeCanvasAfterModification() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var padding = 20;

    var tempCanvas = document.createElement('canvas');
    var tempCtx = tempCanvas.getContext('2d');

    tempCanvas.width = canvas.width;
    tempCanvas.height = canvas.height;
    tempCtx.drawImage(canvas, 0, 0);

    canvas.width = 400 + padding * -8;
    canvas.height = 400 + padding * -8;

    ctx.drawImage(tempCanvas, 0, 0, canvas.width, canvas.height);
}

