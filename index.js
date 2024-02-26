// const person = {
//   name: "Oleg",
//   age: 25,
//   maritalStatus: "single",
//   greet: function () {
//     console.log("Greet!!!");
//   },
// };

const person = new Object({
  name: "Oleg",
  age: 25,
  maritalStatus: "single",
  greet: function () {
    console.log("Greet!!!");
  },
});

Object.prototype.sayHi = function () {
  console.log("Hi" + " " + this.name);
};

const nastya = Object.create(person);
nastya.name = "Nastya";

const valya = Object.create(person);
valya.name = "Valya";

nastya.sayHi();
console.log(nastya.age);

valya.sayHi();
