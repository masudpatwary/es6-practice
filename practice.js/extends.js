class commonClass {
  name;
  address;
  podobi;
  constructor(name, address, podobi) {
    this.name = name;
    this.address = address;
    this.podobi = podobi;
  }
  fidback(tnx) {
    console.log(`M'r ${this.name} Thank you !`);
  }
}

class firstClass extends commonClass {
  jobType;
  constructor(name, address, podobi, jobType) {
    jobType;
    super(name, address, podobi);
    this.jobType = jobType;
  }
  ruting(ruting) {
    console.log(`${ruting} sokale office e jete hoy`);
  }
}

class secondClass extends commonClass {
  attitudeType;
  constructor(name, address, podobi, attitudeType) {
    super(name, address, podobi);
    attitudeType;
    this.attitudeType = attitudeType;
  }
  cholafera(acoron) {
    console.log(`${acoron} tahar khub e valo`);
  }
}

const result = new firstClass("Masud", "Chandpur", "Meneger", "tech");
console.log(result);
result.ruting("Protidin");
result.fidback("Masud");

const result2 = new secondClass("Eshak", "Dhaka", "Team leader", "exilent");
console.log(result2);
result2.cholafera("Babohar");
