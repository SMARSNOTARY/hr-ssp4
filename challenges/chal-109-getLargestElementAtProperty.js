// preImmersive-buildingBlocksMastery-109-getLargestElementAtProperty*

/*
Write a function called “getLargestElementAtProperty”.

Given an object and a key, “getLargestElementAtProperty” returns the largest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4

Your Code Should Pass:

describe("getLargestElementAtProperty", function() {
  it("should return the largest element of the array located at key", function() {
    var obj = {
      array: [1, 2, 4]
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(4);
  });
  it("should return undefined if the array is empty", function() {
    var obj = {
      array: []
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property is not an array", function() {
    var obj = {
      array: "sike"
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(undefined);
  });
  it("should return undefined if the property does not exist", function() {
    var obj = {
      what: "sike"
    };
    expect(getLargestElementAtProperty(obj, "array")).toBe(undefined);
  });
});
*/

function getLargestElementAtProperty(obj, key) {
  var nums = obj[key];
  if (Array.isArray(nums) && nums !== undefined && nums.length > 0) {
    return nums.reduce( (largest, elem) => (largest > elem) ? largest : elem );
  }
}

// function getLargestElementAtProperty(obj, key) {
//   var nums = obj[key];
//   if (!Array.isArray(nums) || nums === undefined || nums.length === 0) {
//     return undefined;
//   }
//   return Math.max(...nums);
// }
