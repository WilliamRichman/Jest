const axios = require('axios')
const functions = require('./functions');

//test toBe
test('adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

//test null
test('should be null', () => {
    expect(functions.isNull()).toBeNull()
});

//test user
test("User should be William Richman object", () => {
    expect(functions.createUser()).toStrictEqual({ firstName: 'William', lastName: 'Richman' })
});

//test less than and greater than
test('Should be less then 1600', () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

//test regular expressions
test('There is no I in team but there are two i in William', () => {
    expect('team').not.toMatch(/I/i);
});

//request data from an api
test('User fetch name should be Leanne Graham', () => {
    //expect.assertions(1);
    return functions.fetchUser().then(data => {
        expect(data.name).toEqual('Leanne Graham');
    });
});


