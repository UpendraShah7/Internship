//Loading State
let allUsers = [];

const searchInput = document.querySelector("#search");
const userList = document.querySelector("#userList");

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
    userList.innerHTML = "<p>Loading...</p>"; // show while fetching

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        allUsers = users;
        renderUsers(allUsers);   // replaces "Loading..." with real users
    } catch (error) {
        userList.innerHTML = "<p>Failed to load users.</p>"; // replaces "Loading..." on failure
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