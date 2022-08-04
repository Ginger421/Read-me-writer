// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = 
  [
    {
      type: 'input',
      message: "What is the project's title?",
      name: 'title',
    },
    {
      type: 'input',
      message: "Please give a description of the project.",
      name: 'description',
    },
    {
      type: 'input',
      message: 'Please enter the installation instructions',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'Please enter instructions on how to use this app.',
      name: 'usage',
    },
      // {
      //   type: 'checkbox',
      //   choices: [ ''],
      //   name: 'checkbox',
      // },  
    {
      type: 'input',
      message: 'How can other developers contribute to this project?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'Was any testing done on this project? If so, please give examples on how to run the tests. ',
      name: 'testing',
    },
    {
      type: 'input',
      message: 'What is your email address?',
      name: 'email',
    },
    {
      type: 'input',
      message: 'What is your GitHub user name?',
      name: 'github',
    }
  ]

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
  .then((response) => {
    console.log(response)
    const markdown = `
# ${response.title}

## Description
${response.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#)
* [Testing](#testing)
* [Questions](#questions)

## Installation 
${response.installation}

## Usage
${response.usage}

## License

## How to Contribute 
${response.contributing}

## Testing 
${response.testing}

## Questions
${response.email}
${response.github}`;

console.log(markdown);

writeFile('README.md', markdown);
    }
  );

 

}

// TODO: Create a function to write README file
function writeFile(fileName, markdown) {
  fs.writeFile(fileName, markdown, (err) =>
  err ? console.log(err) : console.log('File created!'))
};


// Function call to initialize app
init();

