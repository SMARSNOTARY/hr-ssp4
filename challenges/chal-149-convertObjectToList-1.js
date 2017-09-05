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
