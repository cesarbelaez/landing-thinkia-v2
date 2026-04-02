const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function generateBlackBrainFavicons() {
    try {
        console.log("Starting Black Brain Favicon Generation...");

        // 1. Load Source (The white one)
        const logoPath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const logo = await Jimp.read(logoPath);

        // 2. Isolate Symbol
        // Crop top area to remove "Thinkia" text
        logo.crop({ x: 0, y: 0, w: logo.bitmap.width, h: 520 });
        logo.autocrop();

        // 3. Color Swap: White -> Black
        // We iterate through pixels. If it's roughly white, make it black. 
        // We preserve the orange parts.
        logo.scan(0, 0, logo.bitmap.width, logo.bitmap.height, function (x, y, idx) {
            const r = this.bitmap.data[idx + 0];
            const g = this.bitmap.data[idx + 1];
            const b = this.bitmap.data[idx + 2];
            const a = this.bitmap.data[idx + 3];

            // If it's definitely white or very bright grey
            if (r > 200 && g > 200 && b > 200 && a > 50) {
                this.bitmap.data[idx + 0] = 26; // #1A1D23 (matching text color)
                this.bitmap.data[idx + 1] = 29;
                this.bitmap.data[idx + 2] = 35;
            }
        });

        // 4. Create Master Canvas (1024x1024) - TRANSPARENT
        const size = 1024;
        const bg = new Jimp({ width: size, height: size, color: 0x00000000 });

        // 5. Composite Symbol - MAXIMIZED
        // User said "make it bigger", so we use 100% fill (touching edges).
        const fillFactor = 1.0;
        const targetIconSize = size;

        logo.contain({ w: targetIconSize, h: targetIconSize });

        const centerOffset = (size - targetIconSize) / 2;
        bg.composite(logo, centerOffset, centerOffset);

        // 6. Output Sizes
        const publicDir = path.join(__dirname, 'public');
        const sizes = [16, 32, 48, 64, 128, 256];

        for (const s of sizes) {
            const clone = bg.clone();
            clone.resize({ w: s, h: s });
            const outFile = path.join(publicDir, `favicon-${s}x${s}.png`);
            await clone.write(outFile);
            console.log(`Generated: ${outFile}`);
        }

        // Apple Touch Icon
        const appleIcon = bg.clone().resize({ w: 180, h: 180 });
        await appleIcon.write(path.join(publicDir, 'apple-touch-icon.png'));

        // Android / Main
        const androidIcon = bg.clone().resize({ w: 192, h: 192 });
        await androidIcon.write(path.join(publicDir, 'android-chrome-192x192.png'));
        await androidIcon.write(path.join(publicDir, 'favicon.png'));

        // ICO copy
        const fav32 = path.join(publicDir, 'favicon-32x32.png');
        try {
            fs.copyFileSync(fav32, path.join(publicDir, 'favicon.ico'));
        } catch (e) { }

        console.log("Black Brain Favicon Pack Generated Successfuly.");

    } catch (error) {
        console.error("Error:", error);
    }
}

generateBlackBrainFavicons();
