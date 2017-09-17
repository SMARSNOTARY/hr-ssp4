/*
Part 1: Write a function which performs a set sequence of operations to an indefinite number
of input integers.
The sequence: add, subtract, multiply, divide
(Source: codewars.com)
*/
// input: indefinitely long sequence of numbers
// output: a number
// constraints: operations follow the specific sequence of add, subtract, multiply and divide, repeatedly
// edge cases: zero might occur when the operation is divide
// assumptions: Treat seed as zero so will start by adding first number to zero, subtract second number, etc. If divide by zero, return infinity

function addSubtractMultiplyDivideRepeat(...args) {
  // get length of array
  // loop through array
    // for each loop, use modulus 4 to identify operation (add = 1, subtract = 2, etc.)
      // if operation is divide AND the element is zero, return infinity
      //  take accumulator/seed and perform next operation with element from array
  // when done, return accumulator
}
