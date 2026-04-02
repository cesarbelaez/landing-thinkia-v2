const { Jimp } = require('jimp');
const path = require('path');

async function fixFavicon() {
    try {
        const imagePath = path.join(__dirname, 'public', 'logo-thinkia.png');
        console.log(`Reading: ${imagePath}`);

        const image = await Jimp.read(imagePath);

        // Dimensions: 1024 x 833
        // Likely layout: Symbol on top, "Thinkia" text on bottom.
        // I need to crop the top part.

        const width = image.bitmap.width;   // 1024
        const height = image.bitmap.height; // 833

        // Let's create a square focusing on the top-center.
        // I'll take a 600x600 square.
        // This cuts off the bottom 233 pixels (approx 30% of height), which should remove the text.
        // It also cuts off 212 pixels from each side, centering horizontally.

        const cropSize = 600;
        const x = (width - cropSize) / 2; // Center horizontally
        const y = 0; // Top aligned (or maybe slight offset? stick to 0 to be safe on top)

        console.log(`Original: ${width}x${height}`);
        console.log(`Cropping to: ${cropSize}x${cropSize} starting at x=${x}, y=${y}`);

        image.crop({ x: x, y: y, w: cropSize, h: cropSize });

        // resizing to standard favicon size might be good too, but usually not strictly required.
        // Let's verify output path.
        const outputPath = path.join(__dirname, 'public', 'favicon.png');

        await image.write(outputPath);
        console.log(`Fixed favicon saved to: ${outputPath}`);

    } catch (error) {
        console.error("Error fixing favicon:", error);
        process.exit(1);
    }
}

fixFavicon();
