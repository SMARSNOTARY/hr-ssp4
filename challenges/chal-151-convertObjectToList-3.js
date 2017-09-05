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
