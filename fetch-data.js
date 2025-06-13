// Initialize the Async Function: Define an asynchronous function named fetchUserData.
async function fetchUserData() {
    // Define the API URL: Declare a constant apiUrl.
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the Data Container Element: Select the HTML element with ID 'api-data'.
    const dataContainer = document.getElementById('api-data');

    // Fetch Data Using try-catch: Employ a try-catch block to handle fetching and errors.
    try {
        // In the try block, use await fetch to asynchronously get data from apiUrl.
        const response = await fetch(apiUrl);

        // Check if the response was successful (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Convert the response to JSON using await response.json().
        const users = await response.json();

        // Clear the Loading Message: Clear dataContainer's existing content.
        dataContainer.innerHTML = '';

        // Create and Append User List: Create a <ul> element.
        const userList = document.createElement('ul');

        // Loop through the users array with forEach.
        users.forEach(user => {
            // Create a <li> element.
            const listItem = document.createElement('li');
            // Set the text content of the <li> to the user’s name.
            listItem.textContent = user.name;
            // Append the <li> to userList.
            userList.appendChild(listItem);
        });

        // After the loop, append userList to dataContainer.
        dataContainer.appendChild(userList);

    } catch (error) {
        // Error Handling: In the catch block, clear dataContainer's content.
        dataContainer.innerHTML = '';
        // Set its text content to 'Failed to load user data.'.
        dataContainer.textContent = 'Failed to load user data.';
        console.error('There was a problem with the fetch operation:', error);
    }
}

// Invoke fetchUserData on DOMContentLoaded:
// Add an event listener to document for the DOMContentLoaded event.
// Set the callback function to invoke fetchUserData.
document.addEventListener('DOMContentLoaded', fetchUserData);
