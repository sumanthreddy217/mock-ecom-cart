import Product from "../models/Product.js";
import { products } from "../data/products.js";

export const getProducts = async (req, res) => {
  try {
    const count = await Product.countDocuments();
    if (count === 0) {
      await Product.insertMany(products);
    }
    const allProducts = await Product.find();
    res.json(allProducts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
