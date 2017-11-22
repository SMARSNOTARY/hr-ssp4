// challenge-122-calculateBillTotal

/*
Write a function called “calculateBillTotal”.

Given the pre tax and pre tip amount of a meal, “calculateBillTotal” returns the total amount due after tax and tip.

Notes:
* Assume that sales tax is 9.5% and tip is 15%.
* Do NOT tip on the sales tax, only on the pre tip amount.

var output = calculateBillTotal(20);
console.log(output); // --> 24.9

Your Code Should Pass:

describe("calculateBillTotal", function() {
  it("should return a number", function() {
    expect(typeof calculateBillTotal(20)).toBe("number");
  });
  it("should return the bill total, incuding tax and tip", function() {
    expect(calculateBillTotal(20)).toBe(24.9);
  });
});
*/

function calculateBillTotal(preTaxAndTipAmount) {
  let tax = preTaxAndTipAmount * .095;
  let tip = preTaxAndTipAmount * .15;
  return preTaxAndTipAmount + tax + tip;
}
