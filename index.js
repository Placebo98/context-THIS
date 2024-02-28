function welcome() {
  console.log("Welcome", this);
}

const person = {
  name: "Oleg",
  age: 25,
  maritalStatus: "single",
  sayWelcome: welcome,
  sayWelcomeWindow: welcome.bind(window),
  logInfo: function (job, phone) {
    console.group(`${this.name} info:`);
    console.log(`Name is ${this.name}`);
    console.log(`Age is ${this.age}`);
    console.log(`Marital status is ${this.maritalStatus}`);
    console.log(`Job is ${job}`);
    console.log(`Phone is ${phone}`);
    console.groupEnd();
  },
};

//////////////////////////////////////////////////////////// Тест 1 //////////////////////////
// const valya = {
//   name: "Valya",
//   age: 77,
//   maritalStatus: "widow",
// };
// person.logInfo();
// person.logInfo.call(valya, "Backend", "1812"); /// метод сall задает контекс и сам же вызывает эту функцию, ее не нужно вызывать
// person.logInfo.apply(valya, ["Backend", "564654646"]); //// отличается от сall тем, что всегда должно быть только 2 параметра и второй всегда МАСИВ, в который мы и передаем нужные нам фргументы
// person.logInfo.bind(valya, "Frontend", "+380990512501")(); /// метод bind не вызывает фукнцию, а создает новую и навстегда привязывает контекст, поэтому вызываем фукнкцию сами.

// const fnValyaLogInfo = person.logInfo.bind(valya);
// fnValyaLogInfo("Frontend", "+380990512501"); // вызов функции

////////////////////////////////////////////////////////////// Тест 2 ////////////////////////////
// Object.prototype.sayHi = function () {
//   console.log("Hi" + " " + this.name);
// };

// const nastya = Object.create(person);
// nastya.name = "Nastya";
// nastya.age = "20";
// nastya.maritalStatus = "relationship";

// person.logInfo.apply(nastya, []);

// nastya.sayHi();

// console.log(nastya.age);
// nastya.logInfo();

///////////////////////////////////////////////////---------Практика-----------/////////////////////////////////

const array = [1, 2, 3, 4, 5, 6];

///....Задача: написать функуцию, которая позволит умножить каждое из значений данного масива на число которое мы будем передавать

//////----------НЕ самый лучший вариант -----------------/////////////
// function multBy(arr, n) {
//   return arr.map((el) => el * n);
// }
// console.log(multBy(array, 2));

////////////Вариант более универсальный и удобнее /////////////////

// Array.prototype.multBy = function (n) {
//   return this.map((el) => el * n);
// };

// console.log(array.multBy(6));
