//importing nodejs core modules
// const fs = require('fs');
// fs.writeFileSync('notes.txt', "This text will be added in the file. ");
// fs.appendFileSync('notes.txt', "This text will be appended. ");
// fs.appendFileSync('notes.txt', "Hi");

//importing npm modules

// const validator = require('validator');
// console.log(validator.isEmail('andrew@example.com'));
// console.log(validator.isEmail('example.com'));
// console.log(validator.isURL('http://mead.io'));
// console.log(validator.isURL('http:/mead.io'));

//importing and using chalk
// const chalk = require('chalk');
// console.log(chalk.green('Success!'));
// console.log(chalk.yellow.bold('Warning!'));
// console.log(chalk.red.inverse('Danger!'));

//importing our own files

// const firstName = require('./utils.js');
// const add = require('./utils.js');
// const getNotes = require('./notes.js');
// console.log("name of the file will be printed first");
// console.log(firstName); //mike will appear 
// console.log(add(4,6));
// console.log(getNotes());
//getting user input and printing it out
const yargs = require('yargs');
//console.log(process.argv);

//create add command

yargs.command({
    command : 'add',
    describe : 'add a new note',
    builder : {
        title : {
            describe : 'Note title',
            demandOption : true,
            type : 'string'
        }
    },
    handler : function(argv){
        console.log("Adding a new note", argv)
    }
})

//create remove command

yargs.command({
    command : 'remove',
    describe : 'remove an existing note',
    handler : function(){
        console.log("removed a note")
    }
})

//create list command

yargs.command({
    command : 'list',
    describe : 'list the notes',
    handler : function(){
        console.log('listing the notes')
    }
})

//create read command 

yargs.command({
    command : 'read',
    describe : 'read the notes',
    handler : function(){
        console.log('reading thee notes')
    }
})

yargs.parse()
//console.log(yargs.argv);


