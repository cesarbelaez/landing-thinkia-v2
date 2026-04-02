const Jimp = require('jimp');

console.log('Type of Jimp:', typeof Jimp);
console.log('Keys of Jimp:', Object.keys(Jimp));
if (typeof Jimp === 'function') {
    console.log('Jimp is a function (constructor)');
}

// Try to read
try {
    Jimp.read('public/logo-thinkia.png')
        .then(image => {
            console.log('Successfully read image with Jimp.read');
            console.log('Width:', image.bitmap.width);
            console.log('Height:', image.bitmap.height);
        })
        .catch(err => {
            console.error('Error in Jimp.read:', err);
        });
} catch (e) {
    console.error('Crash in Jimp.read attempt:', e);
}
