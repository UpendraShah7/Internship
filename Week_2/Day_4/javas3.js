let clickBtn = document.querySelector("#clickBtn");
//click
clickBtn.addEventListener("click", () => {
    console.log("Button clicked!");
});


//dblclick
let dblClickBtn = document.querySelector("#dblClickBtn");
dblClickBtn.addEventListener("dblclick", () => {
    console.log("Button double clicked!");
});



//mousehover
let box = document.querySelector("#box");
box.addEventListener("mouseover", () => {
    console.log("Mouse is over the box!");
});

//keydown
let keyboardInput = document.querySelector("#keyboardInput");
keyboardInput.addEventListener("keydown", (event) => {
    console.log("Key pressed:", event.key);
});


//keyup
keyboardInput.addEventListener("keyup", (event) => {
    console.log("Key released:", event.key);
});


//input
let nameInput = document.querySelector("#nameInput");
nameInput.addEventListener("input", () => {
    console.log("You typed:", nameInput.value);
});


//change
let colorSelect = document.querySelector("#colorSelect");
colorSelect.addEventListener("change", () => {
    console.log("Selected:", colorSelect.value);
});


//submit
let form = document.querySelector("#myForm");
form.addEventListener("submit", (event) => {
    event.preventDefault();

    console.log("Form submitted!");
});