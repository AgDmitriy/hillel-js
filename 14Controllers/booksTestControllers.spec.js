const BooksController = require('./controllers/BooksController');
const AccountsController = require('./controllers/AccountsController');
const booksList = require('./books');
let token;
let userId;
const { default: axios } = require('axios');
const usersList = require('./users');
const { faker } = require('@faker-js/faker');


test('Get All books', async () => {
    const response = await BooksController.getAllBooks();
    console.log(response.data)
})

describe.only('Adding books', () => {
    beforeAll(async () => {
        token = await AccountsController.getAuthToken();
        userId = await AccountsController.getUserId();
        const response = await BooksController.deleteAllUserBooks(userId, token);
        expect(response.status).toBe(204);
    })

    test('Add a book 1', async () => {
        const response = await BooksController.addBook(userId, booksList[0].isbn, token);
        console.log(response.data);
        expect(response.status).toEqual(201);
        expect(response.data.books[0].isbn).toBe(booksList[0].isbn);
    })
    
    test('Add a book 2', async () => {
        const response = await BooksController.addBook(userId, booksList[1].isbn, token);
        console.log(response.data);
        expect(response.status).toEqual(201);
        expect(response.data.books[0].isbn).toBe(booksList[1].isbn);
    })

    test('Add a book 3', async () => {
        const response = await BooksController.addBook(userId, booksList[2].isbn, token);
        console.log(response.data);
        expect(response.status).toEqual(201);
        expect(response.data.books[0].isbn).toBe(booksList[2].isbn);
    })
    
    test('Add a book 4', async () => {
        const response = await BooksController.addBook(userId, booksList[3].isbn, token);
        console.log(response.data);
        expect(response.status).toEqual(201);
        expect(response.data.books[0].isbn).toBe(booksList[3].isbn);
    })

    test('Add a book 5', async () => {
        const response = await BooksController.addBook(userId, booksList[4].isbn, token);
        console.log(response.data);
        expect(response.status).toEqual(201);
        expect(response.data.books[0].isbn).toBe(booksList[4].isbn);
    })
    
    test('Add a book 6', async () => {
        const response = await BooksController.addBook(userId, booksList[5].isbn, token);
        console.log(response.data);
        expect(response.status).toEqual(201);
        expect(response.data.books[0].isbn).toBe(booksList[5].isbn);
    })

    // test.only('Auth token test ', async () => {
    //     const response = await axios
        
    //     console.log(response.data.token);
    // })
})



// test.only('Remove all user`s books', async () => {
//     const response = await BooksController.deleteAllUserBooks(userId, token);
//     console.log(response.data);
// })