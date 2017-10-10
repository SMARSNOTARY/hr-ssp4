// preImmersive-buildingBlocksMastery-144-multiplyBetween

/*
Write a function called “multiplyBetween”.

Given 2 integers, “multiplyBetween” returns the product between the two given integers, beginning at num1, and excluding num2.

Notes:
* The product between 1 and 4 is 1 * 2 * 3 = 6.
* If num2 is not greater than num1, it should return 0.
var output = multiplyBetween(2, 5); console.log(output); // --> 24
*/

function multiplyBetween(num1, num2) {
  if (num1 >= num2) { return 0; }
  let result = 1;
  for (let i = num1; i < num2; i++) {
    result *= i;
  }
  return result;
}

// Amanda Loftus
function multiplyBetween(num1, num2) {
  var result = 1;
    for (var x = num1; x < num2; x++) {
      result *= x;
    }
  return num1 < num2 ? result : 0;
}

// Yusaku Kasahara
function multiplyBetween(num1, num2) {
  var product = num1 >= num2 ? 0 : 1;
  for (var i = num2 - 1; i >= num1; i--) {
    product *= i;
  }
  return product;
}

// Jacob Seo
function multiplyBetween(num1, num2) {
  if(num1 > num2){
    return 0;
  }
  if(num1 === num2-1){
    return num1;
  }
  return num1 * multiplyBetween(num1 + 1, num2);
}

// Jen Diamond
function multiplyBetween(num1, num2) {
  if ((num1 > num2) || (num1 === num2)) {return 0;}

  var range = Array.from(new Array(num2-num1), (x,i) => i + num1);

  return range.reduce(function(a, b){
    return a * b
  });
}

// Michael Diodoro
function multiplyBetween(num1, num2) {
  var multiplier = num1 + 1;
  while (multiplier < num2) {
    num1 *= multiplier;
    multiplier++;
  }
  return num1 && multiplier < num2 + 1 ? num1 : 0;
}
