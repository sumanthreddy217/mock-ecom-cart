import { products } from "../data/products.js"; // Path must be correct

let cart = []; // Replace with DB logic for persistence

export const getCart = (req, res) => {
  try {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    res.json({ items: cart, total });
  } catch (err) {
    console.error("Get cart error:", err);
    res.status(500).json({ error: "Server error fetching cart" });
  }
};

export const addToCart = (req, res) => {
  try {
    console.log('Add to cart payload:', req.body);
    const { productId, qty } = req.body;

    if (!productId || !qty || qty < 1) {
      return res.status(400).json({ error: "Product ID and positive quantity required" });
    }
    const product = products.find(p => p.id === productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Cart logic
    const cartItem = cart.find(i => i.productId === productId);
    if (cartItem) {
      cartItem.qty += qty;
    } else {
      cart.push({ productId, name: product.name, price: product.price, qty });
    }
    res.status(201).json({ message: "Added to cart", cart });
  }
  catch (err) {
    console.error("Add to cart error:", err);
    res.status(500).json({ error: "Server error adding to cart" });
  }
};

export const removeFromCart = (req, res) => {
  try {
    const id = Number(req.params.id);
    cart = cart.filter(item => item.productId !== id);
    res.json({ message: "Removed from cart", cart });
  } catch (err) {
    console.error("Remove from cart error:", err);
    res.status(500).json({ error: "Server error - could not remove from cart" });
  }
};
