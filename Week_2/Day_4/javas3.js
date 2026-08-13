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


// let btn1 = document.querySelector("#btn1");
// btn1.onclick=()=>{
//   console.log("Button was Clickedddd");
// };


// Another Method of Handling events.
// function handleclick(){
//     console.log("button was Clicked");
// }

// btn1.onclick = handleclick;


// Event Object 
// e.target
// e.type
// e.clientX
// e.clientY




// Event Listener  
// node.addEventListener(event , callback);

let btn1 = document.querySelector("#btn1");
btn1.addEventListener("click",()=>{
        console.log("Button  firstl was clicked")
});

btn1.addEventListener("click",()=>{
        console.log("This is second event listener of that button first")
});

const handler3= ()=>{
        console.log("This is third event listener of that button first")
}
btn1.addEventListener("click", handler3);



btn1.addEventListener("click",()=>{
        console.log("This is fourth event listener of that button first")
});


// Note ! here callback reference should be same to callback.
// node.removeEventListener(event , callback);
btn1.removeEventListener("click",handler3);


let modeBtn = document.querySelector("#mode");
let currmode= "light";
modeBtn.addEventListener("click",()=>{
        if (currmode == "light"){
            currmode = "dark"
            console.log(currmode);
            document.querySelector("body").style.backgroundColor ="black";
        }
        else{
            currmode = "light";
            console.log(currmode);
            document.querySelector("body").style.backgroundColor = "white"
        }
})
