
let products = [
    { id: 1, product_name: "ProductA", price: 30 },
    { id: 2, product_name: "ProductB", price: 20 },
    { id: 3, product_name: "ProductC", price: 25 },
];
function sortProductsByPrice(arr) {
    arr.sort((a, b) => a.price - b.price);
}
sortProductsByPrice(products);
console.log("Danh sách products đã được sắp xếp theo giá tăng dần:");
for (let i = 0; i < products.length; i++) {
    console.log(`ID: ${products[i].id}, Product Name: ${products[i].product_name}, Price: $${products[i].price}`);
}
  