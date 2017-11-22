// challenge-140-modulo

/*
Write a function called “modulo”.

Given 2 numbers, “modulo” returns the remainder after dividing num1 by num2.

It should behave as described in the canonical documentation (MDN) for the JavaScript remainder operator:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Remainder_()

Notes:
* Do NOT use the actual built-in modulo (aka “remainder”) operator (%) in your implementation.
* 0 % ANYNUMBER = 0.
* ANYNUMBER % 0 = NaN.
* If either operand is NaN, then the result is NaN.
* Modulo always returns the sign of the first number.

var output = modulo(25, 4);
console.log(output); // --> 1
*/

function modulo(num1, num2) {
  //deal with all edge cases
  if (num2 === 0) {
    return NaN;
  }
  if (isNaN(num1) || isNaN(num2)) {
    return NaN;
  }
  // keep track of whether result should be negative; then do calcs with positive numbers
  let neg = num1 < 0;
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  return innerModulo(num1,num2);

  // use recursion to keep subtracting num2 from num1
  function innerModulo(nm1, nm2) {
    if (nm1 < nm2) {
      return neg ? (nm1 * -1) : nm1;
    } else {
      nm1 -= nm2;
      return innerModulo(nm1, nm2);
    }
  }
}
