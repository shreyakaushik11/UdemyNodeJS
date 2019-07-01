const fs = require('fs');
const dataBuffer = fs.readFileSync('1-json.json');
const data = dataBuffer.toString();
const dataObject = JSON.parse(data);
console.log(dataObject);
dataObject.name = 'Shreya';
dataObject.age = 21;
const JSONdata = JSON.stringify(dataObject);
fs.writeFileSync('1-json.json', JSONdata);