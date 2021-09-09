import users from './users.js';

// === 8 ===
// const getUsersWithFriend = (users, friendName) => {
//   return users
//     .filter((user) => user.friends.includes(friendName))
//     .map(({ name }) => name);
// };

// console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
// console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

// === 9 ===
// const getNamesSortedByFriendsCount = (users) => {
//   return (
//     users
//       // .sort((a, b) => {
//       //   if (a.friends.length < b.friends.length) return -1;
//       //   if (a.friends.length > b.friends.length) return 1;

//       //   return 0;
//       // })
//       .sort((a, b) => a.friends.length - b.friends.length)
//       .map(({ name }) => name)
//   );
// };

// console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]
