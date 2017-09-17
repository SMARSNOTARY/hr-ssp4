// preImmersive-buildingBlocksMastery-116-getLengthOfShortestElement*

/*
Write a function called “getLengthOfShortestElement”.

Given an array, “getLengthOfShortestElement” returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

Your Code Should Pass:

describe("getLengthOfShortestElement", function() {
  it("should return a number", function() {
    expect(typeof getLengthOfShortestElement(["one", "two", "three"])).toBe("number");
  });
  it("should return the length of the shortest element in an array", function() {
    expect(getLengthOfShortestElement(["one", "four", "three"])).toBe(3);
  });
  it("it should handle ties", function() {
    expect(getLengthOfShortestElement(["one", "to", "no"])).toBe(2);
  });
  it("it should return 0 when given an empty array", function() {
    expect(getLengthOfShortestElement([])).toBe(0);
  });
});
*/

function getLengthOfShortestElement(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const lengths = arr.map( elem => elem.length );
  return lengths.reduce( (shortest, element) => (shortest < element) ? shortest : element );
}

// function getLengthOfShortestElement(arr) {
//   if (arr.length === 0) {
//     return 0;
//   }
//   const lengths = arr.map( elem => elem.length );
//   return Math.min(...lengths);
// }
