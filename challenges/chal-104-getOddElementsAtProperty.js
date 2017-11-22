// challenge-104-getOddElementsAtProperty*

/*
Write a function called “getOddElementsAtProperty”.

Given an object and a key, “getOddElementsAtProperty” returns an array containing all the odd elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]


Your Code Should Pass:

describe("getOddElementsAtProperty", function() {
  it("should return an array containing all the odd elements of the array located at key", function() {
    var obj = {
      array: [1, 2, 7]
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([1, 7]);
  });
  it("should return an empty array if the array has only no odd elements", function() {
    var obj = {
      array: [2, 30]
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
  it("should return an empty array if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getOddElementsAtProperty(obj, "array")).toEqual([]);
  });
});
*/

function getOddElementsAtProperty(obj, key) {
  var nums = obj[key];
  return (!Array.isArray(nums) || nums === undefined || nums.length === 0) ? [] : nums.filter( elem => elem % 2 ===1 );
}

// function getOddElementsAtProperty(obj, key) {
//   var nums = obj[key];
//   if (!Array.isArray(nums) || nums === undefined || nums.length === 0) {
//     return [];
//   } else {
//     return nums.filter( elem => elem % 2 ===1 );
//   }
// }
