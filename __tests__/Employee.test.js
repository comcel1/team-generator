const Employee = require('../lib/Employee');

test('creates an employee object', () => {
    const employee = new Employee('Paul', '1111', 'paulnelson@comcast.net');

    expect(employee.name).toBe('Paul');
    expect(employee.id).toBe('1111');
    expect(employee.email).toBe('paulnelson@comcast.net');

    // expect(employee.name).toEqual(expect.any(String));
    // expect(employee.id).toEqual(expect.any(Number));
    // expect(employee.email).toEqual(expect.any(String));
});

