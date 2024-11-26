// Створіть об'єкт book з такими властивостями:
// title: рядок, представляє назву книги.
// author: рядок, представляє автора книги.
// year: число, представляє рік видання книги.
// Деструктуризуйте назву та автора книги з об'єкта book.
// Виведіть деструктуризовані змінні в консоль

const book = {
    title: "Harry Potter and the Cursed Child",
    author: "J.K. Rowling",
    year: 2016,
};

const {title, author} = book;

// console.log(title + " by " + author)

console.log("Book title: ", title);
console.log("Book author: ", author);