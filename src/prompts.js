const managerPrompts = [
  {
    type: "input",
    name: "managerName",
    message: "What is the name of the manager?",
    validate: (managerName) => {
      if (managerName) {
        return true;
      } else {
        console.log("Please enter the name of the manager.");
        return false;
      }
  }},
  {
    type: "input",
    name: "managerID",
    message: "What is the ID of the manager?",
    validate: (managerID) => {
        if (managerID) {
          return true;
        } else {
          console.log("Please enter the ID of the manager.");
          return false;
        }
    }
  },
  {
    type: "input",
    name: "managerEmail",
    message: "What is the email address of the manager?",
  },
  {
    type: "input",
    name: "managerOffice",
    message: "What is the office number of the manager?",
  },
];

const internPrompts = [
  {
    type: "input",
    name: "internName",
    message: "What is the name of the intern?",
  },
  { type: "input", name: "internID", message: "What is the ID of the intern?" },
  {
    type: "input",
    name: "internEmail",
    message: "What is the email address of the intern?",
  },
  {
    type: "input",
    name: "internSchool",
    message: "What is the name of the intern's school?",
  },
];

const engineerPrompts = [
  {
    type: "input",
    name: "engineerName",
    message: "What is the name of the engineer?",
  },
  {
    type: "input",
    name: "engineerID",
    message: "What is the ID of the engineer?",
  },
  {
    type: "input",
    name: "engineerEmail",
    message: "What is the email address of the engineer?",
  },
  {
    type: "input",
    name: "engineerGithub",
    message: "What is the name of the engineer's GitHub account?",
  },
];

module.exports = { managerPrompts, internPrompts, engineerPrompts };
