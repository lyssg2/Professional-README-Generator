// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [

    {
        input: 'input',
        message: 'What is your project title?',
        name: 'title'
    },
    {
        input: 'input',
        message: 'What is the description of your project?',
        name: 'description'
    },
    {
        input: 'input',
        message: 'What are the installation instructions?',
        name: 'installation',
    },
    {
        input: 'input',
        message: 'what is the usage information?',
        name: 'usage'
    },
    {
        input: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution'
    },
    {
        input: 'input',
        message: 'What are the test instructions?',
        name: 'test'
    },
    {
        type: "list",
        message: 'What kind of license would you like for your application?',
        choices: ["APACHE 2.0", "GNU LGPLv3", "BSD 3", "IPL 1.0", "ISC", "MIT", "MPL 2.0", "None"],
        name: 'license'
    },
    {
        input: 'input',
        message: 'What is your GitHub username?',
        name: 'github'
    },
    {
        input: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}`, data, (err) =>
        err ? console.error('error', err) : console.log('Success! your README has been created')
    )
}
// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('README.md', generateMarkdown(data))
        })
}



// Function call to initialize app
init();