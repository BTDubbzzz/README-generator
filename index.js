const inquirer = require('inquirer');
const fs = require('fs');
const aux = require('./utils/generateMarkdown');

function writeToFile(...args) {
	const readmeFileLiteral = aux.generateMarkdown(...args);
	fs.writeFile('README.md', readmeFileLiteral, (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log('README created succesfully!');
		}
	});
}

function init() {
	inquirer
		.prompt([
			{
				type: 'input',
				message: 'Please enter title of the project: ',
				name: 'title',
			},
			{
				type: 'input',
				message: 'Please enter a brief description of the project: ',
				name: 'description',
			},
			{
				type: 'input',
				message: 'Please enter relevant installation instructions: ',
				name: 'installation',
			},
			{
				type: 'input',
				message: 'Please enter nmp command for installation: ',
				name: 'npmCommand',
			},
			{
				type: 'input',
				message:
					'Please enter usage information(explain how to use the application properly): ',
				name: 'usage',
			},
			{
				type: 'input',
				message:
					'Please enter contribution guidelines(do you want anyone to be able to add to this repo/app?): ',
				name: 'contributing',
			},
			{
				type: 'input',
				message: 'Please enter test instructions: ',
				name: 'testing',
			},
			{
				type: 'input',
				message: 'Please enter your GitHub username: ',
				name: 'github',
			},
			{
				type: 'input',
				message: 'Please enter your email address: ',
				name: 'email',
			},
			{
				type: 'input',
				message: 'Choose from a list of licenses: ',
				name: 'license',
			},
		])
		.then(function (response) {
			console.log(response);
			const answers = [];
			for (const key in response) {
				answers.push(response[key]);
			}
			console.log(answers);
			writeToFile(...answers);
		});
}

init();
