// preImmersive-buildingBlocksMastery-141-multiply

/*
Write a function called “multiply”.

Given 2 numbers, “multiply” returns their product.

Notes:
* It should not use the multiply operator (*).

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {
  let total = 0;
  let neg = (num1 < 0) ? (num2 < 0 ?false : true ) : (num2 < 0 ? true : false );
  num1 = Math.abs(num1);
  num2 = Math.abs(num2);
  for (let i = 0; i < num2; i++) {
    total += num1;
  }
  if (neg === true) {
    return 0-total;
  } else {
    return total;
  }
}
