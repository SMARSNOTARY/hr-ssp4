// preImmersive-[problem 02]-writingCodeWell-018-Fashion Inventory part B

// input: array of objects (a designer), with name and shoes
//        properties, shoes being an array of objects with name and price properties
// output: an object with one property, designers, which is an array of objects, each
//         containing a name and an averagePrice property
// constraints:
// edge cases:
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
function calculateAveragePricePerDesigner(array) {
  let result = {};
  result['designers'] = [];
  for (let i = 0; i < array.length; i++) {
    let designer = array[i];
    let designerName = designer.name;
    let shoesTotalCost = 0;
    let numberOfShoes = designer.shoes.length;
    for (let j = 0; j < numberOfShoes; j++) {
      let shoe = designer.shoes[j];
      shoesTotalCost += shoe.price;
    }
    let averagePrice = shoesTotalCost / numberOfShoes;
    result['designers'][i] = {'name': designerName, 'averagePrice': averagePrice};
  }
  return result;
}

var results = calculateAveragePricePerDesigner(currentInventory);
console.log(results);
