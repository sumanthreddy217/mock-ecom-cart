// Sample static products. Replace with DB logic if needed.
const products = [
  { id: 1, name: "Shirt", price: 499 },
  { id: 2, name: "Jeans", price: 999 },
  { id: 3, name: "Shoes", price: 1499 },
  { id: 4, name: "Cap", price: 199 },
  { id: 5, name: "Socks", price: 99 }
];

export const getProducts = (req, res) => {
  res.json(products);
};
