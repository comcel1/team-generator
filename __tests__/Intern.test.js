const Intern = require('../lib/Intern');

test('creates an intern object', () => {
    const intern = new Intern('Paul', '1111', 'paulnelson@comcast.net', 'school');
    
    expect(intern.name).toBe('Paul');
    expect(intern.id).toBe('1111');
    expect(intern.email).toBe('paulnelson@comcast.net');
});


test("get intern name", () => {
    const intern = new Intern('Paul', '1111', 'paulnelson@comcast.net', 'school');

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name));

});

test("get intern id", () => {
    const intern = new Intern('Paul', '1111', 'paulnelson@comcast.net', 'school');

    expect(intern.getID()).toEqual(expect.stringContaining(intern.id));

});


test("get intern email", () => {
    const intern = new Intern('Paul', '1111', 'paulnelson@comcast.net', 'school');

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email));

});

test("get intern school", () => {
    const intern = new Intern('Paul', '1111', 'paulnelson@comcast.net', 'school');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));

});



test("get role of person", () => {
    const intern = new Intern('Paul', '1111', 'paulnelson@comcast.net', 'school');

    expect(intern.getRole()).toBe("Intern");

});

