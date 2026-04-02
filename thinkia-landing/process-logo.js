const Jimp = require('jimp');

async function process() {
    try {
        const image = await Jimp.read('C:/Users/elcas/.gemini/antigravity/brain/40289099-545e-449a-a071-2b99df432668/uploaded_media_1770267173931.png');

        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            // Detect White/Light Background -> Transparent
            if (r > 220 && g > 220 && b > 220) {
                this.bitmap.data[idx + 3] = 0;
            }
            // Detect Orange (Keep Original)
            // Orange is red-heavy
            else if (r > 150 && g < 160 && b < 100) {
                // Keep original
            }
            // Detect Black/Dark -> Make White
            else if (r < 150 && g < 150 && b < 150) {
                this.bitmap.data[idx + 0] = 255;
                this.bitmap.data[idx + 1] = 255;
                this.bitmap.data[idx + 2] = 255;
                this.bitmap.data[idx + 3] = 255;
            }
        });

        await image.writeAsync('C:/Users/elcas/Landing Thinkia/thinkia-landing/public/logo-thinkia.png');
        console.log('Logo processed successfully');
    } catch (error) {
        console.error('Error processing logo:', error);
        process.exit(1);
    }
}

process();
