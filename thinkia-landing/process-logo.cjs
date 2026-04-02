const jimpLib = require('jimp');

async function runProcessing() {
    try {
        const Jimp = jimpLib.Jimp || jimpLib;

        console.log('Reading image...');
        const image = await Jimp.read('C:/Users/elcas/.gemini/antigravity/brain/40289099-545e-449a-a071-2b99df432668/uploaded_media_1770267173931.png');

        console.log('Processing pixels...');
        image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];

            if (r > 200 && g > 200 && b > 200) {
                this.bitmap.data[idx + 3] = 0;
            }
            else if (r > 150 && g < 180 && b < 150) {
                // Keep orange
            }
            else if (r < 180 && g < 180 && b < 180) {
                this.bitmap.data[idx + 0] = 255;
                this.bitmap.data[idx + 1] = 255;
                this.bitmap.data[idx + 2] = 255;
                this.bitmap.data[idx + 3] = 255;
            }
        });

        console.log('Writing image...');
        // Use callback style write for compatibility
        image.write('C:/Users/elcas/Landing Thinkia/thinkia-landing/public/logo-thinkia.png', (err) => {
            if (err) {
                console.error('Error writing image:', err);
                process.exit(1);
            } else {
                console.log('Logo processed successfully');
            }
        });

    } catch (error) {
        console.error('Error processing logo:', error);
        process.exit(1);
    }
}

runProcessing();
