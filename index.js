// const generateHTML = require('./src/generateHTML');

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// add team profile dependencies
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// questions for employees
const {
  managerPrompts,
  internPrompts,
  engineerPrompts,
} = require("./src/prompts");

const teamObject = {
  manager: [],
  engineers: [],
  interns: [],
};

const start = async () => {
  console.log("Welcome to Team Builder!");
  await inquirer
    .prompt(managerPrompts)
    .then((data) => {
      let manager = new Manager(
        data.managerName,
        data.managerID,
        data.managerEmail,
        data.managerOffice
      );

      teamObject.manager.push(manager);
    })
    .catch((err) => console.log(err));
    continueQuestion();

};

const continueQuestion = async () => {
  let choice;
  await inquirer
    .prompt([
      {
        type: "list",
        name: "choice",
        message: "What type of employee would you like to add?",
        choices: ["Engineer", "Intern", "None"],
      },
    ])
    .then((data) => {
      choice = data.choice;
    })
    .catch((err) => console.log(err));

  if (choice === "Engineer") {
    engineerQuestions();
  } else if (choice === "Intern") {
    internQuestions();
  } else {
    console.log("Goodbye!");
    console.log(teamObject);
  }
};

const engineerQuestions = async () => {
  await inquirer
    .prompt(engineerPrompts)
    .then((data) => {
        let engineer = new Engineer(
            data.engineerName,
            data.engineerID,
            data.engineerEmail,
            data.engineerGithub
          );
    
          teamObject.engineers.push(engineer);
    })
    .catch((err) => console.log(err));

  continueQuestion();
};

const internQuestions = async () => {
  await inquirer
    .prompt(internPrompts)
    .then((data) => {
        let intern = new Intern(
            data.internName,
            data.internID,
            data.internEmail,
            data.internSchool,
          );
    
          teamObject.interns.push(intern);
    })
    .catch((err) => console.log(err));

  continueQuestion();
};

start();
