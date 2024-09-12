// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a description of your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "Please provide installation instructions for your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide usage information for your project.",
  },
  {
    type: "input",
    name: "contribution",
    message: "Please provide contribution guidelines for your project.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide test instructions for your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Please select a license for your project.",
    choices: ["MIT", "GNU GPLv3", "Apache 2.0", "ISC", "None"],
  },
  { type: "input", name: "github", message: "What is your GitHub username?" },
  { type: "input", name: "email", message: "What is your email address?" },
];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    const readme = `
# ${answers.title} ![License](https://img.shields.io/badge/License-${answers.license}-blue.svg) 
## Description
${answers.description}
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Contribution](#contribution)
* [Test](#test)
* [License](#license)
* [Questions](#questions)
## Installation
${answers.installation}
## Usage
${answers.usage}
## Contribution
${answers.contribution}
## Test
${answers.test}
## License
This project is licensed under the ${answers.license} license.
## Questions
If you have any questions, please feel free to reach out to me at ${answers.email}. You can also find me on GitHub at [${answers.github}]
`;
    writeToFile("README.md", readme);
  });
}

// Function call to initialize app
init();
