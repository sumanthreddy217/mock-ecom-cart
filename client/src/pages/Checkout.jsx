import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import ReceiptModal from "../components/ReceiptModal";

const Checkout = () => {
  const { cart, clearCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: cart }),
      });

      if (res.ok) {
        clearCart();
        setShowModal(true);
      }
    } catch (err) {
      console.error("Checkout failed:", err);
    }
  };

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <p className="text-gray-600">No items to checkout.</p>
      ) : (
        <>
          <p className="text-lg font-semibold mb-3">Total: ₹{total}</p>
          <button
            onClick={handleCheckout}
            className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg"
          >
            Confirm Order
          </button>
        </>
      )}

      <ReceiptModal
        show={showModal}
        total={total}
        close={() => setShowModal(false)}
      />
    </div>
  );
};

export default Checkout;
