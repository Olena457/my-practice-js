// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

// const user = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };
// function checkKeyInObject(obj, key) {
//   for (const objkey in obj) {
//     if (objkey === obj) {
//       return true;
//     }
//   }
//   return false;
//   return Object.keys(obj).includes(key);
// }
// console.log(checkKeyInObject(user, 'name'));
// ____________________________________________________________
// маємо масив об'єктів, який представляє список товарів і їх цін:
// Завдання: Знайдіть суму вартості всіх товарів, які коштують більше 10 гривень.
// const products = [
//   { name: 'Milk', price: 20 },
//   { name: 'Bread', price: 10 },
//   { name: 'Eggs', price: 15 },
// ];
// const res = products.filter(product => product.price > 10)
//     .map(product => product.price)
//     .reduce((total.price) => (total + price, 0) )
// ________________________________________
// Є об'єкт і функція для підрахунку суми чисел.
// Виведіть у консоль результат виконання функції, якщо a = 3, b = 5.

// const obj = { num: 2 };

// function add(a, b) {
//   return this.num + a + b;
// }
// console.log(add.apply(obj, [3, 5]));
// const func = add.bind(obj, 3, 5);
// console.log(func());
// __________________________________________________________________
// Є два об'єкти, які описують деякі характеристики телефонів.
// Потрібно викликати метод showInfo, щоб він логував інформацію про кожний телефон,
// передаючи аргументом країну-виробник телефону.
// "HUAWEI" - "China", "SAMSUNG" - "South Korea".

// const tel = {
//   regNumber: 'AE8345FEDAS',
//   brand: 'HUAWEI',
//   showInfo(country) {
//     console.log(`${country} ${this.regNumber} ${this.brand}`);
//   },
// };

// const tel_2 = {
//   regNumber: 'AO8518FEGHT',
//   brand: 'SAMSUNG',
// };
// tel.showInfo('China');
// tel.showInfo.call(tel_2, 'South Korea');
// tel.showInfo.apply(tel_2, ['South Korea']);
// const fun = tel.showInfo.bind(tel_2, 'South Korea');
// fun();
// __________________________________________________________________________
//Напиши клас Rectangle який створює об'єкт
//з ​​властивостями height, width
//і методом calculateArea() для підрахунку прлощі прямокутника.
// class Rectangle {
//   constructor(height, width) {
//     this.height;
//     this.width;
//   }
//   calculateArea() {
//     return this.height * this.width;
//   }
// }
// const rectange = new Rectange(5, 10);
// console.log(rectangle.Calculate);
// _____________________________________________
//Напиши клас Client який створює об'єкт
//з ​​властивостями login, email
//Оголоси приватні властивості #login #email,
//доступ до яких зроби через геттер та сеттер login email
// class Client {
//   #login;
//   #email;

//   constructor(login, email) {
//     this.#login = login;
//     this.#email = email;
//   }
//   get login() {
//     return this.#login;
//   }
//   set login(newLogin) {
//     this.#login = newLogin;
//   }
//   get email() {
//     return this.#email;
//   }
//   set email(newEmail) {
//     this.#email = newEmail;
//   }
// }
// const user = new Client('Alis', ' Alis43@gmail.com');
// console.log(user.login);
// console.log(user.email);
// user.login = 'Anna';
// user.email = 'Anna43@gmail.com';
// console.log(user.login);
// console.log(user.email);
// ____________________________________________________
// Створи клас Phone який створює об'єкт з ​​властивістю price.
// Додай статичну властивість MAX_PRICE зі значенням 40000 - максимально допустима ціна телефону.
// Оголоси приватну властивість price доступ до якої буде через геттер та сеттер.
// Додай сетеру price перевірку значення параметра newPrice, що передається.Якщо воно більше за MAX_PRICE,
// сеттер нічого не робить, а якщо менше або дорівнює, то перезаписує ціну телефону.
// class Phone {
//   static MAX_PRICE = 40000;
//   #price;
//   constructor(price) {
//     this.price = price;
//   }
//   get price() {
//     return this.#price;
//   }
//   set price(newPrice) {
//     if (new Price() < Phone.MAX_PRICE) {
//       this.#price = newPrice;
//       return;
//     } else {
//       return;
//     }
//   }
// }
// const phone = new Phone(20000);
// console.log(phone.price);
// phone.price = 34000;
// console.log(phone.price);
