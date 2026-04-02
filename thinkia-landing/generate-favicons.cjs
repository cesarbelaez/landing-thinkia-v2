const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function generateFavicons() {
    try {
        console.log("Starting Premium Favicon Generation...");

        // 1. Load Source
        const logoPath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const logo = await Jimp.read(logoPath);

        // 2. Isolate Symbol (Brain)
        // Crop top area to remove "Thinkia" text
        logo.crop({ x: 0, y: 0, w: logo.bitmap.width, h: 550 });
        logo.autocrop(); // Remove whitespace

        // 3. Convert to Pure White (for contrast on colored background)
        logo.scan(0, 0, logo.bitmap.width, logo.bitmap.height, function (x, y, idx) {
            const alpha = this.bitmap.data[idx + 3];
            if (alpha > 0) {
                this.bitmap.data[idx + 0] = 255; // R
                this.bitmap.data[idx + 1] = 255; // G
                this.bitmap.data[idx + 2] = 255; // B
            }
        });

        // 4. Create Master Canvas (1024x1024)
        // Brand Accent: #F57624
        const size = 1024;
        const bg = new Jimp({ width: size, height: size, color: '#F57624' });

        // 5. Apply Rounded Corners (Squircle-ish)
        // Simple approach: create a mask or manipulate pixels.
        // Let's iterate corners.
        const radius = 180; // Corner radius for a 1024px box

        bg.scan(0, 0, size, size, function (x, y, idx) {
            // Check usage for 4 corners
            // Top Left
            if (x < radius && y < radius) {
                const dist = Math.sqrt(Math.pow(radius - x, 2) + Math.pow(radius - y, 2));
                if (dist > radius) this.bitmap.data[idx + 3] = 0;
            }
            // Top Right
            else if (x > size - radius && y < radius) {
                const dist = Math.sqrt(Math.pow(x - (size - radius), 2) + Math.pow(radius - y, 2));
                if (dist > radius) this.bitmap.data[idx + 3] = 0;
            }
            // Bottom Left
            else if (x < radius && y > size - radius) {
                const dist = Math.sqrt(Math.pow(radius - x, 2) + Math.pow(y - (size - radius), 2));
                if (dist > radius) this.bitmap.data[idx + 3] = 0;
            }
            // Bottom Right
            else if (x > size - radius && y > size - radius) {
                const dist = Math.sqrt(Math.pow(x - (size - radius), 2) + Math.pow(y - (size - radius), 2));
                if (dist > radius) this.bitmap.data[idx + 3] = 0;
            }
        });

        // 6. Composite Symbol
        // Scale symbol to 80% of canvas
        const targetIconSize = Math.floor(size * 0.80);
        logo.contain({ w: targetIconSize, h: targetIconSize });

        const centerOffset = (size - targetIconSize) / 2;
        bg.composite(logo, centerOffset, centerOffset);

        // 7. Output All Sizes
        const sizes = [16, 32, 48, 64, 128, 256];
        const publicDir = path.join(__dirname, 'public');

        // Generate PNGs
        for (const s of sizes) {
            const clone = bg.clone();
            clone.resize({ w: s, h: s }); // Bicubic default usually
            const outFile = path.join(publicDir, `favicon-${s}x${s}.png`);
            await clone.write(outFile);
            console.log(`Saved: favicon-${s}x${s}.png`);
        }

        // Apple Touch Icon (180x180)
        const appleIcon = bg.clone().resize({ w: 180, h: 180 });
        await appleIcon.write(path.join(publicDir, 'apple-touch-icon.png'));
        console.log(`Saved: apple-touch-icon.png`);

        // Main favicon.png (use 192 or 32? Standard logic often implies 32 or 48 for .ico, but .png is fine)
        // Let's output a high-res 'favicon.png' (e.g. 192) for the link tag
        const mainFavicon = bg.clone().resize({ w: 192, h: 192 });
        await mainFavicon.write(path.join(publicDir, 'favicon.png'));

        // Also a standard 32x32 to be named favicon.ico (fake ico, actually png, modern browsers support it)
        // Or actually save as .ico if Jimp supports it (it usually doesn't write multi-layer ico).
        // Best practice: Rename 32x32 png to favicon.ico if needed, or better, just use the png links.
        // User asked for favicon.ico. I'll make a copy of 32x32 named favicon.ico
        const fav32 = path.join(publicDir, 'favicon-32x32.png');
        const favIco = path.join(publicDir, 'favicon.ico');
        fs.copyFileSync(fav32, favIco);
        console.log(`Saved: favicon.ico (from 32x32 png)`);

        console.log("Done.");

    } catch (error) {
        console.error("Error generating favicons:", error);
    }
}

generateFavicons();
