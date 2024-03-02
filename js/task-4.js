// Напишіть функцію checkKeyInObject(), яка приймає 2 параметри obj і key.
// Функція буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true, в іншому випадку - false.

const user = {
  name: 'Igor',
  car: 'Mercedes',
  carColor: 'black',
};
function checkKeyInObject(obj, key) {
  //   for (const objkey in obj) {
  //     if (objkey === obj) {
  //       return true;
  //     }
  //   }
  //   return false;
  return Object.keys(obj).includes(key);
}
console.log(checkKeyInObject(user, 'name'));
