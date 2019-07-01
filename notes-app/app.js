//importing nodejs core modules
const fs = require('fs');
fs.writeFileSync('notes.txt', "This text will be added in the file. ");
fs.appendFileSync('notes.txt', "This text will be appended. ");
fs.appendFileSync('notes.txt', "Hi");

//importing our own files

const firstName = require('./utils.js');
console.log("name of the file will be printed first");
console.log(firstName); //mike will appear 