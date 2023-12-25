//* practice - 1*\\;

const multiply = (a, b, c) => {
  const sum = a * b * c;
  return sum;
};

const result = multiply(40, 60, 50);
console.log(result);

//**Practice - 2 */

const sentences = `I am a web devoloper
I love to code 
I love to eat biriyani`;

console.log(sentences);

//**Practice - 3 */

const nameIs = (firstName, lastNmae = "Patwary") => {
  const fullName = firstName + " " + lastNmae;
  return fullName;
};

const resultName = nameIs("Masud");
console.log(resultName);
