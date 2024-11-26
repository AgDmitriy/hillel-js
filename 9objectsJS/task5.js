// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

const users = [
    {name: "Mark", email: "Mark@mail.com", age: 30},
    {name: "Edward", email: "Edward@mail.com", age: 33},
    {name: "Rachel", email: "Rachel@mail.com", age: 28}
];

for (const {name, email, age} of users) {
    console.log(`${name} is ${age} years old. ${name}'s email is ${email}.`)
}