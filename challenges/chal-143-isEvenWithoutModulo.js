// preImmersive-buildingBlocksMastery-143-isEvenWithoutModulo

/*
Write a function called “isEvenWithoutModulo”.

Given a number, “isEvenWithoutModulo” returns whether it is even.

Notes:
* It does so without using the modulo operator (%).
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/

function isEvenWithoutModulo(num) {
  num = num - Math.trunc(num / 2) * 2;
  return num === 0 ? true : false;
}
