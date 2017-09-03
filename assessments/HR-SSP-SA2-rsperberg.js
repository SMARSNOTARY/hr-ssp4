// Self-Assessment 2, Thursday, Aug 24, 2017

// #1
// Write a function, isTeenager, that takes in an array of information, salesTeam,
// and returns an array that lists the full names of each member of the sales team
// that is a teenager. Make sure the first and last names are separated by a space.

var salesTeam = [
  {name: {first: 'Aleen', last: 'Atkins'}, age: 26, sales: '$2314'},
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
  {name: {first: 'Vergie', last: 'Villescas'}, age: 25, sales: '$8712'}
];

  // input: salesTeam array of objects with name, age and sale properties
  // output: array containing the full names of the members who are teenagers
  // constraints: first and last names must be separated by a space

function isTeenager(salesTeam) {
  let teenagers = [];
  // loop through array, testing the age property < 20
  for (let i = 0; i < salesTeam.length; i++) {
    if (salesTeam[i].age < 20) {
      let fullName = salesTeam[i].name.first + ' ' + salesTeam[i].name.last;
  // push the person object (or maybe just the name.first and name.last properties) into an array
      teenagers.push(fullName);
    }
  }
  // return that array
  return teenagers;
}
isTeenager(salesTeam);

