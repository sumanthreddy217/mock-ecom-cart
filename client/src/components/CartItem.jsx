/* eslint-disable react/prop-types */
const CartItem = ({ item, updateQty, removeItem }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-4">
      <div className="flex items-center gap-4">
        <img src={item.image} alt={item.name} className="w-16 h-16 rounded-md" />
        <div>
          <h4 className="font-semibold text-gray-800">{item.name}</h4>
          <p className="text-gray-500">₹{item.price}</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={() => updateQty(item._id, item.quantity - 1)}
          className="bg-gray-200 px-2 rounded"
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button
          onClick={() => updateQty(item._id, item.quantity + 1)}
          className="bg-gray-200 px-2 rounded"
        >
          +
        </button>
        <button
          onClick={() => removeItem(item._id)}
          className="bg-red-500 text-white px-3 py-1 rounded-md"
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default CartItem;
