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
