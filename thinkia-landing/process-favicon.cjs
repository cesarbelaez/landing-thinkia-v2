const Jimp = require('jimp');
const path = require('path');

async function processLogo() {
    try {
        const imagePath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const image = await Jimp.read(imagePath);

        console.log(`Original Image URL: ${imagePath}`);
        console.log(`Original Width: ${image.bitmap.width}`);
        console.log(`Original Height: ${image.bitmap.height}`);

        // Assuming the logo symbol is on the left.
        // I will try to crop a square from the left side.
        // Let's assume the height determines the square size.

        const size = image.bitmap.height;
        // In many logos, the symbol is square-ish and on the left.

        // I'll clone it and crop
        const favicon = image.clone().crop(0, 0, size, size);

        const outputPath = path.join(__dirname, 'public', 'favicon.png');
        await favicon.writeAsync(outputPath);

        console.log(`Favicon generated at: ${outputPath}`);

    } catch (error) {
        console.error("Error processing image:", error);
    }
}

processLogo();
