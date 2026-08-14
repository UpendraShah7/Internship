// Search Users

let allUsers = []; // will hold the fetched users so search can reuse them

const searchInput = document.querySelector("#search");
const userList = document.querySelector("#userList");

function renderUsers(users) {
    userList.innerHTML = ""; // clear whatever was shown before

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

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(users => {
        allUsers = users;      // save for search to use later
        renderUsers(allUsers); // show everyone at first
    })
    .catch(error => {
        console.log("Error:", error);
    });

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