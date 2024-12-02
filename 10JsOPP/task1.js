
import { Book } from "./Book.js";
import { EBook } from "./EBook.js";

const potter = new Book('Harry Potter', 'J.K.Rowling', 2016);
//console.log(potter);
const mockingbird = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
//const wrongTitle = new Book('     ', 'Alan', 1878); // negative case for ERROR triggering 

//wrongTitle.printInfo();
potter.printInfo();
mockingbird.printInfo();

const midnight = new EBook('Midnight Sun', 'Stephenie Meyer', 2020, '.pdf');
// console.log(midnight);
midnight.printInfo()

midnight.format = '.epub';
console.log(midnight.format);

const books = [potter, mockingbird, midnight];
const oldestBook = Book.findOldestBook(books);
console.log("The oldest book is:");
oldestBook.printInfo();

const newEBook = EBook.createFromBook(mockingbird, '.mobi');
console.log("Newly created eBook:");
newEBook.printInfo();