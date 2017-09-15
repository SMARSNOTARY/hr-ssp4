// preImmersive-buildingBlocksMastery-147-convertArrayToObject2
/*
Write a function ‘fromListToObject’ which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair.

Example input:
[['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]]

Function’s return value (output):
{ make : 'Ford', model : 'Mustang', year : 1964 }

Do not change the input string. Assume that all elements in the array will be of type ‘string’.

Note that the input may have a different number of elements than the given sample.
For instance, if the input had 6 values instead of 4, your code should flexibly accommodate that.

Your Code Should Pass:

describe ('fromtListToObject', function(){
  it ('should_properly_transform_values', function() {
    var input = [['firstName', 'John'], ['lastName', 'McLane'], ['occupation', 'law enforcement'], ['spouse', 'Holly McLane']];
    var output = fromListToObject(input);

    expect(typeof output).toBe('object');
    expect(output[input[0][0]]).toBe(input[0][1]);
    expect(output[input[1][0]]).toBe(input[1][1]);
    expect(output[input[2][0]]).toBe(input[2][1]);
    expect(output[input[3][0]]).toBe(input[3][1]);

  });
  it ('should_not_modify_input_array', function() {
    var input = [['firstName', 'John'], ['lastName', 'McLane'], ['occupation', 'law enforcement'], ['spouse', 'Holly McLane']];
    var inputCopy = input.slice(0);
    var output = fromListToObject(input);

    expect(input.length).toBe(inputCopy.length);
    expect(input[0][0]).toBe(inputCopy[0][0]);
    expect(input[3][0]).toBe(inputCopy[3][0]);
  });
});
*/

function fromListToObject(array) {
  var resultObject = {};
  for (item of array) {
    resultObject[item[0]] = item[1];
    //  console.log(resultObject);
  }
  return resultObject
}

// Amanda Loftus
function fromListToObject(array) {
  var obj = {};
  array.forEach(function(item) {
    obj[item[0]] = item[1];
  });
  return obj;
}

// Bethany Shao
function fromListToObject(array) {
  return array.reduce(function(obj, elem){
    obj[elem[0]] = elem[1];
    return obj;
  }, {});
}
