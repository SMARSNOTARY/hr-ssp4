// preImmersive-[testing 08]-writingCodeWell-010-apply "assertObjectsEqual"

function addFullNameProp(obj) {
  var firstName = obj.firstName;
  var lastName = obj['lastName'];

  if (firstName && lastName) {
    obj['fullName'] = firstName + ' ' + lastName;
  }

  return obj;
}

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('Passed [' + testName + ']');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

function testWhenObjectsAreEqual() {
  var testName = 'should pass when objects have same contents';
  var obj = { firstName: 'Bob', lastName: 'Smith' };
  var actual = addFullNameProp(obj);
  var expected = { firstName: 'Bob', lastName: 'Smith', fullName: 'Bob Smith' };
  assertObjectsEqual(actual, expected, testName);
}

// testWhenObjectsAreEqual();
// var obj = { firstName: 'Bob', lastName: 'Smith' };
// var output = addFullNameProp(obj);
// console.log(output);

function testWhenObjectsAreNotEqual() {
  var testName = 'should fail when objects have different contents';
  var obj = { firstName: 'Bob', lastName: 'Jones' };
  var actual = addFullNameProp(obj);
  var expected = { firstName: 'Bob', lastName: 'Smith', fullName: 'Bob Smith' };
  assertObjectsEqual(actual, expected, testName);
}
// testWhenObjectsAreNotEqual();
