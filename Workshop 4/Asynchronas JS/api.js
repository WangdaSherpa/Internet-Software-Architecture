async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }
    const userData = await response.json();
    return { name: userData.name, email: userData.email };
  }

async function fetchUserTodos(userId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch user todos. Status: ${response.status}`);
  }
  const todos = await response.json();
  return todos.filter(todo => todo.completed && todo.id <= 50).map(todo => ({
    userId: todo.userId,
    title: todo.title,
    status: todo.completed ? 'Completed' : 'Not Completed'
  }));
}

fetchUserTodos(3)
  .then((todos) => console.log(todos))
  .catch((error) => console.error(error));
