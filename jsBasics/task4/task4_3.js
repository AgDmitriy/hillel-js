// Створіть змінну radius і присвойте їй числове значення радіуса циліндра.
// Створіть змінну height і присвойте їй числове значення висоти циліндра.
// Обчисліть об'єм циліндра за формулою π * radius^2 * height і виведіть результат.
// Округліть кожне отримане значення до 2 значень після крапки

let radius = 3;
let height = 5; 
let cylinderVolume = Math.PI * Math.pow(radius, 2) * height;

console.log(cylinderVolume.toFixed(2))
