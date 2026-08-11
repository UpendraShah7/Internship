// Write a program that stores a list of products with categories and prices,
// then filters products based on a given category.

let products = [
    { name: "Laptop",        category: "Electronics",   price: 80000 },
    { name: "Phone",         category: "Electronics",   price: 40000 },
    { name: "T-Shirt",       category: "Clothing",      price: 1500 },
    { name: "Jeans",         category: "Clothing",      price: 2500 }
];

let category = prompt("Enter category:");

let filteredProducts = products.filter((product) => {
    product.category.toLowerCase() === category.toLowerCase()
});

console.log(filteredProducts);