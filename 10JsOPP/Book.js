// Створіть клас "Книга" (Book) з властивостями, такими як "назва", "автор" і "рік видання". 
// Додайте метод до класу Book, який буде виводити повний опис книги наприклад printInfo. 
// Створіть кілька об'єктів цього класу та викличте printInfo для кожного екземпляру.

// Геттери та сеттери: Додайте геттери та сеттери для всіх властивостей класу Book та EBook. 
// В сеттерах необхідно додати валідацію для переданих значень. 
// Використовуйте їх для зміни та отримання значень властивостей.

// Створіть статичний метод в класі Book, який буде приймати масив об'єктів(екземрлярів) книг та 
// повертати найдавнішу книгу за роком видання. Викличте його в коді передавши масив книг (серед 
//     них мають бути екземляри обох класів Book та EBook)


export class Book {
    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error("Invalid input: an array of books is required.");
        }
        return books.reduce((oldest, current) =>
            current.year < oldest.year ? current : oldest
        );
    }    

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
        
    }

    get title() {
        return this._title;
    }
    
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Title must contain at least 2 alphanumeric symbols.");
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }
    
    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error("Author name must be a non-empty string.");
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }
    
    set year(value) {
        if (typeof value !== 'number' || value < 0 || !Number.isInteger(value)) {
            throw new Error("Year must be a positive integer.");
        }
        this._year = value;
    }    

    printInfo() {
            console.log(`Book title: ${this.title}. Author: ${this.author}. Year: ${this.year}`)
    }
}


