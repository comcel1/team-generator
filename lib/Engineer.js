const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
    }
    getGithub() { 
        return `${this.name}'s GitHub is https://github.com/${this.github}`
    }
    getRole() {
        return "Engineer";
      }
}

// let person = new Engineer("Paul", "1111", "email", "github");
// person.getName();