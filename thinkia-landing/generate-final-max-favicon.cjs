const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function generateFinalMaxFavicon() {
    try {
        console.log("Starting FINAL AGGRESSIVE Favicon Generation...");

        // 1. Load Source
        const logoPath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const logo = await Jimp.read(logoPath);

        // 2. Initial Crop to Symbol Area (roughly top 60%)
        logo.crop({ x: 0, y: 0, w: logo.bitmap.width, h: Math.floor(logo.bitmap.height * 0.58) });

        // 3. Color Swap: White -> Black
        // Also ensure any non-transparent/non-orange pixel is black
        logo.scan(0, 0, logo.bitmap.width, logo.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            const a = this.bitmap.data[idx + 3];

            // If it's orange (dot), keep it. 
            // Orange is roughly r:245, g:118, b:36
            if (r > 200 && g > 80 && g < 150 && b < 100) {
                // Keep orange
            } else if (a > 20) {
                // Not orange, but not fully transparent -> Make it black/dark
                this.bitmap.data[idx + 0] = 10;
                this.bitmap.data[idx + 1] = 12;
                this.bitmap.data[idx + 2] = 16;
                this.bitmap.data[idx + 3] = 255; // Ensure full opacity for weight
            }
        });

        // 4. Ultra Aggressive Autocrop
        // Increased tolerance to 0.15 to strip any semi-transparent edge artifacts
        logo.autocrop({ tolerance: 0.15, leaveBorder: 0 });

        console.log(`Cropped Brain Size: ${logo.bitmap.width}x${logo.bitmap.height}`);

        // 5. Create Target Square (512x512)
        const size = 512;
        const bg = new Jimp({ width: size, height: size, color: 0x00000000 });

        // 6. Force Scale to 100% of the AVAILABLE dimension
        // If it's wider than it is tall, its width will be 512.
        logo.resize({ w: size, h: Jimp.AUTO });

        // If it was already very wide, it might now be taller than 512? Unlikely.
        // But if it is, we scale to height instead.
        if (logo.bitmap.height > size) {
            logo.resize({ w: Jimp.AUTO, h: size });
        }

        // 7. Composite exactly centered
        const xPos = Math.floor((size - logo.bitmap.width) / 2);
        const yPos = Math.floor((size - logo.bitmap.height) / 2);

        bg.composite(logo, xPos, yPos);

        // EXTRA: If it's still too "short", we can allow a tiny bit of overflow on the width 
        // to gain more height. Let's stick to 100% for now.

        // 8. Write Files
        const publicDir = path.join(__dirname, 'public');
        const outSizes = [16, 32, 48, 64, 128, 256];

        for (const s of outSizes) {
            const clone = bg.clone();
            clone.resize({ w: s, h: s });
            await clone.write(path.join(publicDir, `favicon-${s}x${s}.png`));
        }

        await bg.clone().resize({ w: 180, h: 180 }).write(path.join(publicDir, 'apple-touch-icon.png'));
        await bg.clone().resize({ w: 192, h: 192 }).write(path.join(publicDir, 'android-chrome-192x192.png'));
        await bg.clone().resize({ w: 192, h: 192 }).write(path.join(publicDir, 'favicon.png'));

        fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));

        console.log("FINAL MAX FAVICON GENERATED.");

    } catch (error) {
        console.error("Error:", error);
    }
}

generateFinalMaxFavicon();
