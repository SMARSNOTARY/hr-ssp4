// preImmersive-[testing 07]-writingCodeWell-009-apply "assertArraysEqual"

function map(array, callbackFunction) {
  var newArray = [];
  array.forEach(function(element) {
    newArray.push(callbackFunction(element));
  });
  return newArray;
}

function cubeAll(numbers) {
  return map(numbers, function(n) {
    return n * n * n;
  });
}

function assertArraysEqual(actual, expected, testName) {
  let elementsMatch = actual.every(function(element, i) {
    return element === expected[i];
  });
  let lengthsMatch = (actual.length === expected.length);
  if (elementsMatch && lengthsMatch) {
    console.log('Passed [' + testName + ']');
  } else {
    console.log('Failed [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

function arraysAreEqual() {
  var actual = cubeAll([1, 2, 3]);
  var expected = [1, 8, 27];
  var testName = 'should pass when arrays are equal';
  assertArraysEqual(actual, expected, testName);
}

function arraysAreNotEqual() {
  var actual = cubeAll([1, 2, 3]);
  var expected = [1, 8, 64];
  var testName = 'should fail when arrays are not equal';
  assertArraysEqual(actual, expected, testName);
}

function arrayHasNegativeNumbers() {
  var actual = cubeAll([-1, -2, -3]);
  var expected = [-1, -8, -27];
  var testName = 'should pass when array has negative numbers';
  assertArraysEqual(actual, expected, testName);
}

// var output = cubeAll([1,2]);
// console.log(output);

// arraysAreNotEqual();
// arraysAreEqual();
// arrayHasNegativeNumbers();
