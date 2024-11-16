// Завдання 1

// Створіть функцію яка приймає два параметри: width і height.
// Усередині функції обчисліть площу прямокутника, перемноживши width на height та поверніть результат з функції.
// Викличте вашу функцію з аргументами (наприклад 5 і 10 і виведіть результат (площу прямокутника) в консоль.
// Реалізуйте функцію трьома способами (function declaration, function expression, arrow function)

console.log(`By using function declaration:`)

function calculateRectangleArea(width, height) {
    return width * height;
}
console.log(`Rectangle area = ${calculateRectangleArea(5, 10)}`)

console.log(`-----`)
console.log(`By using function expression:`)

const expressionRectangleArea = function (width, height) {
    return width * height;
}
console.log(`Rectangle area = ${expressionRectangleArea(5, 15)}`)

console.log(`-----`);
console.log(`By using arrow function:`);

const arrowRectangleArea = (width, height) => {
    return width * height;
}
console.log(`Rectangle area = ` + arrowRectangleArea(5, 20))