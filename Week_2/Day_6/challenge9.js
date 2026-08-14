// Filter by username

let allUsers = [];

const searchInput = document.querySelector("#search");
const userList = document.querySelector("#userList");
const clearUsersBtn = document.querySelector("#clearUsers");
const fetchBtn = document.querySelector("#fetchBtn");
const sortAZBtn = document.querySelector("#sortAZ");
const sortZABtn = document.querySelector("#sortZA");
const usernameFilter = document.querySelector("#usernameFilter");

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

function fillUsernameDropdown() {
    const usernames = allUsers.map(user => user.username); // pull out just usernames

    usernames.forEach(username => {
        const option = document.createElement("option");
        option.value = username;
        option.textContent = username;
        usernameFilter.appendChild(option);
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
        fillUsernameDropdown(); // build dropdown once users arrive
    } catch (error) {
        userList.innerHTML = "<p>Unable to load users. Please try again.</p>";
        console.log("Error:", error.message);
    }
}

fetchBtn.addEventListener("click", fetchUsers);

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

clearUsersBtn.addEventListener("click", () => {
    userList.innerHTML = "";
    searchInput.value = "";
    allUsers = [];
});

sortAZBtn.addEventListener("click", () => {
    const sorted = [...allUsers].sort((a, b) => a.name.localeCompare(b.name));
    renderUsers(sorted);
});

sortZABtn.addEventListener("click", () => {
    const sorted = [...allUsers].sort((a, b) => b.name.localeCompare(a.name));
    renderUsers(sorted);
});

usernameFilter.addEventListener("change", () => {
    const selectedUsername = usernameFilter.value;
    if (selectedUsername === "all") {
        renderUsers(allUsers);
        return;
    }
    const filteredByUsername = allUsers.filter(user => {
        return user.username === selectedUsername;
    });

    renderUsers(filteredByUsername);
}); 