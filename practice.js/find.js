//**max Number find

const number = [9, 6, 78, 6];
const maxFindNumber = number.find((max) => max < 45);
console.log(maxFindNumber);

//**min Number find

const findMinNumber = number.find((min) => min < 10);

//**/Price find */

const products = [
  { id: 1, name: "laptop", color: "black", price: 52000 },
  { id: 1, name: "mobile", color: "white", price: 85000 },
  { id: 1, name: "tab", color: "green", price: 35000 },
  { id: 1, name: "headphone", color: "blue", price: 800 },
];

const findMaxPrice = products.find((product) => product.price < 50000);
console.log(findMaxPrice);
