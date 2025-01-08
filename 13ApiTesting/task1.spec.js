// Створити тестовий сценарій за допомогою пекеджу axios.

// Використати безкоштовне і відкрите АПІ - JSONPlaceholder.

// Задача:

// створити 5 запитів за допомогою методів GET, POST
// обов'язково має бути перевірка респонсу - response status, data на коректність згідно з документацією по АПІ


const axios = require('axios')

test("Get all posts list", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(response.data);
    expect(response.status).toEqual(200);
    expect(response.data.length).toBe(100); 
    response.data.forEach(post => {
        expect(post).toHaveProperty('userId');
        expect(post).toHaveProperty('id');
        expect(post).toHaveProperty('title');
        expect(post).toHaveProperty('body');
    });
})

test("Get first post from list", async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    console.log(response.data);
    expect(response.status).toEqual(200); 
    expect(response.data).toHaveProperty('id', 1);
    expect(response.data).toHaveProperty('title');
    expect(response.data).toHaveProperty('body');
})

test("Positive test for invalid post ID", async () => {
    try {
        await axios.get('https://jsonplaceholder.typicode.com/posts/200');
    } catch (error) {
        expect(error.response.status).toEqual(404);
    }
});

test("Create a new post", async () => {
    const newTestPost = { title: 'Practice', body: 'Lorem Ipsum', userId: 15 };
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', newTestPost);
    expect(response.status).toEqual(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title', 'Practice');
    expect(response.data).toHaveProperty('body', 'Lorem Ipsum');
    expect(response.data).toHaveProperty('userId', 15);
    expect(typeof response.data.id).toBe('number');
});

test("Create post with missing fields", async () => {
    const invalidTestPost = { title: 'Practice partly' };
    const response = await axios.post('https://jsonplaceholder.typicode.com/posts', invalidTestPost);
    expect(response.status).toEqual(201);
    expect(response.data).toHaveProperty('id');
    expect(response.data).toHaveProperty('title', 'Invalid Practice partly'); // For practice. Check with wrong expected data just to see failed test looks like 
    expect(response.data.body).toBeUndefined();
    expect(response.data.userId).toBeUndefined();
});
