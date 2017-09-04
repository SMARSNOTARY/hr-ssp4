/ preImmersive-[skeleton 02]-writingCodeWell-013-is it an isogram?

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive.

Write and test a function that determines whether a string is an isogram.

Notes:
* Assume your input is only letters.
* Assume the empty string is an isogram.
* Ignore case.
* Follow the pseudocode exactly!
*/

// code and tests by Amanda Loftus

function isIsogram(text) {
  text = text.toLowerCase();
  return new Set(text).size === text.length;
}

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed ' + testName);
  } else {
    console.log('FAILED ' + testName + ' expected ' + expected + ' but got ' + actual);
  }
}
function testIsIsogram_success(func) {
  var actual = func('abcd');
  var expected = true;
  return assertEqual(actual, expected, 'handles_success');
}
function testIsIsogram_failure(func) {
  var actual = func('abcda');
  var expected = false;
  return assertEqual(actual, expected, 'handles_failure');
}
function testIsIsogram_mixedCase(func) {
  var actual = func('hapPy');
  var expected = false;
  return assertEqual(actual, expected, 'handles_mixed_case');
}

testIsIsogram_success(isIsogram);
testIsIsogram_failure(isIsogram);
testIsIsogram_mixedCase(isIsogram);
