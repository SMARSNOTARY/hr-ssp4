// preImmersive-buildingBlocksMastery-148-convertArrayToObject3

/*
Write a function called “transformEmployeeData” that transforms some employee data from one format to another.

The argument will look like this:

[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]
Given that input, the return value should look like this:

[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]
Note that the input may have a different number of rows or different keys than the given sample.

For example, let’s say the HR department adds a “tshirtSize” field to each employee record.
Your code should flexibly accommodate that.

Your Code Should Pass:

describe('transformEmployeeData', function() {
  it('transforms_the_sample_data', function() {
    var input = [[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']],
                 [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]];
    var output = transformEmployeeData(input);
    expect(output).toBeDefined();
    expect(output[0].firstName).toEqual('Joe');
    expect(output[1].age).toEqual(36);
  });

  it('transforms_some_other_data', function() {
    var input = [[['firstName', 'Joe'], ['lastName', 'Blow'], ['favoriteIceCream', 'chocolate'], ['role', 'clerk']],
                 [['firstName', 'Carl'], ['lastName', 'Sagan'], ['favoriteIceCream', 'starfruit'], ['role', 'seer']],
                 [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['favoriteIceCream', 'vanilla'], ['role', 'manager']]];
    var output = transformEmployeeData(input);
    expect(output).toBeDefined();
    expect(output[1].favoriteIceCream).toEqual('starfruit');
  });

});
*/
