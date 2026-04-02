const { Jimp } = require('jimp');
const path = require('path');

async function makeFaviconSmart() {
    try {
        const imagePath = path.join(__dirname, 'public', 'logo-thinkia.png');
        console.log(`Reading: ${imagePath}`);

        const image = await Jimp.read(imagePath);

        const width = image.bitmap.width; // 1024
        const height = image.bitmap.height; // 833

        console.log(`Original: ${width}x${height}`);

        // Strategy:
        // 1. Cut off the bottom text.
        //    Previous attempts: 
        //    - 600px height -> had "dots" (text visible).
        //    - 550px height + 550 width -> "cut part of logo" (likely sides).
        //    
        //    Solution: strict height crop (550px) but FULL WIDTH (1024px).
        //    Then autocrop to remove extra side space.
        //    Then contain in square.

        const cropHeight = 550; // Use 550 as it seemed to clear the text well.

        console.log(`Cropping top area: 1024x${cropHeight}`);
        image.crop({ x: 0, y: 0, w: width, h: cropHeight });

        // Remove whitespace (centers the symbol)
        console.log("Autocropping...");
        image.autocrop();

        // Now we have just the symbol.
        // Fit it into a 192x192 square (standard high quality favicon)
        // contain() adds letterboxing (transparency) if needed to maintain aspect ratio.
        console.log("Containing in 192x192 square...");
        image.contain({ w: 192, h: 192 });

        const outputPath = path.join(__dirname, 'public', 'favicon.png');
        await image.write(outputPath);

        console.log(`Smart favicon saved to: ${outputPath}`);

    } catch (error) {
        console.error("Error processing smart favicon:", error);
    }
}

makeFaviconSmart();
