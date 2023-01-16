/* // Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require("inquirer");
const fs = require("fs");

const README_FILENAME = 'README.md'

// Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the title of your project?"
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:"
  },
  {
    type: "input",
    name: "heading",
    message: "What is the heading of the project?"
  },
  {
    type: "input",
    name: "author",
    message: "Who is the author of the project?"
  },
  {
    type: "input",
    name: "video",
    message: "Enter a YouTube video ID for your project (if applicable):"
  },
  {
    type: "input",
    name: "installation",
    message: "Provide instructions on how to install your project:"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide examples and instructions on how to use your project:"
  },
  {
    type: "input",
    name: "contributing",
    message: "Provide instructions on how to contribute to your project:"
  },
  {
    type: "input",
    name: "tests",
    message: "Provide instructions on how to run tests for your project:"
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your project:",
    choices: ["MIT", "GPLv3", "Apache", "none"]
  },
  {
    type: "input",
    name: "contact",
    message: "What is the best way to reach you with additional questions?"
  },
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "website",
    message: "What is your personal website?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
    // Use the `fs` package to write the file
    fs.writeFile(fileName, data, function(err) {
      if (err) {
        return console.log(err);
      }
      console.log("Successfully created README.md file!");
      console.log(`Your ${fileName} has been generated! 🚀`)
    });
  };

// Create a function to initialize app
function init() {
    // Use the `inquirer` package to prompt the user for input
    inquirer.prompt(questions).then(function(answers) {
      // Call the `generateMarkdown` function to generate the markdown
      const markdown = generateMarkdown(answers);
      // Call the `writeToFile` function to write the file
      writeToFile(README_FILENAME, markdown);
    });
  };
  init(); */


  const generateMarkdown = require('./utils/generateMarkdown');
  const inquirer = require("inquirer");
  const fs = require("fs");
  
  const README_FILENAME = 'README.md'
  
  // Create an array of questions for user input
  const questions = [
    {
      type: "input",
      name: "name",
      message: "What is the title of your project?"
    },
    {
      type: "input",
      name: "description",
      message: "Provide a brief description of your project:"
    },
    {
      type: "input",
      name: "heading",
      message: "What is the heading of the project?"
    },
    {
      type: "input",
      name: "author",
      message: "Who is the author of the project?"
    },
    {
      type: "input",
      name: "video",
      message: "Enter a YouTube video ID for your project (if applicable):"
    },
    {
      type: "input",
      name: "installation",
      message: "Provide instructions on how to install your project:"
    },
    {
      type: "input",
      name: "usage",
      message: "Provide examples and instructions on how to use your project:"
    },
    {
      type: "input",
      name: "contributing",
      message: "Provide instructions on how to contribute to your project:"
    },
    {
      type: "input",
      name: "tests",
      message: "Provide instructions on how to run tests for your project:"
    },
    {
      type: "list",
      name: "license",
      message: "Choose a license for your project:",
      choices: ["MIT", "GPLv3", "Apache", "none"]
    },
    {
      type: "input",
      name: "contact",
      message: "What is the best way to reach you with additional questions?"
    },
    {
      type: "input",
      name: "username",
      message: "What is your GitHub username?"
    },
    {
      type: "input",
      name: "website",
      message: "What is your personal website?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
    }
  ];
  
  // Create a function to write README file
  function writeToFile(fileName, data) {
      // Use the `fs` package to write the file
      fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Successfully created " + fileName + " file!");
      });
    };
  
  // Create a function to initialize app
  function init() {
      // Use the `inquirer` package to prompt the user for input
      inquirer.prompt(questions).then(function(answers) {
  const markdown = generateMarkdown(answers);
      // Call the `writeToFile` function to write the file
      writeToFile(README_FILENAME, markdown);
    });
  };
  init(); 