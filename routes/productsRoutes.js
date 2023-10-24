const express = require("express");
const router = express.Router();
const productsController = require("../controllers/productsController");

// List all products
router.get("/", productsController.listAllProducts);

// Get a specific product by ID
router.get("/:productId", productsController.getProductById);

// Admin routes (you may consider adding middleware to ensure only admins can access these):
// Add a new product
router.post("/", productsController.addProduct);

// Update a product by ID
router.put("/:productId", productsController.updateProduct);

// Delete a product by ID
router.delete("/:productId", productsController.deleteProduct);

module.exports = router;
