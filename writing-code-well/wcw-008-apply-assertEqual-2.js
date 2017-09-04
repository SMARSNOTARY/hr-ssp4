// preImmersive-[testing 06]-writingCodeWell-008-apply "assertEqual" #2

/*
Write an “assertEqual” function from scratch, from memory.

Please DO NOT simply PASTE in from before.

If you have to go back and look at your previously-implemented code once, fine, but come back here and write it from memory.

Then use your assertion function to thoroughly test the code.

Use categorical reasoning to consider all the useful cases.
*/

// Note: This is a simple implementation of the standard Array method "every()":
// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/every

/* COMMENTED OUT BECAUSE INTENTIONALLY BUGGY SYNTAX AND JASMINE WON'T RUN

function every(array, callbackFunction) {
  var doesEveryElementMatch = true;
  array.forEach(function(element) {
    doesEveryElementMatch = callbackFunction(element);
  }
  return doesEveryElementMatch;
}

*/

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log(`FAILED [${testName}] Expected "${expected}", but got "${actual}"`);
  }
}

function testSupportOfArraysWithFunctions() {
  let testArray = [1,2,3,4];
//   let actual = every(testArray, n => n % 2 === 0); // for the every function above
  let actual = testArray.every(n => n % 2 === 0); // testing against actual every() method
  let expected = false;
  let testName = 'should support arrays with functions'
  assertEqual(actual, expected, testName);
}
// testSupportOfArraysWithFunctions();

function testArraysWithPropertyValues() {
  let testArray = [
    { name: 'Bob',
      job: 'driver',
      age: 25,
      citizen: true },
    { name: 'Rob',
      job: 'cook',
      age: 30,
      citizen: true }
    ];
//   let actual = every(testArray, x => x.citizen === true); // for the every function above
  let actual = testArray.every(x => x.citizen === true);   // testing against actual every() method
  let expected = true;
  let testName = 'should support arrays of objects'
  assertEqual(actual, expected, testName);
}

// var objectCheck = [{ name: 'Bob', job: 'driver', age: 25, citizen: true },
//  { name: 'Rob', job: 'cook', age: 30, citizen: true }].every( x => x.citizen === true);
//  console.log('all citizens? ', objectCheck);
// testArraysWithPropertyValues();

function testArraysOfStrings() {
  let testArray = [ 'one', 'two', 'three', 'four'];
//   let actual = every(testArray, x => typeof x === 'string'); // for the every function above
  let actual = testArray.every(x => typeof x === 'string'); // testing against actual every() method
  let expected = true;
  let testName = 'should support arrays of strings';
  assertEqual(actual, expected, testName);
}
// testArraysOfStrings();
