class ItComputer {
  name;
  address;
  id;

  constructor(name, address, id) {
    this.name = name;
    this.address = address;
    this.id = id;
  }

  biseshDrostobbo(agamikal) {
    console.log(`${agamikal} sokol karjo krom of`);
  }
}

const programme = new ItComputer("masud", "Chandpur", 1205);
console.log(programme);
programme.biseshDrostobbo("AgamiKal");

const business = new ItComputer("rupkotha", "Chandra Bazar", "12No Chandra");
console.log(business);
business.biseshDrostobbo('Ajke');
