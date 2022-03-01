class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  }
  getID() {
    return this.id;
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return "Employee";
  }
}

// let person = new Employee("Paul", 1111, "paul@email.com");
// person.getName();
// "Paul"
/* 
    Employee {
        name: "Paul",
        id: 1111,
        email: "paul@email.com",
    }
*/

module.exports = Employee;
