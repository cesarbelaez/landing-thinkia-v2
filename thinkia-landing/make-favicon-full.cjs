const { Jimp } = require('jimp');
const path = require('path');

async function makeFaviconFullSize() {
    try {
        const imagePath = path.join(__dirname, 'public', 'logo-thinkia.png');
        console.log(`Reading: ${imagePath}`);

        const image = await Jimp.read(imagePath);

        // 1. Initial crop to remove the "Thinkia" text at the bottom.
        //    Logo is 1024x833. Text is at bottom.
        //    Taking top 550px is safe based on previous iterations.

        const textCutoffHeight = 550;
        console.log(`Cropping text... keeping top ${textCutoffHeight}px`);
        image.crop({ x: 0, y: 0, w: image.bitmap.width, h: textCutoffHeight });

        // 2. Autocrop: Remove all transparent whitespace around the symbol.
        //    This isolates the "Brain/Cloud" symbol perfectly.
        console.log("Autocropping whitespace...");
        image.autocrop();

        const w = image.bitmap.width;
        const h = image.bitmap.height;
        console.log(`Symbol dimensions: ${w}x${h}`);

        // 3. Create a square canvas to hold the symbol.
        //    Size should be the maximum dimension of the symbol to fit it 100%.
        const squareSize = Math.max(w, h);

        console.log(`Creating canvas of size: ${squareSize}x${squareSize}`);
        const canvas = new Jimp({ width: squareSize, height: squareSize, color: 0x00000000 }); // Transparent

        // 4. Center the symbol on the canvas.
        const xOffset = (squareSize - w) / 2;
        const yOffset = (squareSize - h) / 2;

        console.log(`Compositing symbol at ${xOffset},${yOffset}`);
        canvas.composite(image, xOffset, yOffset);

        // 5. Resize to standard favicon size (192x192)
        console.log("Resizing to 192x192...");
        canvas.resize({ w: 192, h: 192 });

        const outputPath = path.join(__dirname, 'public', 'favicon.png');
        await canvas.write(outputPath);

        console.log(`Full-size favicon saved to: ${outputPath}`);

    } catch (error) {
        console.error("Error creating full-size favicon:", error);
    }
}

makeFaviconFullSize();
