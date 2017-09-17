// preImmersive-buildingBlocksMastery-119-findShortestElement*

/*
Write a function called “findShortestElement”.

Given an array, “findShortestElement” returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

Your Code Should Pass:

describe("findShortestElement", function() {
  it("should return a string", function() {
    expect(typeof(findShortestElement(["one", "two", "three"]))).toBe("string");
  });
  it("should return the shortest element in an array", function() {
    expect(findShortestElement(["a", "two", "three"])).toBe("a");
  });
  it("should return the first shortest element in an array when there are ties", function() {
    expect(findShortestElement(["one", "to", "no"])).toBe("to");
  });
  it("should return an empty string if the array is empty", function() {
    expect(findShortestElement([])).toBe("");
  })
});
*/

function findShortestElement(arr) {
  if (arr.length === 0) {
    return '';
  }
  return arr.reduce( (shortest, elem) => (shortest.length <= elem.length) ? shortest : elem );
}

// function findShortestElement(arr) {
//   let standard = arr[0] || '';
//   return arr.reduce( (standard, elem) =>
//     standard = (standard.length <= elem.length) ? standard : elem,
//     standard);
// }
