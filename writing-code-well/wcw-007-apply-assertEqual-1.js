// preImmersive-[testing 05]-writingCodeWell-007-applying "assertEqual" #1

// Write an “assertEqual” function from scratch, from memory.
// Then use your assertion function in a series of test cases to thoroughly test the code.

// Use categorical reasoning to consider all the useful cases.

function square(n) {
  return n * n;
}

function assertEqual( actual, expected, testName ) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}

function testSquareOfPositive() {
  let actual = square(5);
  let expected = 25;
  let testName = 'a number squared is that number times itself'
  return assertEqual( actual, expected, testName );
}
// testSquareOfPositive();

function testSquareOfNegative() {
  let actual = square(-5);
  let expected = 25;
  let testName = 'a negative number squared becomes positive'
  return assertEqual( actual, expected, testName );
}
// testSquareOfNegative();

function testSquareOfZero() {
  let actual = square(0);
  let expected = 0;
  let testName = 'zero squared is 0'
  return assertEqual( actual, expected, testName );
}
// testSquareOfZero();

function testSquareOfOneFourth() {
  let actual = square(0.25);
  let expected = 0.0625;
  let testName = 'a fraction squared becomes smaller'
  return assertEqual( actual, expected, testName );
}
// testSquareOfOneFourth();
