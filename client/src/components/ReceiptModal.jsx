/* eslint-disable react/prop-types */
const ReceiptModal = ({ show, total, close }) => {
  if (!show) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
      <div className="bg-white rounded-2xl p-8 shadow-xl w-80 text-center">
        <h2 className="text-2xl font-semibold mb-4">Order Confirmed 🎉</h2>
        <p className="text-gray-700 mb-3">Thank you for your purchase!</p>
        <p className="text-lg font-bold mb-5">Total: ₹{total}</p>
        <button
          onClick={close}
          className="bg-amber-500 hover:bg-amber-600 text-white py-2 px-6 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default ReceiptModal;
