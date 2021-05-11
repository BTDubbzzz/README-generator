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
				message: 'Please enter npm command for installation: ',
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
					'Please enter contribution guidelines(do you want anyone to be able to contribute to this repo/app?): ',
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
				type: 'list',
				message: 'Choose from a list of licenses: ',
				name: 'license',
				choices: [
					'Academic Free License                 v3.0 afl-3.0',
					'Apache license 2.0                    apache-2.0',
					'Artistic license 2.0                  artistic-2.0',
					'Boost Software License 1.0            bsl-1.0',
					'BSD 2-clause "Simplified" license     bsd-2-clause',
					'BSD 3-clause "New"/"Revised" license  bsd-3-clause',
					'BSD 3-clause Clear license            bsd-3-clause-clear',
					'Creative Commons license family       cc',
					'Creative Commons Zero v1.0 Universal  cc0-1.0',
					'Creative Commons Attr 4.0             cc-by-4.0',
					'Creative Commons Attr Share           4.0 cc-by-sa-4.0',
					'Do What The F*ck You Want To PL       wtfpl',
					'Educational Community License v2.0    ecl-2.0',
					'Eclipse PL 1.0                        epl-1.0',
					'Eclipse PL 2.0                        epl-2.0',
					'European Union PL 1.1                 eupl-1.1',
					'GNU Affero General PL v3.0            agpl-3.0',
					'GNU General PL family                 gpl',
					'GNU General PL v2.0                   gpl-2.0',
					'GNU General PL v3.0                   gpl-3.0',
					'GNU Lesser General PL family          lgpl',
					'GNU Lesser General PL v2.1            lgpl-2.1',
					'GNU Lesser General PL v3.0            lgpl-3.0',
					'ISC                                   isc',
					'LaTeX Project PL v1.3c                lppl-1.3c',
					'Microsoft PL                          ms-pl',
					'MIT                                   mit',
					'Mozilla PL 2.0                        mpl-2.0',
					'Open Software License 3.0             osl-3.0',
					'PostgreSQL License                    postgresql',
					'SIL Open Font License 1.1             ofl-1.1',
					'U Illinois/NCSA Open Source License   ncsa',
					'The Unlicense                         unlicense',
					'zLib License                          zlib',
				],
			},
		])
		.then(function (response) {
			const answers = [];
			for (const key in response) {
				answers.push(response[key]);
			}
			writeToFile(...answers);
		});
}

init();
