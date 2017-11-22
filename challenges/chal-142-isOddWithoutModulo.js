// challenge-142-isOddWithoutModulo

/*
Write a function called “isOddWithoutModulo”.

Given a number, “isOddWithoutModulo” returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
console.log(output); // --> true
*/

function isOddWithoutModulo(num) {
  let lastDigit = num - Math.trunc(num / 10) * 10;
  if (lastDigit === 0 || lastDigit === 2 || lastDigit === 4 || lastDigit === 6 || lastDigit === 8) {
    return false;
  } else {
    return true;
  }
}
