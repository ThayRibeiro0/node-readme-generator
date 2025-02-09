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
      message: "Provide a description of your project:",
    },
    {
      type: "input",
      name: "installation",
      message: "How do you install your project?",
    },
    {
      type: "input",
      name: "usage",
      message: "How do you use your project?",
    },
    {
      type: "input",
      name: "contributing",
      message: "How can others contribute to your project?",
    },
    {
      type: "input",
      name: "tests",
      message: "How can your project be tested?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
  ];

// TODO: Create a function to write README file
function generateREADME(data) {
    return `# ${data.title}
  
  ## Description
  ${data.description}
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contributing
  ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  If you have any questions, feel free to reach out:
  
  - GitHub: [${data.github}](https://github.com/${data.github})
  - Email: ${data.email}
    `;
  }
  
// TODO: Create a function to initialize app
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateREADME(data));
    console.log("README.md successfully created!");
  }

// Function call to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      writeToFile("README.md", answers);
    });
  }

// Start the application
init();