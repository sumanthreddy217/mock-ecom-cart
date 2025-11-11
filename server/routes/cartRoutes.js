import express from "express";
import {
  getCart,
  addToCart,
  removeFromCart
} from "../controllers/cartController.js";
const router = express.Router();

router.get("/", getCart); // GET /api/cart
router.post("/", addToCart); // POST /api/cart
router.delete("/:id", removeFromCart); // DELETE /api/cart/:id

export default router;
