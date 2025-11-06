import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { addToCart } from "../services/api";

const ProductCard = ({ product }) => {
  const { setCartItems } = useContext(CartContext);

  const handleAddToCart = async () => {
    try {
      const updatedCart = await addToCart({
        productId: product._id,
        qty: 1,
      });
      setCartItems(updatedCart.items); // Update the cart context
      alert(`${product.name} added to cart ✅`);
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow p-4 flex flex-col justify-between">
      <img
        src={product.image || "https://via.placeholder.com/150"}
        alt={product.name}
        className="h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="font-semibold text-lg">{product.name}</h3>
      <p className="text-gray-600 mb-3">₹{product.price}</p>
      <button
        onClick={handleAddToCart}
        className="bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
