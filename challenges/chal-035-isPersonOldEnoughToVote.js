// challenge-035-isPersonOldEnoughToVote

/*
Write a function called “isPersonOldEnoughToVote”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToVote” returns whether the given person is old enough to vote.

Notes:
* The legal voting age in the United States is 18.

var obj = {
  age: 19
};
var output = isPersonOldEnoughToVote(obj);
console.log(output); // --> true

Your Code Should Pass:

describe("isPersonOldEnoughToVote", function() {
  it("should return a boolean", function() {
    var person = {
      age: 55
    };
    expect(typeof isPersonOldEnoughToVote(person)).toBe("boolean");
  });
  it("should return true if a person has an age of over 18", function() {
    var person = {
      age: 55
    };
    expect(isPersonOldEnoughToVote(person)).toBe(true);
  });
  it("should return true if a person has an age of 18", function() {
    var person = {
      age: 18
    };
    expect(isPersonOldEnoughToVote(person)).toBe(true);
  });
  it("should return false if a person has an age under 18", function() {
    var person = {
      age: 15
    };
    expect(isPersonOldEnoughToVote(person)).toBe(false);
  });
});
*/

function isPersonOldEnoughToVote(person) {
    if (person === undefined) {
    return false;
  }
  return person.age >= 18;
}

// Amanda Loftus
function isPersonOldEnoughToVote(person) {
  return person.age >= 18;
}

// Kanak Lata
function isPersonOldEnoughToVote(person) {
 return person.age >= 18 ? true : false;
}

// Dino Firmalino
const isPersonOldEnoughToVote = (obj) => obj.age >= 18;
