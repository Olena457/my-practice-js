// Н// Напишіть функцію caclculateAverage()
// яка приймає довільну кількість
// аргументів і повертає їхнє середнє значення.
// Додати перевірку, що аргументи це числа.

// function caclculateAverage(...args) {
//   let sum = 0;
//   let totalSum = 0;
//   for (const arg of args) {
//     if (typeof arg === 'number') {
//       sum += arg;
//       totalCounts += 1;
//     }
//   }
//   return sum / totalSum;
//   console.log(args);
// }

// console.log(caclculateAverage(1, 2, 3, 4));
// console.log(caclculateAverage('hello', 'hi'));
// _______________________________________________________________________
// const friends = [
//   { passport: '03005988', name: 'Joseph Francis Tribbiani Jr', age: 32, sex: 'm' },
//   { passport: '03005989', name: 'Chandler Muriel Bing', age: 33, sex: 'm' },
//   { passport: '03005990', name: 'Ross Eustace Geller', age: 33, sex: 'm' },
//   { passport: '03005991', name: 'Rachel Karen Green', age: 31, sex: 'f' },
//   { passport: '03005992', name: 'Monica Geller', age: 31, sex: 'f' },
//   { passport: '03005993', name: 'Phoebe Buffay', age: 34, sex: 'f' },
// ];
// getPasport() {
//     return triends.filter( frend =>)
// }

// Напишіть функцію getTotalBoysYears() яка порахує загальний вік хлопців.
// function getTotalBoysYears(friends) {
//   return friends
//     .filter(student => student.sex === 'm')
//     .reduce((total, item) => total + item.age, 0);
// }
//
// console.log(getTotalBoysYears(friends));
// _______________________________________________________________________

// Маємо масив об'єктів, який представляє список замовлень:
// Завдання:
// 1. Перевірте, чи всі замовлення виконані.
// 2. Поверніть список товарів з усіх виконаних замовлень.

// const orders = [
//   { id: 1, products: ['Milk', 'Bread'], status: 'completed' },
//   { id: 2, products: ['Eggs', 'Juice'], status: 'processing' },
//   { id: 3, products: ['Pasta', 'Spices'], status: 'completed' },
// ];
// const rest = orders.every(order => order.status === 'completed');
// const orderList = orders
//   .filter(order => order.status === 'completed')
//   .flatMap(order => order.products);
// console.log(rest);
// console.log(orderList);
