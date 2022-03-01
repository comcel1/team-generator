const Engineer = require('../lib/Engineer');

test('creates an engineer object', () => {
    const engineer = new Engineer('Paul', '1111', 'paulnelson@comcast.net', 'github');
    
    expect(engineer.name).toBe('Paul');
    expect(engineer.id).toBe('1111');
    expect(engineer.email).toBe('paulnelson@comcast.net');
    expect(engineer.github).toBe('github');
});


test("get engineer name", () => {
    const engineer = new Engineer('Paul', '1111', 'paulnelson@comcast.net', 'github');

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name));

});

test("get engineer id", () => {
    const engineer = new Engineer('Paul', '1111', 'paulnelson@comcast.net', 'github');

    expect(engineer.getID()).toEqual(expect.stringContaining(engineer.id));

});


test("get engineer email", () => {
    const engineer = new Engineer('Paul', '1111', 'paulnelson@comcast.net', 'github');

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email));

});

test("get engineer github", () => {
    const engineer = new Engineer('Paul', '1111', 'paulnelson@comcast.net', 'github');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github));

});



test("get role of person", () => {
    const engineer = new Engineer('Paul', '1111', 'paulnelson@comcast.net', 'github');

    expect(engineer.getRole()).toBe("Engineer");

});

