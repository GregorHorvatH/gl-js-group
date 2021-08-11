// /*
//  * Типов транзацкий всего два.
//  * Можно положить либо снять деньги со счета.
//  */
// const Transaction = {
//   DEPOSIT: 'deposit',
//   WITHDRAW: 'withdraw',
// };

// /*
//  * Каждая транзакция это объект со свойствами: id, type и amount
//  */

// const account = {
//   // Текущий баланс счета
//   balance: 0,

//   // История транзакций
//   transactions: [],

//   /*
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
//    */
//   createTransaction(amount, type) {
//     return { amount, type, id: this.transactions.length };
//   },

//   /*
//    * Метод отвечающий за добавление суммы к балансу.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций
//    */
//   deposit(amount) {
//     this.balance += amount;
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//   },

//   /*
//    * Метод отвечающий за снятие суммы с баланса.
//    * Принимает сумму танзакции.
//    * Вызывает createTransaction для создания объекта транзакции
//    * после чего добавляет его в историю транзакций.
//    *
//    * Если amount больше чем текущий баланс, выводи сообщение
//    * о том, что снятие такой суммы не возможно, недостаточно средств.
//    */
//   withdraw(amount) {
//     this.balance -= amount;
//     this.transactions.push(
//       this.createTransaction(amount, Transaction.WITHDRAW),
//     );
//   },

//   /*
//    * Метод возвращает текущий баланс
//    */
//   getBalance() {
//     return this.balance;
//   },

//   /*
//    * Метод ищет и возвращает объект транзации по id
//    */
//   getTransactionDetails(id) {},

//   /*
//    * Метод возвращает количество средств
//    * определенного типа транзакции из всей истории транзакций
//    */
//   getTransactionTotal(type) {
//     return this.transactions
//       .filter((item) => item.type === type)
//       .reduce((acc, { amount }) => acc + amount, 0);
//   },
// };

// console.log(account.getBalance());

// account.deposit(100);
// account.deposit(100);
// account.deposit(100);
// account.deposit(100);
// console.log(account.getBalance());

// account.withdraw(150);
// console.log(account.getBalance());

// console.log(account.transactions);
// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));

// ============= task 3.06 =============
// у мене запитання по домашці завдання 6.
// кидаю код сдюди. питання чому в рядках 19 та 20 різна поведінка коду?
console.log('==== task 3.06 ====');

// Задание 6
// Напиши функцию calculateTotalPrice(allProdcuts, productName),
// которая получает массив объектов и имя продукта (значение свойства name).
// Возвращает общую стоимость продукта (цена * количество).

// Вызовы функции для проверки работоспособности твоей реализации.

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
  { name: 'РадАр', price: 1300, quantity: 4 },
];

const calculateTotalPrice = function (allProdcuts, productName) {
  let sum = 0;

  for (const obj of allProdcuts) {
    if (obj.name.toLowerCase() === productName.toLowerCase()) {
      sum += obj.price * obj.quantity;
    }
  }

  return sum;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200 / 10400
console.log(calculateTotalPrice(products, 'Дроид')); // 2800
