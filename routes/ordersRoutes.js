const express = require("express");
const router = express.Router();
const ordersController = require("../controllers/ordersController");

// Place a new order
router.post("/", ordersController.placeOrder);

// Get all orders (probably only for admin use)
router.get("/", ordersController.getAllOrders);

// Get a specific order by ID
router.get("/:orderId", ordersController.getOrderById);

// Update order status (like if it's ready for pickup, etc.)
router.put("/:orderId", ordersController.updateOrderStatus);

module.exports = router;
