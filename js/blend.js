
export function applyBlendModeToContext(ctx, mode = 'hue') {
    if (ctx) {
        // Set the global composite operation (blend mode) of the canvas context
        ctx.globalCompositeOperation = mode;

        console.log(`Blend mode '${mode}' applied to canvas context.`);
    } else {
        console.error('Canvas context not found to apply blend mode');
    }
}

//Complete List of Blend Mode Options:
//normal
//multiply
//screen
//overlay
//darken
//lighten
//color-dodge
//color-burn
//hard-light
//soft-light
//difference
//exclusion
//hue
//saturation
//color
//luminosity
