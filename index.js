const inquirer = require('inquirer');
const fs = require('fs');
const generateReadMe = require("./utils/markdownGenerator");




inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'How is your project installed by users and how do they launch your application?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Are there are specific limitations for usage?',
    },
    {
      type: 'input',
      name: 'contributions',
      message: 'Who would you like to recognize for contributing to this project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What sort of tests are you running for your code?',
    },
    {
        type: 'input',
        name: 'userName',
        message: 'What is your github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license',
      choices: ["Apache 2.0", "MIT", "Boost Software License 1.0", "BSD 3-Clause License"],
    },
    
  ])
  .then((answers) => {
    
    const readMePageContent = generateReadMe(answers);

    fs.writeFile('./assets/README.md', readMePageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md!')

    );
  });