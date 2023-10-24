// models/product.js
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  image: String,
  availabilityStatus: Boolean,
  // ... Any additional fields
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
