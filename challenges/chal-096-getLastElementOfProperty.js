// preImmersive-buildingBlocksMastery-096-getLastElementOfProperty

/*
Write a function called “getLastElementOfProperty”.

Given an object and a key, “getLastElementOfProperty” returns the last element of an array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* if the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output); // --> 5

Your Code Should Pass:

describe("getLastElementOfProperty", function() {
  it("should return the last element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(4);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getLastElementOfProperty(obj, "array")).toBe(undefined);
  });
});
*/

function getLastElementOfProperty(obj, key) {
  var arr = obj[key];
  if (!Array.isArray(arr) || arr.length === 0 ) {
    return undefined;
  }
  return arr[arr.length-1];
}
