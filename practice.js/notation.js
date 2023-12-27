//**Dot Notation *//

const student = {
  name: "sohel",
  address: {
    zilla: "candpur",
    upozilla: "chandpur sadar",
    gram: {
      union: {
        chandra: "12No",
        areia: {
          aria: "bakharpur",
        },
      },
    },
  },
};

const studentDitals = student.address.gram.union.areia.aria;
console.log(studentDitals);

//**Bracket Notation */
const BracketNotation = student["address"]["gram"]["union"]["areia"]["aria"];
console.log(BracketNotation);

// other Bracket Notation
const main = "chandra";
const thikana = "aria";
const mainSport = student["address"]["gram"]["union"][main];

console.log(mainSport);

const mainSports = student["address"]["gram"]["union"]["areia"][thikana];
console.log(mainSports);
