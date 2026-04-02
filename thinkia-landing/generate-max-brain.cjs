const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function generateMaxBrainFavicon() {
    try {
        console.log("Starting Max Brain Favicon Generation...");

        // 1. Load Source
        const logoPath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const logo = await Jimp.read(logoPath);

        // 2. Isolate Symbol
        // Crop top area to remove "Thinkia" text (550px height safe zone)
        logo.crop({ x: 0, y: 0, w: logo.bitmap.width, h: 550 });

        // 3. SCAN for exact bounding box of the brain to remove ALL whitespace
        // Jimp's autocrop can sometimes be lenient. Let's do it manually checking alpha.

        let minX = logo.bitmap.width;
        let minY = logo.bitmap.height;
        let maxX = 0;
        let maxY = 0;

        logo.scan(0, 0, logo.bitmap.width, logo.bitmap.height, function (x, y, idx) {
            const alpha = this.bitmap.data[idx + 3];
            if (alpha > 10) { // Threshold for "visible" pixel
                if (x < minX) minX = x;
                if (y < minY) minY = y;
                if (x > maxX) maxX = x;
                if (y > maxY) maxY = y;
            }
        });

        const contentWidth = maxX - minX;
        const contentHeight = maxY - minY;

        console.log(`Brain Bounding Box: x=${minX}, y=${minY}, w=${contentWidth}, h=${contentHeight}`);

        logo.crop({ x: minX, y: minY, w: contentWidth, h: contentHeight });

        // 4. Create Master Canvas (1024x1024) - TRANSPARENT
        const size = 1024;
        const bg = new Jimp({ width: size, height: size, color: 0x00000000 });

        // 5. Scale to fill 100% of the square in its largest dimension
        // If content is wider, width = 1024. If taller, height = 1024.
        // This ensures it touches the edges.

        // We want it HUGE. No padding. 
        // User said "que ocupe más espacio", "el cerebro".

        // Calculate scaling factor to fit 1024x1024
        // Use 'contain' which does exactly this: scales to fit within w/h while preserving aspect ratio.
        // AND aligns to center.

        // Note: contain() adds letterboxing/transparency if aspect ratio differs. 
        // Since we want the brain to be as big as possible, valid.

        logo.contain({ w: size, h: size });

        // Composite onto bg (though 'logo' is now 1024x1024 with containment)
        bg.composite(logo, 0, 0);

        // 6. Output Sizes
        const publicDir = path.join(__dirname, 'public');
        const sizes = [16, 32, 48, 64, 128, 256];

        for (const s of sizes) {
            const clone = bg.clone();
            clone.resize({ w: s, h: s }); // Bicubic resizing
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

        // ICO
        const fav32 = path.join(publicDir, 'favicon-32x32.png');
        try {
            fs.copyFileSync(fav32, path.join(publicDir, 'favicon.ico'));
        } catch (e) { console.error("Error creating ICO copy", e); }

        console.log("Max Brain Favicon Pack Generated.");

    } catch (error) {
        console.error("Error:", error);
    }
}

generateMaxBrainFavicon();
