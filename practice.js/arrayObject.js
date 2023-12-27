//  object

const masudur = [
  {
    name: "raquib",
    id: 1,
    hobby: "programmer",
    favorite: "quran",
  },
];
console.log(masudur[0].name);

var person = {
  name: "Zac",
  age: 33,
  likesCoding: true,
};

// arrow function

const calculateselary = (salery, tax, bonus = 0) => salery + tax + bonus;
const result = calculateselary(10, 20);
console.log(result);

const arr1 = [5, 98, 56, 87, 65, 7, 65];
const arr2 = [5, 98, 56, 87, 65, 7, 65];

const getUniqe = (a, b) => {
  const numbers = [...a, ...b];
  uniqe = [];
  for (const num of numbers) {
    if (!uniqe.includes(num)) {
      uniqe.push(num);
    }
  }
  return Math.max(...numbers);
};
const results = getUniqe(arr1, arr2);
console.log(results);

//**map-**//

const numArr = [5, 98, 56, 87, 65, 7, 65];
const numberArr = numArr.map((x) => x * 2);
const names = numArr.map((x) => x + 1);
const list = ["chal", "dal", "cini", "sapan"];

const listItems = list.map((x) => [...x]);
console.log(listItems);

const distruc = ({ name, address } = {
  name: "masudur",
  address: "chandpur",
  age: 27,
  hobby: "tour",
});

console.log(distruc.age);

const [a, b, c, ...x] = [5, 98, 56, 87, 65, 7, 65];


