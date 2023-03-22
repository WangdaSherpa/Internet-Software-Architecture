async function fetchUserData(userId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user data. Status: ${response.status}`);
    }
    const userData = await response.json();
    return userData;
  }

fetchUserData(3)
    .then((userData) => console.log(userData))
    .catch((error) => console.error(error));
