// Напишіть функцію яка буде приймати 2 аргументи - довільний текст як перший аргумент та кількість мілісекунд як другий аргумент. 
// Функція повинна вивести в консоль переданий текст через вказану кількість мілісекунд


function delayedConsoleLog(text, delay) {
    setTimeout(function () {
        console.log(text);
    }, delay);
}

console.log('start');
delayedConsoleLog('Timeout text', 10000);



