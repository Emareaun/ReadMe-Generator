// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const inquirer = require("inquirer");

const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the project title:",
  },
  {
    type: "input",
    name: "description",
    message: "Enter the project description:",
  },
  {
    type: "input",
    name: "author",
    message: "Enter the author's name:",
  },
  // Add more questions as needed...
];

// TODO: Create a function to write README file
const fs = require("fs");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("README file generated successfully!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile("README.md", markdown);
    });
  }  

// Function call to initialize app
init();