const BASE_URL = "http://localhost:5000/api"; // your backend running on port 5000

export const fetchProducts = async () => {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
};

export const addToCart = async (product) => {
  const res = await fetch(`${BASE_URL}/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(product),
  });
  if (!res.ok) throw new Error("Failed to add to cart");
  return res.json();
};

export const getCart = async () => {
  const res = await fetch(`${BASE_URL}/cart`);
  if (!res.ok) throw new Error("Failed to fetch cart");
  return res.json();
};
