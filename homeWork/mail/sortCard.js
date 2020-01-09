class SimpleMembership {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMembership {
  constructor(name) {
    this.name = name;
    this.cost = 150;
  }
}

class PremiumMembership {
  constructor(name) {
    this.name = name;
    this.cost = 500;
  }
}

class MemberFactory {
  static list = {
    simple: SimpleMembership,
    standard: StandardMembership,
    premium: PremiumMembership
  };

  create(name, type = "simple") {
    const Membership = MemberFactory.list[type] || MemberFactory.list.simple;
    const member = new Membership(name);
    member.type = type;
    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    };
    return member;
  }
}

const factory = new MemberFactory();

const members = [
  factory.create("Vladilen", "simple"),
  factory.create("Elena", "premium"),
  factory.create("Vasilisa", "standard"),
  factory.create("Ivan", "premium"),
  factory.create("Petr")
];

members.forEach(m => {
  m.define();
});
// if (this.index) {
//   // let bag = this.list.baggage;
//   // let seat = this.list.seat;

//   // if ("baggage" in this.list === false || this.list.baggage === "no") {
//   //   bag = "";
//   // }
//   // if ("seat" in this.list === false || this.list.seat === "no") {
//   //   seat = "No seat assiment";
//   // }
//   // let result = `From ${this.list.dep} take ${this.list.transType} ${this.list.transNumb} to ${this.list.dest} ${seat} ${bag}`;
//   // return result;
// } else {
//   let bag = this.list.baggage;
//   let seat = this.list.seat;

//   if ("baggage" in this.list === false || this.list.baggage === "no") {
//     bag = "";
//   }
//   if ("seat" in this.list === false || this.list.seat === "no") {
//     seat = "No seat assiment";
//   }
//   let result = `Take ${this.list.transType} ${this.list.transNumb} from ${this.list.dep} to ${this.list.dest} ${seat} ${bag}`;
//   return result;
// }
