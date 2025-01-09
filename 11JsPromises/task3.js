// Виконайте завдання 2 але використовуючи конструкцію async/await для функції що виконує запити

async function fetchTodoById(id) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!response.ok) {
            throw new Error('Something went wrong with fetching todo by id');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to fetch todo with id ${id}: ${error.message}`);
    }
}

async function fetchUserById(userId) {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
            throw new Error('Something when wrong with fetching user by ID');
        }
        return await response.json();
    } catch (error) {
        throw new Error(`Failed to fetch user with id ${userId}: ${error.message}`);
    }
}

async function executeRequests() {
    try {
        const [todo, user] = await Promise.all([fetchTodoById(3), fetchUserById(1)]);
        console.log("Results from Promise.all:");
        console.log("Todo:", todo);
        console.log("User:", user);

        const firstResolved = await Promise.race([fetchTodoById(3), fetchUserById(1)]);
        console.log("First resolved result from Promise.race:", firstResolved);
    } catch (error) {
        console.error("Error occurred:", error.message);
    }
}
executeRequests();
