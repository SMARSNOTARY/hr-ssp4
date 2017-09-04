// preImmersive-[skeleton 01]-writingCodeWell-012-decorate student list with ages

/*
Convert from a flat class list of names to an object literal decorated with an age for each student.

The ages should be randomly generated for each student, either age 10 or age 11.

Example:
```
var classList = [“Joe”, “Jack”, “John”, “Fred”, “Frank”, “Barry”, “Larry”, “Mary”,
“Harry”, “Farrell”, “Susan”, “Monica”, “Keira”, “Caroline”, “Harriet”, “Erica”,
“Luann”, “Cheryl”, “Beth”, “Rupa”, “Linda”, “Allison”, “Nancy”, “Dora”];

var classListWithAges = [{“name”:”Joe”,”age”:11},{“name”:”Jack”,”age”:10},
{“name”:”John”,”age”:11},{“name”:”Fred”,”age”:11},{“name”:”Frank”,”age”:11},
{“name”:”Barry”,”age”:11},{“name”:”Larry”,”age”:11},{“name”:”Mary”,”age”:11},
{“name”:”Harry”,”age”:11},{“name”:”Farrell”,”age”:10},{“name”:”Susan”,”age”:10},
{“name”:”Monica”,”age”:11},{“name”:”Keira”,”age”:10},{“name”:”Caroline”,”age”:10},
{“name”:”Harriet”,”age”:11},{“name”:”Erica”,”age”:11},{“name”:”Luann”,”age”:10},
{“name”:”Cheryl”,”age”:11},{“name”:”Beth”,”age”:10},{“name”:”Rupa”,”age”:11},
{“name”:”Linda”,”age”:10},{“name”:”Allison”,”age”:10},{“name”:”Nancy”,”age”:10},
{“name”:”Dora”,”age”:10}]
```
Hint: Given that the age for each student is random upon each run, we suggest that your tests check for age values of EITHER 10 or 11.
*/

var classList = ['Joe', 'Jack', 'John', 'Fred', 'Frank', 'Barry', 'Larry', 'Mary', 'Harry', 'Farrell', 'Susan', 'Monica', 'Keira', 'Caroline', 'Harriet', 'Erica', 'Luann', 'Cheryl', 'Beth', 'Rupa', 'Linda', 'Allison', 'Nancy', 'Dora'];

//assumptions: names are all valid characters
//Input: an array containing 24 names as strings,
//Output: an array containing 24 objects with name and age prop.
//constraints: each age randomly generated. should be 10 or 11;
//edge cases:

function decorateClassListWithAges(array){
  let resultArr = [];
  array.forEach(function(element) {
    let student = {};
    student['name'] = element;
    student['age'] = generateRandomAge(11, 10);
    resultArr.push(student);
  });
  return resultArr;
}

function generateRandomAge(max, min) {
  // var ageNum = Math.random() * 100,
  // if below 50 return 10, otherwise return 11
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
decorateClassListWithAges(classList);
