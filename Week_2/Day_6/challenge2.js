//display the users on the webpage.

const userList = document.querySelector("#userList");

fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        return response.json();
    })
    .then(users => {
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
    })
    .catch(error => {
        console.log("Error:", error);
    });