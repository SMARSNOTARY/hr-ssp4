// challenge-050-computeSquareRoot

/*
Write a function called “computeSquareRoot”.
Given a number, “computeSquareRoot” returns its square root.

var output = computeSquareRoot(9);
console.log(output); // --> 3

Your Code Should Pass:

describe("computeSquareRoot", function() {
  it("should return a number", function() {
    expect(typeof computeSquareRoot(4)).toBe("number");
  });
  it("should return the square root of a number", function() {
    expect(computeSquareRoot(4)).toBe(2);
  });
});
*/

function computeSquareRoot(num) {
  return Math.sqrt(num);
}

// Dino Firmalino
const computeSquareRoot = (num) => Math.sqrt(num);

// Eric Chi
function computeSquareRoot(num) {
  return num**.5;   // Jimmy Sanders-Cannon:  return num**(1/2);
}

// Kanak Lata
function computeSquareRoot(num) {
  return Math.pow(num,0.5);   // Vu Chau:   return Math.pow(num, 1/2);
}

// Michael Diodoro
function computeSquareRoot(num) {
  for (var i = 0 ; i < num; i++) {
    if (i * i === num) {
      return i;
    }
  }
}

// Juan Carlos Collins
function computeSquareRoot(num) {
  var firstDivision = num/2;
  var firstAverage = (firstDivision + 2)/2;
  var secondDivision = num/firstAverage;
  var secondAverage = (secondDivision+firstAverage)/2;
  var thirdAverage = num/secondAverage;
  var finalGuess = (secondAverage+thirdAverage)/2;
  return finalGuess;
}
