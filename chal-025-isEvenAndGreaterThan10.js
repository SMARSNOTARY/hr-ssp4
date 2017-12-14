// challenge-025-isEvenAndGreaterThan10

/*
Write a function called “isEvenAndGreaterThanTen”.

Given a number, “isEvenAndGreaterThanTen” returns whether it is both even and greater than 10.

var output = isEvenAndGreaterThanTen(13);
console.log(output); // --> false

Your Code Should Pass:

describe("isEvenAndGreaterThanTen", function() {
  it("should return a boolean", function() {
    expect(typeof isEvenAndGreaterThanTen(40)).toEqual("boolean");
  });
  it("should return true if the number is even and greater than 10", function() {
    expect(isEvenAndGreaterThanTen(80)).toBe(true);
  });
  it("should return false if the number is odd", function() {
    expect(isEvenAndGreaterThanTen(91)).toBe(false);
  });
  it("should return false if the number is less than 10", function() {
    expect(isEvenAndGreaterThanTen(8)).toBe(false);
  });
  it("should return false if the number is 10", function() {
    expect(isEvenAndGreaterThanTen(10)).toBe(false);
  });
});
*/

function isEvenAndGreaterThanTen(num) {
  let isEven = num % 2 === 0;
  let isGreaterThan10 = num > 10;
  return isEven && isGreaterThan10;
}
