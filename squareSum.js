//* practice problame *//3

const squareSum = (numberArr) => {
  let sum = 0;
  for (const number of numberArr) {
    const numberPow = Math.pow(number, 2);
    sum = sum + numberPow;
  }
  const avg = sum / numberArr.length;
  return avg.toFixed(2);
};

const numbers = [1, 2, 3];
const result = squareSum(numbers);
console.log(result);
