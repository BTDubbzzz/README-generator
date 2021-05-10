// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is your name?',
                name: 'username'
            },
            {
                type: 'input',
                message: 'What is your name?',
                name: 'username'
            },
            {
                type: 'input',
                message: 'What is your name?',
                name: 'username'
            },
            {
                type: 'input',
                message: 'What is your name?',
                name: 'username'
            }
            {
                type: 'input',
                message: 'What is your name?',
                name: 'username'
            }
            {
                type: 'input',
                message: 'What is your name?',
                name: 'username'
            }
            {
                type: 'input',
                message: 'What is your name?',
                name: 'username'
            }
        ])
        .then(function(response) {
            console.log(response);
            let { username, location, bio, linkedinurl, githuburl } = response;
            writeToFile(username, location, bio, linkedinurl, githuburl)
        })
}

// Function call to initialize app
init();
