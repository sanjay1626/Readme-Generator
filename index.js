const fs = require('fs');
const inquirer = require('inquirer');
const generatereadme = require('./generatereadme');

// array of questions for user
const questions = [
    {    type: 'input',
         message : "What is the Title of the project?",
         name : "title"
    },
        
    
];
    


// function to write README file
function writeToFile(fileName, data) {

        fs.writeFile('ReadMe.md',generatereadme), (err) => 
        err ? console.error(err) : console.log("Commit Logout")
}

// function to initialize program
function init() {
        inquirer.prompt(questions).then(writeToFile), (err) => 
        err ? console.error(err) : console.log("Commit Logout")
        }
            
    

// function call to initialize program
init();
