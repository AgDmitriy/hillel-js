// Завдання 2: Конкатенація рядків та шаблонний рядок

// Створіть дві змінні, які містять імена двох осіб. 
// Використовуючи конкатенацію рядків, створіть новий рядок, який містить вітання для обох осіб. 
// Виведіть результат в консоль. Потім використайте шаблонний рядок для створення того ж вітання. Виведіть результат в консоль.

let groomName = 'Jim';
let brideName = 'Pam'; 
const couple = groomName + ' ' + '&' + ' ' + brideName;
const greetings = 'Greetings to ' + couple;
console.log(couple);
console.log(greetings);

let longGreetings = `Best wishes to ${groomName} and ${brideName} on this wonderful journey!`;
console.log(longGreetings)