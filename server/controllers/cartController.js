let cart = []; // temporary in-memory cart

export const addToCart = (req, res) => {
  const { productId, qty } = req.body;
  const existingItem = cart.find((item) => item.productId === productId);

  if (existingItem) {
    existingItem.qty += qty;
  } else {
    cart.push({ productId, qty });
  }

  res.json({ message: "Item added", items: cart });
};

export const getCart = (req, res) => {
  res.json({ items: cart });
};

export const removeFromCart = (req, res) => {
  const { id } = req.params;
  cart = cart.filter((item) => item.productId !== id);
  res.json({ message: "Item removed", items: cart });
};
