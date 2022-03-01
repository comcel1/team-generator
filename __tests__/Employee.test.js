const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Paul', '1111', 'paulnelson@comcast.net');
    
    expect(employee.name).toBe('Paul');
    expect(employee.id).toBe('1111');
    expect(employee.email).toBe('paulnelson@comcast.net');
});


test("get employee name", () => {
    const employee = new Employee('Paul', '1111', 'paulnelson@comcast.net');

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name));

});

test("get employee id", () => {
    const employee = new Employee('Paul', '1111', 'paulnelson@comcast.net');

    expect(employee.getID()).toEqual(expect.stringContaining(employee.id));

});


test("get employee email", () => {
    const employee = new Employee('Paul', '1111', 'paulnelson@comcast.net');

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));

});

test("get role of person", () => {
    const employee = new Employee('Paul', '1111', 'paulnelson@comcast.net');

    expect(employee.getRole()).toBe("Employee");

});

