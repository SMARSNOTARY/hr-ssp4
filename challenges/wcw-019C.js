// preImmersive-[problem 03]-writingCodeWell-019-Fashion Inventory, part C

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


// function listAllBlackShoes(array) {
// let list = [];
//   for (let i = 0; i < array.length; i++) {
//     let designer = array[i];
//     let designerName = designer.name;
//     for (let j = 0; j < designer.shoes.length; j++) {
//       let shoe = designer.shoes[j];
//       list.push(designerName + ', ' + shoe.name + ', ' + shoe.price);
//     }
//   }
//   let onlyBlackShoes = list.filter(function(element) {
//      return element.includes('black');
//   })
//   return onlyBlackShoes.join('\n');
// }

function listAllBlackShoes(inventory) {
  let list = listAllShoesAsArrayOfStrings(inventory);
  let onlyBlackShoes = list.filter(function(element) {
     return element.includes('black');
  })
  return onlyBlackShoes.join('\n');
}

function listAllShoesAsArrayOfStrings (array) {
  let list = [];
  for (let i = 0; i < array.length; i++) {
    let designer = array[i];
    let designerName = designer.name;
    for (let j = 0; j < designer.shoes.length; j++) {
      let shoe = designer.shoes[j];
      list.push(designerName + ',' + shoe.name + ',' + shoe.price);
    }
  }
  return list;
}

var blackShoes = listAllBlackShoes(currentInventory);
console.log(blackShoes);
