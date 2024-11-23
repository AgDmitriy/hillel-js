// Завдання 5: Об'єднання масивів

// Вам потрібно створити програму, яка об'єднає два масиви в один

// Ось кроки, які вам потрібно виконати:

// Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
// Створіть новий масив, який містить всі елементи з обох вихідних масивів.
// Виведіть отриманий об'єднаний масив на консоль.

const firstArray = [100, true, 'string', ['additionalArray', 50]];
const secondArray = [0, false, 999];
const concatenatedArray = firstArray.concat(secondArray);
console.log(concatenatedArray);