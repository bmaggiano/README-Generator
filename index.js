// Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')
// Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the title of your project?"
    },
    {
        name: "description",
        message: "Please enter a description of your project (motivation, what problem does it solve, what did you learn)."
    },
    {
        name: "installation",
        message: "Are there any installation instructions?"
    },
    {
        name: "usage",
        message: "Please enter your usage information here."
    },
    {
        name: "credits",
        message: "Are there any credits/contributions you would like to acknowledge?"
    },
    {
        name: "test",
        message: "Are there any test instructions you would like to include?"
    },
    {
        name: "github",
        message: "What is your github username?"
    },
    {
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "list",
        name: "license",
        message: "Would you like to add a license from the list below?",
        choices: ["MIT", "Mozilla", "Apache", "Boost", "No License"]
    }
];


// TODO: Create a function to initialize app
function init() {
    const prompt = inquirer.createPromptModule()
    prompt(questions)
    .then((data) => {
        fs.appendFile('newREADME.md', generateMarkdown(data), (err) =>
        err ? console.error(err) : console.log('Commit logged!')
      );
    }) 
}

// Function call to initialize app
init();
