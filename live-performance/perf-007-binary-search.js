// preImmersive-livePerformance-007-Divide and conquer

/*
Binary search is a technique for very rapidly searching a sorted collection by
cutting the search space in half at every pass.

Given a sorted array, such as this:
[1, 3, 16, 22, 31, 33, 34]

You can search for the value 31, as follows:

1) Pick the midpoint: 22.
2) The value is higher than 22, so now consider only the right half of the previous array:
[...31, 33, 34]
3) Pick the midpoint: 33
4) The value is lower than 33, so now consider only the left half of the previous array:
[...31...]
5) Pick the midpoint: 31
6) You've hit the value.
7) Return the index of the value.

Notes:
* If you don't find the value, you can return null.
* If at any point you calculate the index of the midpoint and get a fractional number,
just round it down ("floor" it).
*/

// input: a sorted array of numbers
// output: index of the searched-for value

function search(array, value, newMidpoint) {
  let guidepoint = (newMidPoint || array.length);
  let midpoint = Math.floor(guidepoint / 2);
  if (isMidpointTheSolution(array, midpoint, value)) {
    return midpoint;
  }
  let whichHalf = whichHalfDoesValueBelongTo(midpoint, value);
  if (whichHalf === 'lower') {
    midpoint = Math.floor(midpoint / 2);
  } else if (whichHalf === 'upper') {
    midpoint = Math.floor(midpoint + (midpoint / 2));
  }
  search(array, value, midpoint)
// test if it is the given value, or whether the value is greater than or less than the midpoint value
// repeat the process with half the array
// if there is only one number left, it will match (or we'll return null)
// if there are two numbers left, we'll check first one then the other
}

function isMidpointTheSolution(array, num, value) {
  return (value === array[num]);
}

function whichHalfDoesValueBelongTo(midpoint, value) {
  // if value is greater than array[midpoint] choose the upper half
  // otherwise choose the lower half
}
