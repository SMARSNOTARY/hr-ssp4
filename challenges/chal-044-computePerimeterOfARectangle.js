// challenge-044-computePerimeterOfARectangle

/*
Write a function called “computePerimeterOfARectangle”.

Given a length and a width describing a rectangle, “computePerimeterOfARectangle” returns its perimter.

var output = computePerimeterOfARectangle(5, 2);
console.log(output); // --> 14

Your Code Should Pass:

describe("computePerimeterOfARectangle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfARectangle(5, 2)).toBe("number");
  });
  it("should return the perimeter of a rectangle", function() {
    expect(computePerimeterOfARectangle(5, 2)).toBe(14);
  });
})
*/

function computePerimeterOfARectangle(length, width) {
  return (length + width) * 2;
}

// Dino Firmalino
const computePerimeterOfARectangle = (length, width) => (length + width) * 2;
