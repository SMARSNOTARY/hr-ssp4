// Roger Sperberg SA-1, from the SSP problems & SA-1
// ****************************************************

/*
#1
Write a function called billTotal that can be used to calculate the total to be paid at a restaurant -- including tip and tax --
given the subtotal (i.e. cost of food and drinks). We can assume that the tip will be 15% and tax will be 9.5%. M
ake sure that the tip does not include the tax!

input : a number representing the cost of food and drinks
output : a number representing that cost plus an additional 15% tip and tax of 9.5%
constraints : none
edge cases: none

*/

function billTotal(subtotal) {
    return subtotal * (1 + .15 + .095);
}

//billTotal(10.00);




// **************************************************** *******************************************************

/*
#2
Complete the below function called range that takes two integers as parameters, start and end, and returns an array
containing all the whole numbers between them starting with start and up to end (you can use a any loop. The function
definition should look like this:

function range(start, end) {
  // YOUR CODE HERE
}
You should be able to use it like so:

range(0, 4); // => [0, 1, 2, 3]
range(2, 7); // => [2, 3, 4, 5, 6]
range(10, 10); // => []
range(10, 2); // => []
After you write your function, you can test it using the above inputs to make sure that it behaves correctly.

input : a starting number and an ending number
output : an array of all the numbers between start and end, not including the end number
constraints : if start and end are the same, return an empty array
edge case : if start is greater than end, return an empty array

assumptions: receiving valid integer, start < end

count up from start to right before the end
put those numbers into an array
return the array
/

function range(start, end) {
  let arr = [];  // let numbersInRange = [];
  for (let i = start; i < end; i++) {
    arr.push(i);
  }
  return arr;
}
// range(0, 4);
// range(10, 10);
// range(10, 2);
// range(2, 7);
// range(-12, -7);


// **************************************************** *******************************************************

/*
#3
Write a function called 'getFullName' that takes in an object which has this structure:

var person = {
   name : {
      first : "Alyssa",
      middle: "P.",
      last: "Hacker"
   },
   age : 26
}
 and returns the person's full name.

 `getFullName(person); //"Alyssa P. Hacker"`

Note: some person objects passed in may be missing a middle name. In such cases, the function should return the first and last name separated by 1 space.

Example:

var personB = {
   name: {
      first: "Ben",
      last: "Bitdiddle"
   },
   age: 34
}

getFullName(person); //"Ben Bitdiddle"

input : object with name object with first, middle and last properties. Middle may be omitted, and age property
output : a string with the full name, which may or may not contain the middle name (or initial), with space separating names
constraints : none
edge cases :

*/

function getFullName(obj) {
    let fullName = '';
    fullName += obj.name.first;
    if (obj.name.middle) {
        fullName += ' ' + obj.name.middle;
    }
    fullName += ' ' + obj.name.last;
    return fullName;
}
// var person = {
//    name : {
//       first : "Alyssa",
//       middle: "P.",
//       last: "Hacker"
//    },
//    age : 26
// }
// getFullName(person);
// var personB = {
//    name: {
//       first: "Ben",
//       last: "Bitdiddle"
//    },
//    age: 34
// }
// getFullName(personB);




// **************************************************** *******************************************************

/*
#4
Given the following array of people, write a function that, when passed people as a parameter,
returns the person (that is, your function should return an object) with the longest name (first, middle & last).

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function longestName(people) {
  // TODO: Your code here
}
longestName(people);
// => {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}

input : an array containing objects with name property, itself containing first, middle and last properties, and an age property, not used. Middle may or may not appear.
output : a string containing the longest name
constraints : none
edge cases : none

*/

function longestName(people) {
  let names = [];
  people.forEach(function(obj) {
      let wholeName = getFullName(obj.name);
      names.push(wholeName);
  })
  let theLongestName = names.reduce( (longest, curr) => (longest.length >= curr.length) ? longest : curr );

  return theLongestName;

  function getFullName(obj) {
    let fullName = '';
    fullName += obj.first;
    if (obj.middle) {
        fullName += ' ' + obj.middle;
    }
    fullName += ' ' + obj.last;
    return fullName;
  }

}
// var people = [
//   {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
//   {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
//   {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
//   {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
//   {name: {first: "Louis", last: "Reasoner"}, age: 21}
// ];
// longestName(people);


// **********************************************  ************************************************

// #4 again

/* This first version is what I submitted. Instead of .map(), it uses forEach and
*  does call a helper function to build the full name
*/
// function longestName(people) {
//   let fullNames = [];
//   people.forEach(function(obj) {
//     let wholeName = getFullName(obj.name);
//     fullNames.push(wholeName);
//   })

//   let theLongestName = fullNames.reduce( (longest, curr) => (longest.length >= curr.length) ? longest : curr );
//   let firstNameOfLongestName = fullName.split(' ')[0];

//   let index = people.findIndex(getPerson)
//   return people[index];

//   function getFullName(obj) {
//     let fullName = '';
//     fullName += obj.first;
//     if (obj.middle) {
//         fullName += ' ' + obj.middle;
//     }
//     fullName += ' ' + obj.last;
//     return fullName;
//   }

//   function getPerson(element){
//     return element.first === firstNameOfLongestName;
//   }
// }


/* To isolate my difficulty with .map(), I eliminated the code that identifies the longest name
*  and the code that then grabs and returns the person object with that name. Using an
*  anonymous function with .map() works the way I expect it to.
*/
// function combineFirstAndLastNames(people) {
//   let fullNames = [];
//   //  ... (other code omitted)
//   fullNames = people.map(function(person) {
//     let fullName = '';
//     fullName += person.name.first;
//     if (person.name.middle) {
//         fullName += ' ' + person.name.middle;
//     }
//     fullName += ' ' + person.name.last;
//     return fullName;
//   });

//   return fullNames;
// }

/* I finally got the code working that uses map and calls a helper function. I wouldn't bother
*  with a helper function if this is all there was, but there's more to the actual problem that
*  fits into the gap between the `people.map(getFullName)` and the getFullName function
*/
function combineFirstAndLastNames(people) {  // this version uses map and a helper function
  return people.map(getFullName);
   //  ... (other code omitted)

  function getFullName(obj) {
    let fullName = '';
    fullName += obj.name.first;
    if (obj.name.middle) {
        fullName += ' ' + obj.name.middle;
    }
    fullName += ' ' + obj.name.last;
    return fullName;
  }
}


var people = [
  {name: {first: "Ralph", middle: "P.", last: "Plumley"}, city: "San Francisco"},
  {name: {first: "Jacob", last: "Seo"}, city: "Austin"},
  {name: {first: "Arianna", last: "Kellogg"}, city: "Los Angeles"}
];
var output = combineFirstAndLastNames(people);
// var output = longestName(people);
console.log(output);


