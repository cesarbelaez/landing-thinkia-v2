const { Jimp } = require('jimp');
const path = require('path');
const fs = require('fs');

async function generateAdaptiveFavicons() {
    try {
        console.log("Starting ADAPTIVE Favicon Generation (Dark/Light)...");

        const logoPath = path.join(__dirname, 'public', 'logo-thinkia.png');
        const publicDir = path.join(__dirname, 'public');
        const sizes = [16, 32, 48, 64, 128, 256];

        // helper to find pixel bounds (Monster Scale)
        async function getMaximizedBrain(isDark) {
            const img = await Jimp.read(logoPath);
            img.crop({ x: 0, y: 0, w: img.bitmap.width, h: Math.floor(img.bitmap.height * 0.55) });

            let minX = img.bitmap.width, maxX = 0, minY = img.bitmap.height, maxY = 0;
            let found = false;

            img.scan(0, 0, img.bitmap.width, img.bitmap.height, function (x, y, idx) {
                const r = this.bitmap.data[idx + 0];
                const g = this.bitmap.data[idx + 1];
                const b = this.bitmap.data[idx + 2];
                const a = this.bitmap.data[idx + 3];

                if (a > 20 && (r > 50 || g > 50 || b > 50)) {
                    if (x < minX) minX = x;
                    if (x > maxX) maxX = x;
                    if (y < minY) minY = y;
                    if (y > maxY) maxY = y;
                    found = true;

                    // Color swap logic
                    if (r > 200 && g > 200 && b > 200) {
                        if (isDark) {
                            // Keep White lines
                        } else {
                            // Turn Black for Light Mode
                            this.bitmap.data[idx + 0] = 26;
                            this.bitmap.data[idx + 1] = 29;
                            this.bitmap.data[idx + 2] = 35;
                        }
                    }
                }
            });

            if (!found) return null;

            img.crop({ x: minX, y: minY, w: maxX - minX + 1, h: maxY - minY + 1 });

            const canvas = new Jimp({ width: 512, height: 512, color: 0x00000000 });
            img.contain({ w: 512, h: 512 });
            canvas.composite(img, 0, 0);
            return canvas;
        }

        // 1. Generate Dark Mode Set (White Lines)
        const darkMaster = await getMaximizedBrain(true);
        if (darkMaster) {
            for (const s of sizes) {
                await darkMaster.clone().resize({ w: s, h: s }).write(path.join(publicDir, `favicon-dark-${s}x${s}.png`));
            }
            await darkMaster.clone().resize({ w: 192, h: 192 }).write(path.join(publicDir, `favicon-dark.png`));
        }

        // 2. Generate Light Mode Set (Black Lines)
        const lightMaster = await getMaximizedBrain(false);
        if (lightMaster) {
            for (const s of sizes) {
                await lightMaster.clone().resize({ w: s, h: s }).write(path.join(publicDir, `favicon-light-${s}x${s}.png`));
            }
            await lightMaster.clone().resize({ w: 192, h: 192 }).write(path.join(publicDir, `favicon-light.png`));
        }

        // 3. Fallbacks
        fs.copyFileSync(path.join(publicDir, 'favicon-light-32x32.png'), path.join(publicDir, 'favicon.ico'));
        fs.copyFileSync(path.join(publicDir, 'favicon-light.png'), path.join(publicDir, 'favicon.png'));
        fs.copyFileSync(path.join(publicDir, 'favicon-light-128x128.png'), path.join(publicDir, 'apple-touch-icon.png'));

        console.log("Adaptive Favicons Generated successfully.");

    } catch (e) {
        console.error(e);
    }
}

generateAdaptiveFavicons();
