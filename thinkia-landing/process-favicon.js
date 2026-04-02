import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const JimpPkg = require('jimp');
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const Jimp = JimpPkg.Jimp || JimpPkg;

const imagePath = path.join(__dirname, 'public', 'logo-thinkia.png');
const outputPath = path.join(__dirname, 'public', 'favicon.png');

console.log("Reading:", imagePath);

// Legacy usage for compatibility
new Jimp(imagePath, function (err, image) {
    if (err) {
        console.log("Jimp Error:", err);
        return;
    }
    console.log("Image loaded.");
    const size = image.bitmap.height;
    console.log("Cropping to size:", size);

    image.crop(0, 0, size, size)
        .write(outputPath, () => console.log("Done! Favicon saved."));
});
