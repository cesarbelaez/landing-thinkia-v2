const { Jimp } = require('jimp');
const path = require('path');

async function processLogo() {
    try {
        const imagePath = path.join(__dirname, 'public', 'logo-thinkia.png');
        console.log(`Reading: ${imagePath}`);

        const image = await Jimp.read(imagePath);

        // Assuming the logo is roughly [Symbol] [Thinkia]
        // I want just the symbol. Assuming it's square-ish on the left.
        // Let's take height as square size.
        const size = image.bitmap.height;

        console.log(`Original size: ${image.bitmap.width}x${image.bitmap.height}`);
        console.log(`Cropping to ${size}x${size}`);

        image.crop({ x: 0, y: 0, w: size, h: size });

        const outputPath = path.join(__dirname, 'public', 'favicon.png');
        await image.write(outputPath);

        console.log(`Favicon generated at: ${outputPath}`);

    } catch (error) {
        console.error("Error processing image:", error);
    }
}

processLogo();
