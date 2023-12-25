const number = [45, 45, 2, 48, 54, 8, 254];
const numberSum = (x) => x * 5;

const numberMap = number.map(numberSum);
console.log(numberMap);

const nameIs = number.map((x) => x * 2);
console.log(nameIs);

const monerMotoName = number.map((a) => a + 1);
console.log(monerMotoName);

const anyName = number.map((x) => x + 5);
console.log(anyName);

const anyNames = [2, 4, 6].map((x) => x + 5);
console.log(anyNames);
