import { useContext } from "react";
import CartItem from "../components/CartItem";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, updateQty, removeItem } = useContext(CartContext);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <div className="text-center text-gray-600">
          <p>Your cart is empty.</p>
          <Link to="/" className="text-amber-500 hover:underline">
            Go Shopping →
          </Link>
        </div>
      ) : (
        <div className="max-w-2xl mx-auto">
          {cart.map((item) => (
            <CartItem
              key={item._id}
              item={item}
              updateQty={updateQty}
              removeItem={removeItem}
            />
          ))}

          <div className="text-right mt-6">
            <p className="text-lg font-semibold text-gray-800">
              Total: ₹{total}
            </p>
            <Link
              to="/checkout"
              className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg mt-3 inline-block"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
