const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function generateTransparentFavicons() {
    try {
        console.log("Starting Transparent Favicon Generation...");

        // 1. Load Source
        const logoPath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const logo = await Jimp.read(logoPath);

        // 2. Isolate Symbol
        // Crop top area to remove "Thinkia" text (550px height safe zone)
        logo.crop({ x: 0, y: 0, w: logo.bitmap.width, h: 550 });
        logo.autocrop(); // Remove ALL whitespace to get the raw symbol bounding box

        // 3. Create Master Canvas (1024x1024) - TRANSPARENT
        const size = 1024;
        const bg = new Jimp({ width: size, height: size, color: 0x00000000 }); // Transparent

        // 4. Composite Symbol - MAXIMIZED within transparent canvas
        // User requested 85-90%. Let's go with 88% for a safe "Large" look without hitting edges.
        const fillFactor = 0.88;
        const targetIconSize = Math.floor(size * fillFactor);

        logo.contain({ w: targetIconSize, h: targetIconSize });

        const centerOffset = (size - targetIconSize) / 2;
        bg.composite(logo, centerOffset, centerOffset);

        // 5. Output Sizes
        const publicDir = path.join(__dirname, 'public');
        const sizes = [16, 32, 48, 64, 128, 256];

        for (const s of sizes) {
            const clone = bg.clone();
            clone.resize({ w: s, h: s });
            const outFile = path.join(publicDir, `favicon-${s}x${s}.png`);
            await clone.write(outFile);
            console.log(`Generated: ${outFile}`);
        }

        // Apple Touch Icon (180x180)
        // For transparent logos, iOS adds a black background by default if transparent.
        // But user asked for "Transparent" strictly. Standard practice for "web favicon" is transparent.
        // Apple icon technically is better opaque, but let's stick to the "Universal Transparent" rule requested.
        const appleIcon = bg.clone().resize({ w: 180, h: 180 });
        await appleIcon.write(path.join(publicDir, 'apple-touch-icon.png'));

        // Android / Main
        const androidIcon = bg.clone().resize({ w: 192, h: 192 });
        await androidIcon.write(path.join(publicDir, 'android-chrome-192x192.png'));
        await androidIcon.write(path.join(publicDir, 'favicon.png'));

        // ICO
        const fav32 = path.join(publicDir, 'favicon-32x32.png');
        try {
            fs.copyFileSync(fav32, path.join(publicDir, 'favicon.ico'));
        } catch (e) { console.error("Error creating ICO copy", e); }

        console.log("Transparent Favicon Pack Generated.");

    } catch (error) {
        console.error("Error:", error);
    }
}

generateTransparentFavicons();
