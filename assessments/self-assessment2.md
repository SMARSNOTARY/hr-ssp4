## Self Assessment 2, from hr-kevingavino, https://gist.github.com/hr-kevingavino/93671fd7d5ce31368def57d9169bba12

### Sales Team

You are managing a sales team and you are interested is analyzing some data related to their age and total sales. Take a moment to review the following data structure you will be analyzing:

   ```js
  var salesTeam = [{name: {first: 'Aleen', last: 'Atkins'}, age: 26, sales: '$2314'},
			{name: {first: 'Alvaro', last: 'Angelos'}, age: 55, sales: '$1668'},
			{name: {first: 'Denese', last: 'Dossett'}, age: 29, sales: '$9248'},
			{name: {first: 'Douglas', last: 'Denney'}, age: 53, sales: '$5058'},
			{name: {first: 'Earline', last: 'Erickson'}, age: 19, sales: '$18876'},
			{name: {first: 'Herman', last: 'Hazell'}, age: 25, sales: '$2746'},
			{name: {first: 'Homer', last: 'Hirth'}, age: 26, sales: '$474'},
			{name: {first: 'Hwa', last: 'Heidt'}, age: 53, sales: '$9607'},
			{name: {first: 'Hyon', last: 'Hampshire'}, age: 46, sales: '$13598'},
			{name: {first: 'Issac', last: 'Ingerson'}, age: 45, sales: '$5225'},
			{name: {first: 'Jeraldine', last: 'Joplin'}, age: 39, sales: '$2891'},
			{name: {first: 'Jin', last: 'Jeffrey'}, age: 17, sales: '$14402'},
			{name: {first: 'Joleen', last: 'Jolin'}, age: 45, sales: '$15736'},
			{name: {first: 'Jude', last: 'Jarrett'}, age: 53, sales: '$7557'},
			{name: {first: 'Magda', last: 'Mireles'}, age: 18, sales: '$1498'},
			{name: {first: 'Mistie', last: 'Montealegre'}, age: 31, sales: '$6920'},
			{name: {first: 'Nancy', last: 'Napoli'}, age: 49, sales: '$5255'},
			{name: {first: 'Regine', last: 'Rohrbaugh'}, age: 33, sales: '$7881'},
			{name: {first: 'Rolando', last: 'Riebel'}, age: 35, sales: '$8573'},
			{name: {first: 'Scarlett', last: 'Stagg'}, age: 36, sales: '$7126'},
			{name: {first: 'Sherron', last: 'Strawn'}, age: 36, sales: '$8848'},
			{name: {first: 'Susan', last: 'Shilling'}, age: 29, sales: '$8542'},
			{name: {first: 'Tama', last: 'Tworek'}, age: 16, sales: '$9200'},
			{name: {first: 'Tonisha', last: 'Taunton'}, age: 41, sales: '$5219'},
			{name: {first: 'Vergie', last: 'Villescas'}, age: 25, sales: '$8712'}];

   ```

#### Part 1

Write a function, `isTeenager`, that takes in an array of information, `salesTeam`, and returns an array that lists the full names of each member of the sales team that is a teenager. Make sure the first and last names are separated by a space.

   ```js
function isTeenager(salesTeam) {

}
   ```

#### Part 2

Copy/paste in the following `assertObjectsEqual` function and its invocation. If you confirm that `isTeenager` passes the test, move to Part 3. If you are receiving an error message, correct your `isTeenager` function.

```js
function assertObjectsEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('Test passed');
  } else {
    console.log('Test ['+testName+'] failed: expected ', expected, ' but got, ', actual );
    }
}

assertObjectsEqual(isTeenager(salesTeam), ["Earline Erickson", "Jin Jeffrey", "Magda Mireles", "Tama Tworek"], "Should return a list of all teenagers on the Sales Team");
```

#### Part 3
Write a function, `oldest`, that takes in an array of information, `salesTeam`, and returns a sentence with the person's first and last name, e.g. "The oldest student is Tina Fey". If there is a tie for the oldest student, return the student whose name appears first in the `salesTeam` array.

Start this part by writing a single invocation of the `assertObjectsEqual` function before you write the body of the `oldest` function. Once you complete writing the body of `oldest` you should see your test pass.

Note: Even though we are returning a string, not an object, `assertObjectsEqual` will still work as our test since we're using `JSON.stringify()`. An interesting read (whenever you finish this assessment) is [this](http://stackoverflow.com/a/9110389) question and answer on StackOverflow.

#### Part 4
Write a function, `tenThousandClub`, that takes in an array of information, `salesTeam`, and returns an array that lists the full names of each member of the sales team that is has sales greater than $10,000. Make sure the first and last names are separated by a space.

As with Part 3, start this part by writing a single invocation of the `assertObjectsEqual` function before you write the body of the `tenThousandClub` function. Once you complete writing the body of `tenThousandClub` you should see your test pass.

Hint: I recommend you write a helper function, `salesToNumber`, that converts the sales string to a number. Feel free to look up `parseInt()` and `slice()` on MDN if you don't remember how they work.
