const number = [2, 4, 100, 500];
const sumReduce = number.reduce((previous, current) => previous + current, 0);
console.log(sumReduce);

const totalReduce = number.reduce((previous, current) => previous + current, 0);
console.log(totalReduce);
