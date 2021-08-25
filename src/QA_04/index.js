// === 1 ===
// const repeat = function (n, callBack) {
//   for (let i = 0; i < n; i += 1) {
//     callBack(i);
//   }
// };

// const labels = [];

// repeat(5, function (value) {
//   labels.push(`Label ${value + 1}`);
// });

// console.log(labels); // ["Label 1", "Label 2", "Label 3", "Label 4", "Label 5"]

// === iterator ===
// const obj = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]: function () {
//     const last = this.to;
//     let current = this.from;

//     return {
//       next: function () {
//         return {
//           value: current,
//           done: current++ > last,
//         };
//       },
//     };
//   },
// };

// // for (const value of obj) {
// //   console.log(value); // 1, 2, 3, 4, 5
// // }

// const iter = obj[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
//   from: 1,
//   to: 5,

//   [Symbol.iterator]: function () {
//     const last = this.to;
//     let current = this.from;

//     return {
//       next: function () {
//         return {
//           value: current,
//           done: current++ > last,
//         };
//       },
//     };
//   },
// };

// // for (const value of obj) {
// //   console.log(value); // 1, 2, 3, 4, 5
// // }

// const iter = obj[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

// === obj ===
// const obj = {
//   name: 'bobby',
//   sayHello() {},
// };

// console.log(
//   Object.entries(obj).map(([key, value]) => typeof value !== 'function'),
// );

// === 4 ===
// const users = [
//   {
//     id: 222,
//     name: 'Bobby',
//     roles: [
//       { id: 1, name: 'admin' },
//       { id: 2, name: 'user' },
//     ],
//   },
//   {
//     id: 333,
//     name: 'Peter',
//     roles: [
//       { id: 2, name: 'user' },
//       { id: 3, name: 'accountant' },
//     ],
//   },
// ];

// console.log(users.map(({ name }) => name));
// console.log(users.find(({ id }) => id === 333).roles);

// === filter ===
const fruits = [
  { name: 'apples', quantity: 200, isFresh: true },
  { name: 'grapes', quantity: 150, isFresh: false },
  { name: 'bananas', quantity: 100, isFresh: true },
];

console.log(fruits.filter(({ isFresh }) => isFresh));
