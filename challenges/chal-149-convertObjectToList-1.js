// preImmersive-buildingBlocksMastery-149-convertObjectToList1

/*
Write a function called “getAllKeys” which returns an array of all the input object’s keys.
Example input:
{ name : 'Sam', age : 25, hasPets : true }

Function’s return value (output) :
['name', 'age', 'hasPets']

Do not use “Object.keys” to solve this prompt.

Note that your function should be able to handle any object passed in it.

E.g. it should also handle an input like:
{ a : 'a', number : 11, hungry : true, grammyWins : 1 }

Function’s return value (output):
['a', 'number', 'hungry', 'grammyWins']

Your Code Should Pass:

describe('getAllKeys', function() {
  it('should_output_an_array_of_key_names', function(){
    var input = {
      foo: 'bar',
      level: 1,
      red: 'green',
      number: true
    }
    var expected = Object.keys(input);
    var actual = getAllKeys(input);

    expect(actual).not.toBeUndefined();
    expect(actual[0]).toBe(expected[0]);
    expect(actual[1]).toBe(expected[1]);
    expect(actual[2]).toBe(expected[2]);
    expect(actual[3]).toBe(expected[3]);
  });

  it ('should_not_use_restricted_methods', function() {
    var body = getAllKeys.toString();

    expect(/Object\.keys/.test(body)).toBe(false);
  });

});
*/

function getAllKeys(obj) {
  let keyList = [];
  for (let prop in obj) {
    if (obj.hasOwnProperty(prop)) {
      keyList.push(prop);
    }
  }
  return keyList;
}

// Alexander Mire
function getAllKeys(obj) {
  var output = [];
  for(var x in obj){output.push(x)}
  return output
}

// Amanda Loftus
function getAllKeys(obj) {
  return Object.getOwnPropertyNames(obj);
}
