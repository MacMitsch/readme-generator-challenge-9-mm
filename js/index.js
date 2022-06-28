// Variable and Dependents
const fs = require("fs");
const inquirer =require("inquirer");
const generateMarkdown = require('../util/generateMarkdown')
// const writefileAsync = js.promisify(fs.writeFile);
console.log('Welcome to my README.md generator')
console.log('Answering these questions will generate a README.md file.')

        // question - what bear is best?
const questions = [
            // Title
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
             // Description
        {
            type: "input",
            name: "description",
            message: "Give a description about this project.",  
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter a Description!');
                    return false
                }
            }
        
        },
             // Usage
        {
            type: "input",
            name: "usage",
            message: "what is the project for?", 
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter intended use of the project!');
                    return false
                }
            } 
        },
             // Installation
        {
            type: "input",
            name: "installation",
            message: "What is the Installation process?", 
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter installation instructions, If none enter "none"!');
                    return false
                }
            } 
        },
             // License
        {
            type: "checkbox",
            name: "license",
            message: "Choose a license for your project?", 
            choices:['MIT','Apache','GPL','BSD','GNU','No License','Other'],
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please select a license!');
                    return false
                }
            } 
        },
            // Contributions
        {
            type: "input",
            name: "contribution",
            message: "How can someone contribute to the Project?", 
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter a Response!');
                    return false
                }
            } 
        },
             // Test
        {
            type: "input",
            name: "test",
            message: "How does someone test the project?", 
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter a Response!');
                    return false
                }
            } 
        },   
            //  additional comments or questions
        {
            type: "input",
            name: "additional",
            message: "Please enter any additional questions or information", 
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter a Response!');
                    return false
                }
            } 
        },   
             // Github Username
        {
            type: "input",
            name: "github",
            message: "What is your Github Username?", 
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('A Github name is required!');
                    return false
                }
            } 
        }, 
             // Email Address
        {
            type: "input",
            name: "email",
            message: "Please enter an email", 
            validate: your_Input => {
                if (your_Input){
                    return true;
                } else {
                    console.log('Please enter a Response!');
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
    .then(function(userInput) {
        console.log(userInput)
        writeFile("README.md", generateMarkdown(userInput));
    });
};

init();
