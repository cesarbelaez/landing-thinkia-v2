const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function generateProfessionalFavicons() {
    try {
        console.log("Starting Professional Favicon Generation...");

        // 1. Load Source
        const logoPath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const logo = await Jimp.read(logoPath);

        // 2. Isolate Symbol
        // Crop top area to remove "Thinkia" text
        logo.crop({ x: 0, y: 0, w: logo.bitmap.width, h: 550 });
        logo.autocrop();

        // 3. Convert to Pure White PRESERVING ANTI-ALIASING
        // Visual quality fix: Do NOT force alpha to 255. Keep original alpha for smooth edges.
        logo.scan(0, 0, logo.bitmap.width, logo.bitmap.height, function (x, y, idx) {
            const alpha = this.bitmap.data[idx + 3];
            if (alpha > 0) {
                this.bitmap.data[idx + 0] = 255; // R
                this.bitmap.data[idx + 1] = 255; // G
                this.bitmap.data[idx + 2] = 255; // B
                // Alpha (idx+3) remains UNTOUCHED to preserve smoothness
            }
        });

        // 4. Create Master Canvas (1024x1024)
        // Brand Orange: #F57624
        const size = 1024;
        const bg = new Jimp({ width: size, height: size, color: '#F57624' });

        // 5. Rounded Corners (Squircle)
        // Radius ~ 22%
        const radius = 225;

        bg.scan(0, 0, size, size, function (x, y, idx) {
            if (x < radius && y < radius) {
                // Top Left
                if (Math.sqrt((x - radius) ** 2 + (y - radius) ** 2) > radius) this.bitmap.data[idx + 3] = 0;
            } else if (x > size - radius && y < radius) {
                // Top Right
                if (Math.sqrt((x - (size - radius)) ** 2 + (y - radius) ** 2) > radius) this.bitmap.data[idx + 3] = 0;
            } else if (x < radius && y > size - radius) {
                // Bottom Left
                if (Math.sqrt((x - radius) ** 2 + (y - (size - radius)) ** 2) > radius) this.bitmap.data[idx + 3] = 0;
            } else if (x > size - radius && y > size - radius) {
                // Bottom Right
                if (Math.sqrt((x - (size - radius)) ** 2 + (y - (size - radius)) ** 2) > radius) this.bitmap.data[idx + 3] = 0;
            }
        });

        // 6. Composite Symbol - BALANCED
        // User requested 85% coverage for visual balance.
        const fillFactor = 0.85;
        const targetIconSize = Math.floor(size * fillFactor);

        logo.contain({ w: targetIconSize, h: targetIconSize });

        const centerOffset = (size - targetIconSize) / 2;
        bg.composite(logo, centerOffset, centerOffset);

        // 7. Output Sizes (Optimized downscaling)
        const publicDir = path.join(__dirname, 'public');
        const sizes = [16, 32, 48, 64, 128, 256];

        for (const s of sizes) {
            const clone = bg.clone();
            // Default resize in Jimp is usually Bilinear which is fine.
            // If we wanted 'pixel perfect' for 16x16 we might need manual touch up, 
            // but preserving alpha in step 3 is the biggest win for small sizes.
            clone.resize({ w: s, h: s });

            const outFile = path.join(publicDir, `favicon-${s}x${s}.png`);
            await clone.write(outFile);
            console.log(`Generated: ${outFile}`);
        }

        // Apple Touch Icon (180x180)
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

        console.log("Professional Favicon Pack Generated.");

    } catch (error) {
        console.error("Error:", error);
    }
}

generateProfessionalFavicons();
