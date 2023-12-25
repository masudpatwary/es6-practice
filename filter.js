//**max Number Filter

const number = [45, 8, 2, 78, 65, 7, 24, 74, 50, 35, 4, 96];
const maxNumFilter = number.filter((max) => max > 50);
console.log(maxNumFilter);

//**min Number Filter

const minNumFilter = number.filter((min) => min < 30);
console.log(minNumFilter);

//**/Price Filter */

const products = [
  { id: 1, name: "laptop", color: "black", price: 52000 },
  { id: 1, name: "mobile", color: "white", price: 85000 },
  { id: 1, name: "headphone", color: "blue", price: 800 },
  { id: 1, name: "tab", color: "green", price: 35000 },
];

const findMaxPrice = products.filter((product) => product.price > 50000);
console.log(findMaxPrice);
