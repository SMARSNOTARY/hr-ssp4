// preImmersive-buildingBlocksMastery-151-convertObjectToList3

/*
Write a function called “convertObjectToList” which converts an object literal into an array of arrays, like this:

Argument:

{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:

[['name', 'Holly'], ['age', 35], ['role', 'producer']]
*/
/*
Your Code Should Pass:

describe('convertObjectToList', function() {
  it('converts_the_sample_data', function() {
    var input = {
      name: 'Holly',
      age: 35,
      role: 'producer'
    };
    var output = convertObjectToList(input);
    expect(output[0][0]).toBe('name');
    expect(output[0][1]).toBe('Holly');
    expect(output[1][0]).toBe('age');
    expect(output[1][1]).toBe(35);
    expect(output[2][0]).toBe('role');
    expect(output[2][1]).toBe('producer');
  });
});

describe('convertObjectToList', function() {
  it('converts_some_other_data', function() {
    var input = {
      foo: 'FOO',
      bar: 'BAR',
      baz: 123,
      'another key': null
    };
    var output = convertObjectToList(input);
    expect(output[0][0]).toBe('foo');
    expect(output[0][1]).toBe('FOO');
    expect(output[1][0]).toBe('bar');
    expect(output[1][1]).toBe('BAR');
    expect(output[2][0]).toBe('baz');
    expect(output[2][1]).toBe(123);
    expect(output[3][0]).toBe('another key');
    expect(output[3][1]).toBe(null);
  })
});
*/

function convertObjectToList(obj) {
  let result = [];
  for (let key in obj) {
    let keyValuePair = [];
    keyValuePair.push(key, obj[key]);
    result.push(keyValuePair);
  }
  return result;
}

// Arianna Kellogg
function convertObjectToList(obj) {
  return Object.entries(obj);
}

// Angela Huang
function convertObjectToList(obj) {
  var arr = [];
  for (var key in obj) {
    arr.push([key, obj[key]]);
  }
  return arr;
}

// Alex Balliet
function convertObjectToList(obj) {
  return Object.keys(obj).map(function (key) {
    var val = obj[key];
    return [key, val];
  });
}
