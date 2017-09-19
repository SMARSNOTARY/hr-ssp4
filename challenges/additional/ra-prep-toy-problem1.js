/*
Part 1: Given an array of names, write a function `coldCaller` which returns a random student's
name from the input array.

Part 2: Modify `coldCaller` so that it does not call on the same student twice before everyone
else has been called at least once. Once it has called on everyone, it can call on the same student
once again (In other words, `coldCaller` will always call on a student, and never "run out" of
students to call on).
*/

/*
Use this to calculate which number to use as an index

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function getRandomEntry(array) {
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

generate randomIndex from size of current array
splice the name at that index out of the array and push to already-called array
generate next randomIndex from size of now-smaller array, etc.
*/

// solution provided by Michael Diodoro

function coldCaller(students) {
  var alreadyCalled = [];
  var student;
  return function() {
    var randomIndex = Math.floor(Math.random() * students.length);
    !students.length ? students = alreadyCalled.splice(0, alreadyCalled.length) : null;
    student = students.splice(randomIndex, 1);
    alreadyCalled.push(student[0]);
    console.log(student);
  }
}

// another version from either Rajas or Cy

function coldCaller(students) {
    var uncalledStudents = students.slice();
    var calledStudents = [];
    var called;
    var randomIndex;

    return function() {
        if (calledStudents.length === students.length) {
            uncalledStudents = students.slice();
            calledStudents = [];
        }
        randomIndex = Math.floor(Math.random() * (uncalledStudents.length - 1));
        calledStudents.push(uncalledStudents[randomIndex]);
        uncalledStudents.splice(randomIndex, 1);
        return calledStudents[calledStudents.length - 1];
    }

}
