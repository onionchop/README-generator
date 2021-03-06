const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Questions for user input
const questions = [

    {type: "input",
    name: "email",
    message: "What is your email?",
},
{
    type: "input",
    name: "github",
    message: "What is the link to your Github profile?",
},
{
    type: 'input',
    message: "What is the title of your project?",
    name: 'title',
},
{
    type: "input",
    name: "description",
    message: "Give a description for this project.",
 },

{
    type: "input",
    name: "installation",
    message: "How to install your application.",
},
{
    type: "input",
    name: "usage",
    message: "Provide instructions for use.",
},
{
    type: "input",
    name: "contributions",
    message: "Who else contributed to the project?",
},
{
    type: "input",
    name: "test",
    message: "How to test your project?",
    default: "npm test",
},
{
    type: "list",
    name: "license",
    message: "What license does your project have?",
    choices: ["Eclipse Public", "IBM", "MIT", "Zlib"],
},
];

// Function to write README file
function writetoFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
            console.log('README Generated :^)')
    }
    );
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswer) =>{
        console.log('Generating Markdown... Please wait.');
        writetoFile(
            "GeneratedREADME.md",
            generateMarkdown({...inquirerAnswer})
        );
    })
}

// Function call to initialize app
init();
