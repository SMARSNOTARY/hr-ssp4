// challenge-046-computeTripledAreaOfARectangle

/*
Write a function called “computeTripledAreaOfARectangle”.

Given a length and width of a rectangle, “computeTripledAreaOfARectangle” returns the rectangle’s area, multiplied by 3.

var output = computeTripledAreaOfARectangle(2, 4);
console.log(output); // --> 24

Your Code Should Pass:

describe("computeTripledAreaOfARectangle", function() {
  it("should return a number", function() {
    expect(typeof computeTripledAreaOfARectangle(7, 6)).toBe("number");
  });
  it("should return the area of a rectangle", function() {
    expect(computeTripledAreaOfARectangle(7, 6)).toBe(126);
  });
})
*/

function computeTripledAreaOfARectangle(length, width) {
  return length * width * 3;
}

// Dino Firmalino
const computeTripledAreaOfARectangle = (length, width) => (length * width) * 3;
