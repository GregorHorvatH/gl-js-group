console.log('QA 6');

// ====== todo ======
// const arr = [
//   {
//     id: 1,
//     title: 'sfgsfga',
//     date: Date.now(),
//     done: false,
//   },
//   {
//     id: 2,
//     title: 'rtyui',
//     date: Date.now(),
//     done: false,
//   },
//   {
//     id: 3,
//     title: 'cvbnm',
//     date: Date.now(),
//     done: false,
//   },
// ];
// console.log(arr);

// // === add ===
// function add(arr, newItem) {
//   return [...arr, newItem];
// }

// console.table(
//   add(arr, {
//     id: 4,
//     title: '788t86tr8r',
//     date: Date.now(),
//     done: false,
//   }),
// );

// // === update #2 ===
// function update(arr, id) {
//   return arr.map((item) => ({
//     ...item,
//     done: item.id === id ? !item.done : item.done,
//   }));
// }

// const newArr = update(arr, 2);
// console.table(newArr);

// // === delete #3 ===
// function remove(arr, id) {
//   return arr.filter((item) => item.id !== id);
// }

// console.table(remove(arr, 2));

// === sort ===
// const arr = [3, 1, 2, 10, 6, 4, 100, 5];
// console.log(arr);

// // arr.sort((a, b) => a - b);

// arr.sort((a, b) => {
//   if (a < b) return -1;
//   if (a > b) return 1;

//   return 0;
// });
// console.log(arr);

// === sort 2 ===
// const arr = [
//   {
//     id: 1,
//     title: 'sfgsfga',
//     date: Date.now(),
//     done: false,
//     age: 34,
//   },
//   {
//     id: 2,
//     title: 'rtyui',
//     date: Date.now(),
//     done: false,
//     age: 3,
//   },
//   {
//     id: 3,
//     title: 'cvbnm',
//     date: Date.now(),
//     done: false,
//     age: 25,
//   },
// ];

// arr.sort((a, b) => {
//   if (a.age < b.age) return -1;
//   if (a.age > b.age) return 1;

//   return 0;
// });
// console.log(arr);

// ==== reverse text ====
const str = 'abc';
console.log(str);

const reversedText = str.split('').reverse().join('');
console.log(reversedText);
