const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'src/public');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination);
}

fs.readdirSync(target)
  .forEach((image) => {
    // ubah image hero ke large
    sharp(`${target}/${image}`)
      .resize(800)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
      ));

    // ubah image hero ke small
    sharp(`${target}/${image}`)
      .resize(480)
      .toFile(path.resolve(
        __dirname,
        `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
      ));
  });
