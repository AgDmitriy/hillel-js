const BooksController = require('./controllers/BooksController');
const AccountsController = require('./controllers/AccountsController');
const booksList = require('./books');
let token;
let userId;
const { default: axios } = require('axios');
const usersList = require('./users');
const { faker } = require('@faker-js/faker');




describe.only('Creating users', () => {
    beforeAll(async () => {
        // token = await AccountsController.getAuthToken();
        // userId = await AccountsController.getUserId();
        // const response = await BooksController.deleteAllUserBooks(userId, token);
        // expect(response.status).toBe(204);
    })

    test('Create new user 1', async () => {
        const userName = faker.internet.username();
        const userPassword = faker.internet.password() + '1@';

        console.log(`userName: ${userName}`);
        console.log(`userPassword: ${userPassword}`)

        const response = await AccountsController.createNewUser(userName, userPassword);
        console.log(response.data);
        expect(response.status).toBe(201)
    })

})