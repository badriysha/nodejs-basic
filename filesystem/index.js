// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

// Cara: Synchronous
// let position = path.resolve(__dirname, 'notes.txt');
// const data = fs.readFileSync(position, 'UTF-8');
// console.log(data);


// Cara: Asynchronous
const fileReadCallback = (error, data) => {
    if (error) {
        console.log('Gagal mengambil data');
        return;
    }
    console.log(data);
}
let position = path.resolve(__dirname, 'notes.txt');
fs.readFile(position, 'UTF-8', fileReadCallback);