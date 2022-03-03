// const generateHTML = require('./src/generateHTML');

// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// add team profile dependencies
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


// Manager: Name, ID, email, office number
// Engineer: Name, ID, email, github 
// Intern: Name, ID, email, school

const start = () => {
    inquirer.prompt([{
        type: "input",
        name: "managerName",
        message: "What is the name of the manager?"
    }, 
        {type: "input", 
        name: "managerID",
        message: "What is the ID of the manager?"
    },
        {type: "input", 
        name: "managerEmail",
        message: "What is the email address of the manager?"
    },
        {type: "input", 
        name: "managerOffice",
        message: "What is the office number of the manager?"
    }
])
    .then(data => {
        console.log(data);
    })
    .catch(err => console.log(err));
}

start();