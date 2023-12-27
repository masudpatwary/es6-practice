const number = [2, 4, 100, 500];
const sumReduce = number.reduce((previous, current) => previous + current, 0);
console.log(sumReduce);

const friends = ["masud", "eshak", "jobair"];
const totalReduce = friends.reduce(
  (previous, current) => previous + current,
  0
);
console.log(totalReduce);
