const chalk = require('chalk');
const notes = require('./notes.js');
const yargs = require('yargs')

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string',  
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv) {
        console.log('Title:' + argv.title )
        console.log('Body:' + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function() {
        console.log('Removed a note')
    }
})

yargs.command({
    command: 'list',
    describe: 'List a note',
    handler: function() {
        console.log('Listed a note')
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function() {
        console.log('Read a note')
    }
})

console.log(yargs.argv)