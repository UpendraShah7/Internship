//Error Handling
let allUsers = [];

const searchInput = document.querySelector("#search");
const userList = document.querySelector("#userList");
const clearBtn = document.querySelector("#clearBtn");

function renderUsers(users) {
    userList.innerHTML = "";

    users.forEach(user => {
        userList.innerHTML += `
            <p>
                ${user.name}<br>
                ${user.username}<br>
                ${user.email}<br>
                ${user.phone}<br>
                ${user.website}
            </p>
        `;
    });
}

async function fetchUsers() {
    userList.innerHTML = "<p>Loading...</p>";

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Server returned status " + response.status);
        }

        const users = await response.json();

        allUsers = users;
        renderUsers(allUsers);
    } catch (error) {
        userList.innerHTML = "<p>Unable to load users. Please try again.</p>";
        console.log("Error:", error.message);
    }
}

fetchUsers();

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    const filteredUsers = allUsers.filter(user => {
        return (
            user.name.toLowerCase().includes(searchText) ||
            user.username.toLowerCase().includes(searchText) ||
            user.email.toLowerCase().includes(searchText)
        );
    });

    renderUsers(filteredUsers);
});

clearBtn.addEventListener("click", () => {
    userList.innerHTML = "";     // remove all users from the page
    searchInput.value = "";      // clear the search box text
    allUsers = [];                // forget the fetched data too
});