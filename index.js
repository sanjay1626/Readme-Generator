//external modules
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('./utils');
//my modules
const generatereadme = require('./utils/generateReadme.js');
const api = require('./utils/api.js')

// array of questions for user
const questions = [
    {    type: 'input',
         message : "What is the Title of the project?",
         name : "title",
         validate: function (answer) {
                if (answer.length < 1) {
                    return console.log("A valid project title is required.");
                }
                return true;
            }
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
