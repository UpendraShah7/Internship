// Window Object
// Window Object Represent an open Window in a browser. It is browser's object(not Javascript) and is 
// automatically created by browser.
// It is a global object with lots of properties and methods.


// console.log("Hello") is same as window.console.log("Hello")

// DOM (Document Object Model)
// The DOM is a programming interface that represents an HTML document as a tree of objects (nodes). 
// It allows JavaScript to access, change, add, or remove HTML elements and their content and styles dynamically.


// A way to access html element in js.

// Accessing Elements

// Selection with Id
let var1 = document.getElementById("heading")
console.log (var1);

// Selction with Classname
let var2 = document.getElementsByClassName("box");
console.log(var2);

//Selection with TagName
let var3 = document.getElementsByTagName("p");
console.dir(var3);


// querySelector
let element = document.querySelector("p");
console.dir(element);


// querySelectorAll
let elements = document.querySelectorAll("p");
console.log(elements);





//Element Properties

//tagName
//return tag name of element nodes
let elementts = document.querySelector("#list");
console.log(elementts.tagName);

//innerText
//return the text content of the element and all its children
let elementtts = document.querySelector("#pass");
console.log(elementtts.innerText);


//innerHTML
//return the text content as well as HTML content of the element and all its children
let elementttts = document.querySelector("#pass");
console.log(elementttts.innerHTML);


//textContent
//return textual contetn even for hidden elements
let elementtttt = document.querySelector("#pass");
console.log(elementtttt.textContent);




//getting Attribute
let div = document.querySelector("div");
console.log(div);
console.log(div.getAttribute("class"));

//setting Attribute
div.setAttribute("class","newClass");



// node.style
let para = document.querySelector("#para");
para.style.backgroundColor = "yellow";


let btn = document.querySelector("#btn");
btn.style.backgroundColor = "blue";
btn.style.color = "white";




//Inserting Elements
// append , prepend ,before ,after
let newBtn = document.createElement("button");
newBtn.innerText="Click me";
console.log(newBtn);

let ul = document.querySelector("ul");
ul.append(newBtn);
ul.prepend(newBtn);
ul.before(newBtn);
ul.after(newBtn);


//Deleting Elements
let divvv = document.querySelector("#nameInput");
divvv.remove();


//appendChild
let ull = document.querySelector("ul");
let li = document.createElement("li");
li.innerText = "Orange";
ull.appendChild(li);


//removeChild
let uul = document.querySelector("ul");
let lli = document.querySelector("lli");
uul.removeChild(li);