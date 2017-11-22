// challenge-089-select*

/*
Write a function called “select”.

Given an array and an object, “select” returns a new object whose properties are those in the given object AND whose keys are present in the given array.

Notes:
* If keys are present in the given array, but are not in the given object, it should ignore them.
* It does not modify the passed in object.

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }

Your Code Should Pass:

describe("select", function() {
  it("should return an object", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    expect(typeof select(keys, obj)).toBe("object");
  });
  it("should return an object with properties in from the passed in object whose keys are present in the given function", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    var result = {
      a: 1,
      c: 3
    };
    expect(select(keys, obj)).toEqual(result);
  });
  it("should not modify the passed in object", function() {
    var keys = ["a", "c", "e"];
    var obj = {
      a: 1,
      b: 2,
      c: 3,
      d: 4
    };
    select(keys, obj)
    expect(Object.keys(obj).length).toEqual(4);
  });
});
*/

function select(arr, obj) {
  var result = {};
  arr.forEach(function(element) {
    if (element in obj) {
      result[element] = obj[element];
    }
  });
  return result;
}
