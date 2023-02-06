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
      name: 'contributing',
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

//   GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README