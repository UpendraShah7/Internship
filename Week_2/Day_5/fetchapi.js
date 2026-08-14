async function getUsers() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        let users = await response.json();

        users.forEach((user) => {
            console.log(user.name);
        });
    } catch (error) {
        console.log("Error:", error);
    }
}

getUsers();




// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         return response.json();
//     })
//     .then((users) => {
//         users.forEach((user) => {
//             console.log(user.name);
//         });
//     })
//     .catch((error) => {
//         console.log("Error:", error);
//     });