const data = {
  count: 5000,
  data: [
    {
      name: "masudur rahman",
      age: 25,
      address: "chandpur",
    },
    { nameis: "sagor", age: 22 },
  ],
};

const firstResult = data.data[1].age;

console.log(firstResult);

const moreChain = {
  Owner: "masudur rahaman",
  shared: "eshak khan",
  join: "jobair khan",
  address: {
    name: "chandpur",
    thana: "chandpur",
    wordNo: {
      chandra: "12 No chandra union",
      gram: {
        name: "bakharpur",
        paserGram: "vingulia",
      },
    },
  },
};
console.log(moreChain.address.wordNo.gram.paserGram);

// ** optional Chaining ?. (x?.)

const optionalMoreChain = {
  Owner: "masudur rahaman",
  shared: "eshak khan",
  join: "jobair khan",
  address: {
    name: "chandpur",
    thana: "chandpur",
    wordNo: {
      chandra: "12 No chandra union",
      gram: {
        name: "bakharpur",
        paserGram: "vingulia",
      },
    },
  },
};

console.log(optionalMoreChain.address.wordNo?.gram?.paserGram);
