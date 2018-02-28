// challenge-045-computePerimeterOfATriangle

/*
Write a function called “computePerimeterOfATriangle”.

Given 3 sides describing a triangle, “computePerimeterOfATriangle” returns its perimter.

var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output); // --> 20

Your Code Should Pass:


describe("computePerimeterOfATriangle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfATriangle(6, 4, 10)).toBe("number");
  });
  it("should return the perimeter of a triangle", function() {
    expect(computePerimeterOfATriangle(6, 4, 10)).toBe(20);
  });
});
*/

function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}

// Alexander Mire
function computePerimeterOfATriangle(side1, side2, side3) {
  var arg = [...arguments];
  return arg.reduce(function(per, side){
    return per + side
  },0)
}

// Michael Diodoro
function computePerimeterOfATriangle(side1, side2, side3) {
  return [...arguments].reduce((acc, value) => acc + value);
}

// Dino Firmalino
const computePerimeterOfATriangle = (side1, side2, side3) => side1 + side2 + side3;
