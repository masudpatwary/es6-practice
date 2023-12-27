const arr1 = [2, 5, 6, 2];
const arr2 = [6, 4, 9, 7];

const findMaxNum = (x, y) => {
  let number = [];
  const newArr = x.concat(y);
  for (const arr of newArr) {
    if (!number.includes(arr)) {
      number.push(arr);
    }
  }
  return Math.max(...number);
};

const result = findMaxNum(arr1, arr2);
console.log(result);
