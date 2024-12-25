const cart = [
  { item: "Laptop", price: 1200 },
  { item: "Headphones", price: 100 },
  { item: "Mouse", price: 50 },
  { item: "Keyboard", price: 75 },
];

let totalCost = 0;

for (index = 0; index < cart.length; index++) {
  totalCost += cart[index].price;
}
console.log("Total cost:", totalCost);
