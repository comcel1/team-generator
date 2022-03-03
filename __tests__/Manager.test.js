const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager('Paul', '1111', 'paulnelson@comcast.net', '404');
    
    expect(manager.name).toBe('Paul');
    expect(manager.id).toBe('1111');
    expect(manager.email).toBe('paulnelson@comcast.net');
    expect(manager.office).toBe('404');
});


test("get manager name", () => {
    const manager = new Manager('Paul', '1111', 'paulnelson@comcast.net', '404');

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name));
});

test("get manager id", () => {
    const manager = new Manager('Paul', '1111', 'paulnelson@comcast.net', '404');

    expect(manager.getID()).toEqual(expect.stringContaining(manager.id));
});


test("get manager email", () => {
    const manager = new Manager('Paul', '1111', 'paulnelson@comcast.net', '404');

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email));
});

test("get role of person", () => {
    const manager = new Manager('Paul', '1111', 'paulnelson@comcast.net', '404');

    expect(manager.getRole()).toBe("Manager");
});

