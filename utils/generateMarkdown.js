// TODO: Create a function to generate markdown for README
function generateMarkdown(
	title,
	description,
	installation,
	npmCommand,
	usage,
	contributing,
	testing,
	github,
	email,
	license
) {
	let licenseParsed = license.split('  ');
	let licenseArray = licenseParsed.filter((word) => word.length > 2);
	let [licenseName, licenseCode] = licenseArray;
	licenseName = licenseName.trimStart();
	licenseCode = licenseCode.trimStart();
	licenseCode = licenseCode.split(' ').join('%20').split('-').join('--');

	return `# ${title}

## Description

${description}

## Table of Contents 
​
* [Installation](#installation)
​
* [Usage](#usage)
​
* [Contributing](#contributing)
​
* [Testing](#testing)
​
* [Questions](#questions)

* [License](#license)

## Installation

${installation}

\`\`\`
${npmCommand}
\`\`\`

## Usage

${usage}

## Contributing

${contributing}

## Testing

${testing}

## Questions

You can find more of my work at [${github}](https://github.com/${github}).
If you have any questions about the repo, open an issue or contact me directly at ${email}. 

## License
${licenseName}  ![${licenseName}](https://img.shields.io/badge/license-${licenseCode}-blue)`;
}

function test() {
	console.log('test');
}

module.exports = { generateMarkdown };
