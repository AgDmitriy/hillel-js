// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>

// Функція повинна повертати як результат Promise що повертає об’єкт todo
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user
// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. 
// Присвойте значення отримані від цих виразів до змінних


function fetchTodoById(id) {
    return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong with fetching todo by id');
            }
            return response.json();
        });
}

function fetchUserById(UserId) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${UserId}`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Something when wrong with fetching user by ID')
        }
        return response.json();
    })
}

    const todoPromise = fetchTodoById(3);
    const userPromise = fetchUserById(1);
    //const invalidUserPromise = fetchUserById(9999);
    
    Promise.all([todoPromise, userPromise])
        .then(([todo, user]) => {
            console.log("Results from Promise.all:");
            console.log("Todo:", todo);
            console.log("User:", user);
        })
        .catch(error => {
            console.error("Error in Promise.all:", error);
        });
    
    Promise.race([todoPromise, userPromise])
        .then(result => {
            console.log("First resolved result from Promise.race:", result);
        })
        .catch(error => {
            console.error("Error in Promise.race:", error);
        });