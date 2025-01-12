const BaseController = require('./BaseController');
class BooksController extends BaseController {

    async getAllBooks() {
        return await this.axiosInstance('/BookStore/v1/Books')
    }

    async addBook(userId, bookId, token) {
        return await this.axiosInstance.post(`/BookStore/v1/Books`, {
            "userId": userId,
            "collectionOfIsbns": [
                {
                    "isbn": bookId
                }
            ]
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });
    }

    async deleteAllUserBooks(userId, token) {
       return await this.axiosInstance.delete(`/BookStore/v1/Books?UserId=${userId}`,
            {
                headers: {
                    Authorization : `Bearer ${token}`
                }
            });
    }

}

module.exports = new BooksController();