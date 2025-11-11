export const checkout = (req, res) => {
  const { cartItems, name, email } = req.body;
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);
  // Timestamp for mock receipt
  const receipt = {
    name,
    email,
    items: cartItems,
    total,
    timestamp: new Date().toISOString()
  };
  // Optionally clear cart in DB here
  cart = [];
  res.json(receipt);
};
