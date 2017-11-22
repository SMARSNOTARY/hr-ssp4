// challenge-134-convertScoreToGradeWithPlus

/*
Write a function called “convertScoreToGradeWithPlusAndMinus”.

Given a score, “convertScoreToGradeWithPlusAndMinus” returns a string representing the letter grade corresponding to the given score.

Notes:
* (100 - 90) –> ‘A’
* (89 - 80) –> ‘B’
* (79 - 70) –> ‘C’
* (69 - 60) –> ‘D’
* (59 - 0) –> ‘F’
* If the given score is greater than 100 or less than 0, it should return ‘INVALID SCORE’.
* If the score is between the 0 and 2 (inclusive) of a given range, return the letter with a ‘-‘
* If the score is be the 8 and 9 (inclusive) of a given range, return the letter with a ‘+’
* There are is no F+ and there is no F-.

var output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
*/

function convertScoreToGradeWithPlusAndMinus(score) {
  if ( score > 100 || score < 0 ) {
    return 'INVALID SCORE';
  }
  if (score === 100 ) {
    return 'A+';
  } else if ( score >= 90 ) {
    return addPlusOrMinus(score, 'A');
  } else if ( score >= 80 ) {
    return addPlusOrMinus(score, 'B');
  } else if ( score >= 70 ) {
    return addPlusOrMinus(score, 'C');
  } else if ( score >= 60 ) {
    return addPlusOrMinus(score, 'D');
  } else {
    return 'F';
  }

  function addPlusOrMinus(score, grade) {
    lastDigit = score % 10;
    if (lastDigit > 7) {
      return grade + '+';
    } else if (lastDigit < 3) {
      return grade + '-';
    } else {
      return grade;
    }
  }
}
