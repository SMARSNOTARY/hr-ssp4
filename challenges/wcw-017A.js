// preImmersive-[problem 01]-writingCodeWell-017-Fashion Inventory part A

// input: array of objects (a designer), with name and shoes
//   properties, shoes being an array of objects with name and price properties
// output: a flat list with each line containing the designer name, shoe name and price
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

function renderInventory(array) {
  // create empty string to hold the flat list
  let list = '';
  // for each designer
    // loop through the shoes array
    // for each shoe, list the name (eg, the description) and the price
  for (let i = 0; i < array.length; i++) {
    let designer = array[i];
    let designerName = designer.name;
    for (let j = 0; j < designer.shoes.length; j++) {
      let shoe = designer.shoes[j];
      list += designerName + ', ' + shoe.name + ', ' + shoe.price + '\n';
    }
  }
  return list.trim();
}

// let list = renderInventory(currentInventory);
// console.log(list);

//Create helper functions as needed
