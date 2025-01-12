const axios = require('axios');

const isbn0 = "9781449325862";
const userId = "dc9c260e-a092-4313-a207-ad65288af058";

describe('Bookstore API', () => {

    describe.skip('Public request', () => {
    
        test("Get all books list", async () => {
        const response = await axios.get('https://bookstore.toolsqa.com/BookStore/v1/Books', {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        console.log(response.data.books[0]);
        expect(response.status).toEqual(200);
        expect(response.data.books.length).toBe(8);
        expect(response.data.books[0].title).toBe('Git Pocket Guide');
    });
    
    test("Get book by isbn", async() => {
        const response = await axios.get(`https://bookstore.toolsqa.com/BookStore/v1/Book?ISBN=${isbn0}`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log(response.data);
        expect(response.status).toEqual(200);
        expect(response.data.isbn).toBe(isbn0);
         expect(response.data.title).toBe('Git Pocket Guide');
        });
    });

    describe('Private requests', () => { 
        
        const axiosInstance = axios.create ({
        baseURL: 'https://bookstore.toolsqa.com/BookStore/v1',
        validateStatus: function (status) {
            return true;
         }
    })

    test("Add book to user", async () => {
        const response = await axiosInstance.post(`/Books`, {
            "userId": userId,
            "collectionOfIsbns": [
            {
                "isbn": isbn0
            }
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkJvb3VzZXIiLCJwYXNzd29yZCI6IlF3ZXJ0eTEyMyEiLCJpYXQiOjE3MzY0NzU3OTF9.QCMbkPzKKA1ObETAACE3cYxquZmlV-1xCSsIy7roAmY'
        }
    });
        console.log(response.data);
        expect(response.status).toEqual(201);
        expect(response.data.books[0].isbn).toBe(isbn0);
    });

    test.only("Add book with invalid token", async () => {
        const response = await axiosInstance.post(`/Books`, {
            "userId": userId,
            "collectionOfIsbns": [
            {
                "isbn": isbn0
            }
        ]
    }, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6IkJvb3VzZXIiLCJwYXNzd29yZCI6IlF3ZXJ0eTEyMyEiLCJpYXQiOjE3MzY0NzU3OTF9.QCMbkPzKKA1ObETAACE3cYxquZmlV-1xCSsIy7roAmY'
        }
    });
        console.log('response body:' + JSON.stringify(response.data));
        expect(response.status).toEqual(401);
        expect(response.data.message).toBe('User not authorized!');
    });
})

})