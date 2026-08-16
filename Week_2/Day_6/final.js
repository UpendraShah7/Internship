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

    if (users.length === 0) {
        userList.innerHTML = "<p>No users found.</p>";
        return;
    }

    users.forEach(user => {
        userList.innerHTML += `
            <p>
                ${user.name}<br>
                ${user.username}<br>
                ${user.email}<br>
                ${user.phone}<br>
                ${user.website}

                <button class="viewDetails" data-id="${user.id}">
                    View Details
                </button>
            </p>
        `;
    });
}

function fillUsernameDropdown() {
    const usernames = allUsers.map(user => user.username);

    usernames.forEach(username => {
        const option = document.createElement("option");
        option.value = username;
        option.textContent = username;
        usernameFilter.appendChild(option);
    });
}

async function fetchUsers() {
    userList.innerHTML = `<div class="spinner"></div>`;

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Server returned status " + response.status);
        }

        const users = await response.json();

        allUsers = users;
        renderUsers(allUsers);
        fillUsernameDropdown();
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

// view details
userList.addEventListener("click", (event) => {

    if (event.target.classList.contains("viewDetails")) {

        const userId = event.target.dataset.id;

        const user = allUsers.find(user => user.id == userId);

        userList.innerHTML = `
            <p>
                <strong>${user.name}</strong><br><br>

                Full Address: ${user.address.street}, ${user.address.suite}<br>
                City: ${user.address.city}<br>
                Company: ${user.company.name}<br>
                Phone: ${user.phone}<br>
                Website: ${user.website}
            </p>
        `;
    }

});