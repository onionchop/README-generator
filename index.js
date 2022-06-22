// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
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
    choices: ["Eclipse", "IBM", "MIT", "Zlib"],
},

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
