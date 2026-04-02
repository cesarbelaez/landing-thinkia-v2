const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function generateMonsterFavicon() {
    try {
        console.log("Starting MONSTER Favicon Generation (Pixel-Level Precision)...");

        // 1. Load Source
        const logoPath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const logo = await Jimp.read(logoPath);

        // 2. Initial crop to remove text (bottom 45% approximately)
        const initialH = Math.floor(logo.bitmap.height * 0.55);
        logo.crop({ x: 0, y: 0, w: logo.bitmap.width, h: initialH });

        // 3. Find EXACT pixel bounds of the brain
        let minX = logo.bitmap.width, maxX = 0, minY = logo.bitmap.height, maxY = 0;
        let foundAny = false;

        logo.scan(0, 0, logo.bitmap.width, logo.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            const a = this.bitmap.data[idx + 3];

            // If it's not transparent AND not the full background (assuming background is black or white)
            // The original logo has white lines on transparent/black. 
            // We want the lines.
            if (a > 20 && (r > 50 || g > 50 || b > 50)) {
                if (x < minX) minX = x;
                if (x > maxX) maxX = x;
                if (y < minY) minY = y;
                if (y > maxY) maxY = y;
                foundAny = true;

                // While we are here, let's make it BLACK if it was WHITE
                if (r > 200 && g > 200 && b > 200) {
                    this.bitmap.data[idx + 0] = 0;
                    this.bitmap.data[idx + 1] = 0;
                    this.bitmap.data[idx + 2] = 0;
                }
            }
        });

        if (!foundAny) {
            console.error("Could not find any brain pixels!");
            return;
        }

        // 4. Crop to the EXACT rectangle
        const cropW = maxX - minX + 1;
        const cropH = maxY - minY + 1;
        console.log(`Exact Brain Bounds: ${cropW}x${cropH} at (${minX}, ${minY})`);
        logo.crop({ x: minX, y: minY, w: cropW, h: cropH });

        // 5. Create Master Square (512x512)
        const targetSize = 512;
        const bg = new Jimp({ width: targetSize, height: targetSize, color: 0x00000000 });

        // 6. Scale brain to touch EDGES
        // Calculate aspect ratio to fit without distortion
        const aspect = cropW / cropH;
        let finalW, finalH;

        if (aspect > 1) {
            // Horizontal brain: width = 100%
            finalW = targetSize;
            finalH = Math.floor(targetSize / aspect);
        } else {
            // Vertical brain: height = 100%
            finalH = targetSize;
            finalW = Math.floor(targetSize * aspect);
        }

        logo.resize({ w: finalW, h: finalH });

        // 7. Composite centered
        const xOff = Math.floor((targetSize - finalW) / 2);
        const yOff = Math.floor((targetSize - finalH) / 2);
        bg.composite(logo, xOff, yOff);

        // 8. Output
        const publicDir = path.join(__dirname, 'public');
        const sizes = [16, 32, 48, 64, 128, 256];

        for (const s of sizes) {
            const clone = bg.clone().resize({ w: s, h: s });
            await clone.write(path.join(publicDir, `favicon-${s}x${s}.png`));
        }

        await bg.clone().resize({ w: 180, h: 180 }).write(path.join(publicDir, 'apple-touch-icon.png'));
        await bg.clone().resize({ w: 192, h: 192 }).write(path.join(publicDir, 'android-chrome-192x192.png'));
        await bg.clone().resize({ w: 192, h: 192 }).write(path.join(publicDir, 'favicon.png'));

        fs.copyFileSync(path.join(publicDir, 'favicon-32x32.png'), path.join(publicDir, 'favicon.ico'));

        console.log("MONSTER FAVICON CREATED SUCCESSFULLY.");

    } catch (e) {
        console.error(e);
    }
}

generateMonsterFavicon();
