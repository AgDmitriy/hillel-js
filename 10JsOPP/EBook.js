// В окремому файлі створіть клас "Електронна книга" (EBook), який буде успадковувати властивості та методи класу Book. 
// Додайте до класу EBook нову властивість, наприклад, "формат файлу". 
// Сторіть метод printInfo для EBook таким чином щоб друкувалась вся доступна інформація про екземляр EBook 
// (все те саме що і для Book але ще формат файлу). Створіть інстанс (екземпляр) класу EBook та викличте метод printInfo

// Створіть статичний метод для EBook який буде приймати як аргументи екземпляр класу Book і формат файлу як рядок ****та повертати екземпляр класу EBook

import { Book } from "./Book.js";

export class EBook extends Book {

    static createFromBook(book, format) {
        if (!(book instanceof Book)) {
            throw new Error("Invalid input: an instance of Book is required.");
        }
        return new EBook(book.title, book.author, book.year, format);
    }
    
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    get format() {
        return this._format;
    }
    
    set format(value) {
        const allowedFormats = ['.pdf', '.epub', '.mobi'];
        if (!allowedFormats.includes(value)) {
            throw new Error(`Format must be one of: ${allowedFormats.join(', ')}.`);
        }
        this._format = value;
    }

    printInfo() {
            console.log(`Book title: ${this.title}. Author: ${this.author}. Year: ${this.year}. Format: ${this.format}`);
    }
}


