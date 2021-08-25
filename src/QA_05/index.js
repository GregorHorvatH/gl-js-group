// import users, { xxx } from './users.js';

// console.log(users.map(({ name }) => name));
// console.log(xxx);

// const obj = { name: 'Bobby', age: 12 };

// console.log(obj);

// for (const key in obj) {
//   console.log(key);
// }

// ==== obj inheritance ====
// class Human {
//   constructor(name) {
//     this.name = name;
//   }

//   sayHello() {
//     console.log(this.name);
//   }
// }

// class Person extends Human {
//   constructor(name, age) {
//     super(name);
//     this.age = age;
//   }
// }

// const bobby = new Person('Bobby', 12);

// console.dir(bobby);

// for (const key in bobby) {
//   console.log(key);
// }

// ==== unique ====
//               0           4        7     9
// const numbers = [1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 2, 1, 4, 3, 2, 1]; // [1,2,3,4]

// const unique1 = numbers.filter((value, idx, arr) => arr.indexOf(value) === idx);
// console.log(unique1);

// const unique2 = Array.from(new Set(numbers));
// console.log(unique2);
