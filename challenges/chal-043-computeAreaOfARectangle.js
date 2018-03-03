// challenge-043-computeAreaOfARectangle

/*
Write a function called “computeAreaOfARectangle”.

Given the length and width of a rectangle, “computeAreaOfARectangle” returns its area.

var output = computeAreaOfARectangle(4, 8);
console.log(output); // --> 32

Your Code Should Pass:

describe("computeAreaOfARectangle", function() {
  it("should return a number", function() {
    expect(typeof computeAreaOfARectangle(7, 6)).toBe("number");
  });
  it("should return the area of a rectangle", function() {
    expect(computeAreaOfARectangle(7, 6)).toBe(42);
  });
})
*/

function computeAreaOfARectangle(length, width) {
  return length * width;
}

// Dino Firmalino
const computeAreaOfARectangle = (width, length) => width * length;
