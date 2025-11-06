import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <Link to="/" className="text-2xl font-bold text-amber-400">
        MockEcom
      </Link>
      <div className="flex gap-6 items-center">
        <Link to="/" className="hover:text-amber-400">Products</Link>
        <Link to="/cart" className="relative flex items-center hover:text-amber-400">
          <ShoppingCart className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
