// Variable and Dependents
const fs = require("fs");
const inquirer =require("inquirer");
const generateMarkdown = require('../util/generateMarkdown')
// const writefileAsync = js.promisify(fs.writeFile);
console.log('Welcome to my README.md generator')
console.log('Answering these questions will generate a README.md file.')

// questions - what bear is best?
const questions = [
        
       {
            type: "input",
            name: "title",
            message: "Enter project name.",  
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false
                }
            }
        },
        
        {
            type: "input",
            name: "description",
            message: "Give a description about this project.",  
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false
                }
            }
        
        },
        {
            type: "input",
            name: "usage",
            message: "what is the project for?", 
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false
                }
            } 
        },
        {
            type: "input",
            name: "installing",
            message: "What is the Installation process?", 
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter a title!');
                    return false
                }
            } 
        },
    
];

function writeFile (fileName, Data) {
    fs.writeFile(fileName,Data,(err) => {
        if (err) {
            return console.log(err);
        }
        console.log('you have Successfully completed your README.md file. let us take a look!')
    });
};
// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(answers) {
        console.log(answers)
        writeFile("README.md", generateMarkdown(answers));
    });
};

init();
