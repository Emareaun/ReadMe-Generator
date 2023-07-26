// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const questions = [
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing to file:", err);
    } else {
      console.log("README file generated successfully!");
    }
  });
}

// TODO: Create a function to generate markdown
function generateMarkdown(answers) {
  // Format the answers into a markdown string
  return `
    # Project Title: ${answers.title}

    ## Description
    ${answers.description}

    ## Author
    ${answers.author}
    
    // Add more sections as needed...
  `;
}

// TODO: Create a function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown);
  } catch (err) {
    console.error("Error during initialization:", err);
  }
}

// Function call to initialize app
init();
