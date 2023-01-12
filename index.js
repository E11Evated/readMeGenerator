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
    name: "heading",
    message: "Enter the heading for the project?"
  },
  {
    type: "input",
    name: "author",
    message: "Enter the author's name?"
  },
  {
    type: "input",
    name: "website",
    message: "Enter the author's website URL:"
  },
  {
    type: "input",
    name: "description",
    message: "Provide a brief description of your project:"
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

  // Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "name",
    message: "What is the name of your project?"
  },
  {
    type: "input",
    name: "heading",
    message: "Provide a brief heading for your project:"
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of your project:"
  },
  {
    type: "input",
    name: "installation",
    message: "Provide instructions on how to install your project:"
  },
  {
    type: "input",
    name: "usage",
    message: "Provide instructions on how to use your project:"
  },
  {
    type: "input",
    name: "video",
    message: "Provide a youtube video link of your project:"
  },
  {
    type: "input",
    name: "title",
    message: "Provide the title of your youtube video:"
  },
  {
    type: "input",
    name: "author",
    message: "What is your name?"
  },
  {
    type: "input",
    name: "username",
    message: "What is your github username?"
  },
  {
    type: "input",
    name: "website",
    message: "What is your website?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "contact",
    message: "What is the best way to contact you?"
  },
  {
    type: "list",
    name: "license",
    message: "Which license would you like to use?",
    choices: ["MIT", "GPL", "Apache"]
  }
];

// Function to initialize program
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const options = {
        readMe_size: 100,
      };
      const markdown = generateMarkdown({ ...answers, ...options });
      fs.writeFile("readme.md", markdown, function(err) {
        if (err) {
          return console.log(err);
        }
        console.log("Successfully created README.md file!");
      });
    });
}

init();