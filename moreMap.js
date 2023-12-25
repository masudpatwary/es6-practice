//**divided the number of 2

const number = [1, 2, 3, 4, 5];
const divition = number.map((d) => d / 2);
console.log(divition);

//**Map to Strong */

const friends = ["masud", "jobair", "jihad", "badsha"];
const friend = friends.map((frnd) => frnd[0]);
console.log(friend);

//** */

const products = [
  { id: 1, name: "laptop", color: "black", price: 52000 },
  { id: 1, name: "mobile", color: "white", price: 85000 },
  { id: 1, name: "headphone", color: "blue", price: 800 },
  { id: 1, name: "tab", color: "green", price: 35000 },
];

const productName = products.map((product) => product.name);
console.log(productName);

const product = products.map((product) => product.price);
console.log(product);
