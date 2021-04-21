/**
 * TODO:
 * Buatlah program untuk membaca teks input.txt dan menuliskannya ulang pada berkas output.txt
 * menggunakan teknik readable stream dan writable stream.
 */

const fs = require('fs');
const path = require('path');

const data = path.resolve(__dirname, 'input.txt');
const writeableStream = fs.createWriteStream('stream/output.txt');
const readableStream = fs.createReadStream(data, {
    highWaterMark: 15
});

readableStream.on('readable', () => {
    try {
        let msg = `${readableStream.read()}\n`;
        writeableStream.write(msg);
        console.log(msg);
    } catch(error) {
        //
    }
});

