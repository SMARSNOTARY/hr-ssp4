// challenge-047-computePerimeterOfACircle

/*
Write a function called “computePerimeterOfACircle”.

Given the radius of a circle, “computePerimeterOfACircle” returns its perimeter.

var output = computePerimeterOfACircle(4);
console.log(output); // --> 25.132741228718345

Your Code Should Pass:

describe("computePerimeterOfACircle", function() {
  it("should return a number", function() {
    expect(typeof computePerimeterOfACircle(4)).toBe("number");
  });
  it("should return the perimeter of a circle", function() {
    expect(computePerimeterOfACircle(4)).toBe(25.132741228718345);
  });
});
*/

function computePerimeterOfACircle(radius) {
  return Math.PI * radius * 2;
}

// Wonder if addition is faster than multiplication here
// Camilo Snapp
function computePerimeterOfACircle(radius) {
    return Math.PI * (radius + radius);
}

// Dino Firmalino
const computePerimeterOfACircle = (radius) => Math.PI * radius * 2;
