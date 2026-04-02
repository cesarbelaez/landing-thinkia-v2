const { Jimp } = require('jimp');
const path = require('path');

async function refineFavicon() {
    try {
        const imagePath = path.join(__dirname, 'public', 'logo-thinkia.png');
        console.log(`Reading: ${imagePath}`);

        const image = await Jimp.read(imagePath);

        // Original: 1024 x 833
        // Previous crop: 600x600 top-center (still had dots)
        // Let's try 550x550 to cut higher and avoid text ascenders.

        const width = image.bitmap.width;
        const cropSize = 550;
        const x = (width - cropSize) / 2;
        const y = 0;

        console.log(`Cropping to: ${cropSize}x${cropSize} starting at x=${x}, y=${y}`);

        image.crop({ x: x, y: y, w: cropSize, h: cropSize });

        // Resize to 192x192 for standard high-res icon usage.
        // Use standard resizing (Jimp default is usually decent, or we can check methods).
        // In Jimp 1.x, resize methods are usually passed as strings or constants.
        // Let's just use .resize(192, 192) which defaults to Bilinear.

        console.log("Resizing to 192x192 (Bilinear/Bicubic)");
        image.resize({ w: 192, h: 192 });

        const outputPath = path.join(__dirname, 'public', 'favicon.png');
        await image.write(outputPath);

        console.log(`Refined favicon saved to: ${outputPath}`);

    } catch (error) {
        console.error("Error refining favicon:", error);
    }
}

refineFavicon();
