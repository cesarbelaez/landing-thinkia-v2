const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function generateMaxBrainFavicons() {
    try {
        console.log("Starting ULTRA MAX Brain Favicon Generation...");

        // 1. Load Source
        const logoPath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const logo = await Jimp.read(logoPath);

        // 2. Isolate Symbol (Top half)
        logo.crop({ x: 0, y: 0, w: logo.bitmap.width, h: Math.floor(logo.bitmap.height * 0.6) });

        // 3. Color Swap: White/Bright -> Black (#1A1D23)
        logo.scan(0, 0, logo.bitmap.width, logo.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            const a = this.bitmap.data[idx + 3];

            // Target white/light grey pixels
            if (r > 180 && g > 180 && b > 180 && a > 30) {
                this.bitmap.data[idx + 0] = 26;
                this.bitmap.data[idx + 1] = 29;
                this.bitmap.data[idx + 2] = 35;
                // Ensure opacity for visibility
                if (a < 200) this.bitmap.data[idx + 3] = 255;
            }
        });

        // 4. Ultra-tight Autocrop
        logo.autocrop({ tolerance: 0.05, leaveBorder: 0 });

        console.log(`Symbol bounds: ${logo.bitmap.width}x${logo.bitmap.height}`);

        // 5. Create Master Canvas (512x512)
        const size = 512;
        const bg = new Jimp({ width: size, height: size, color: 0x00000000 });

        // 6. Scale to FULL size (100% touch)
        // If we want it "large like other icons", it MUST touch at least one pair of edges.
        logo.contain({ w: size, h: size });

        bg.composite(logo, 0, 0);

        // 7. Output Sizes
        const publicDir = path.join(__dirname, 'public');
        const sizes = [16, 32, 48, 64, 128, 256];

        for (const s of sizes) {
            const clone = bg.clone();
            clone.resize({ w: s, h: s });
            const outFile = path.join(publicDir, `favicon-${s}x${s}.png`);
            await clone.write(outFile);
        }

        // Standard files
        await bg.clone().resize({ w: 180, h: 180 }).write(path.join(publicDir, 'apple-touch-icon.png'));
        await bg.clone().resize({ w: 192, h: 192 }).write(path.join(publicDir, 'android-chrome-192x192.png'));
        await bg.clone().resize({ w: 192, h: 192 }).write(path.join(publicDir, 'favicon.png'));

        fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));

        console.log("ULTRA MAX Brain Favicon Generated.");

    } catch (error) {
        console.error("Error:", error);
    }
}

generateMaxBrainFavicons();
