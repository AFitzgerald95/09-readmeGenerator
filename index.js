// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'what is the name of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the purpose of your project.'
    },
    {
        type: 'input',
        name: 'tableOfContents',
        message:'What are the relevant highlights of the project.',
    },
    {
        type: 'input',
        name: 'installationInstructions',
        message: 'What do you need to install the application?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the application?',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'What are the standards for each contributor?',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'How do you run test for the applications?',
        default: 'npm test'
    },
    {
        type: 'input',
        name: 'gitHub',
        message: 'What is your github username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your E-Mail address',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if(err){
            console.log('error!')
        } else {
            console.log('Success!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const fileName = 'README.md'
        const data = generateMarkdown(answers)
        writeToFile(fileName, data)
    })
}

// Function call to initialize app
init();
