const fs = require('fs')
const chalk = require('chalk');


const addNote = function(title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note){
        return note.title === title
    })

    if(duplicateNotes.length==0){
        notes.push({
            title : title,
            body : body
        })
    
        saveNotes(notes)
        console.log(chalk.bgGreen("Note added"))
    } else console.log(chalk.bgRed("Note title taken"))
    
}

const removeNote = function(title){
    const notes = loadNotes()

    const removeNotes = notes.filter(function(note){
        return title!==note.title
    })

    if(notes.length>removeNotes.length){
    console.log(chalk.bgGreen("Note removed"))
    saveNotes(removeNotes);
} else console.log(chalk.bgRed("Note not found"))
    // console.log(removeNotes)
    
    // const dataJSON = JSON.stringify(removeNotes);
    // fs.writeFileSync('notes.json', dataJSON);
}

const listNotes = function(){
    const notes = loadNotes()
    console.log(chalk.blue.underline.bold("Your Notes:"))
    notes.forEach(note => {
       console.log(note.title);
   });

}

const readNote = function(title){
    const notes = loadNotes()
    const titleMatched = notes.find(function(note){
        return note.title === title
    })
    if(titleMatched){
        console.log(chalk.blue.inverse(titleMatched.title));
        console.log(titleMatched.body);
    }
    else console.log(chalk.red("Cannot find"));
}

const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = function(){
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const JSONdata = dataBuffer.toString();
        return JSON.parse(JSONdata);
    }
    catch(e){
        return []
    }
}

module.exports = {
    addNote : addNote,
    removeNote : removeNote,
    listNotes : listNotes,
    readNote : readNote
}