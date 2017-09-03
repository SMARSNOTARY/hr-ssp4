// preImmersive-[problem 04]-writingCodeWell-020-Fashion Inventory, part D

var currentInventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

// input: array of objects (a designer), with name and shoes properties,
//   shoes being an array of objects with name and price properties
// output: an array containing shoes described as "laced" or "lace-up", each
//   as an object with a property called "nameWords", whose value is an array
//   of the words in the name property, and a targetWordIndex property whose
//   value indicates the index of the "lace" word in the nameWords array

function listAllLacedShoes(inventory) {
// send inventory to listAllShoeNameWords() to put each shoe in correct format
  let shoeWords = listAllShoeNameWords(inventory);
// filter down to shoes whose nameWords include "laced" or "lace-up"
//   let onlyLacedShoes = shoeWords.filter(function(element) {
//      return (element['nameWords'].includes('laced') || element['nameWords'].includes('lace-up'));
//   });
  let onlyLacedShoes = shoeWords.filter(function(element) {
    return element.targetWordIndex != -1;
  });
  console.log(onlyLacedShoes);
  return onlyLacedShoes;
}

function listAllShoeNameWords(array) {
// make an empty wordsInName array to hold the info about each shoe
  let wordsInName = []
// for each designer
  // loop through the shoes array
  // for each shoe, split the name string into an array
  // use the length of this array as the value of the targetWordIndex property
  // push the object into the wordsInName array
  for (let i = 0; i < array.length; i++) {
    let designer = array[i];
    for (let j = 0; j < designer.shoes.length; j++) {
      let shoe = designer.shoes[j]['name'];
      let wordIndex = -1;
      let words = shoe.split(' ');
      if (words.indexOf('laced') !== -1) {
        wordIndex = words.indexOf('laced')
      }
      if (words.indexOf('lace-up') !== -1) {
        wordIndex = words.indexOf('lace-up')
      }
      wordsInName.push({'nameWords': words, 'targetWordIndex': wordIndex});
    }
  }
  console.log('wordsInName:',wordsInName);
  return wordsInName;
}

var results = listAllLacedShoes(currentInventory);
console.log(results);
