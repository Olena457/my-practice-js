// Написати функцію, котра створить новий масив в якому
// не буде значень, які приводяться до false

// const array = [1, 0, 54, 'doc', null, 'jpg', undefined, '', 'png', 'exe', false, 'mp4', NaN, 'hbs'];
// function clearArray(array) {
//   const newArray2 = [];
//   for (const value of array) {
//     if (value) {
//       newArray2.push;
//     }
//   }
// }

// Перевірити чи всі студенти старші 18 років.
// _______________________________________________________
// const students = [
//   { name: 'Alex', age: 19 },
//   { name: 'Stas', age: 22 },
//   { name: 'Mike', age: 22 },
//   { name: 'Den', age: 20 },
// ];
// const adult = students.every(item => {
//   return item.age > 18;
// });
// console.log(adult);
// -----------------------------------------------------------------------
// Є масив користувачів, кожен з яких має поля id та name.
//  Потрібно знайти той де id = 1 і виведемо ім'я цього користувача у консоль

// let users = [
//   { id: 1, name: 'John' },
//   { id: 2, name: 'Pete' },
//   { id: 3, name: 'Mary' },
// ];
// const firstUser = users.find(user => user.id === 1);
// console.log(users.name);

// Зібрати в allTopics масив всіх предметів всіх курсів.
//Виконати фільтрацію, залишивши в allTopics тільки унікальні елементи.

// const courses = [
//   {
//     name: 'Basic HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'GitHub Desctop'],
//   },
//   {
//     name: 'Intermediate HTML+CSS',
//     topics: ['VSCode', 'HTML', 'CSS', 'GitHub', 'Git', 'Terminal'],
//   },
//   {
//     name: 'Basic JavaScript',
//     topics: [
//       'VSCode',
//       'Type system',
//       'Loops',
//       'Function',
//       'Git',
//       'Conditions',
//       'Classes',
//       'GitHub',
//       'DOM',
//     ],
//   },
//   {
//     name: 'Intermediate JavaScript',
//     topics: ['VSCode', 'NPM', 'Bundlers', 'Transpiling', 'Git', 'Promises', 'AJAX', 'GitHub'],
//   },
// ];
// const allTopics = courses
//     .flatMap(cours => cours.topics);
//     .filter((item, index, array) => array.indexOf(item === index))
// console.log(allTopics)
