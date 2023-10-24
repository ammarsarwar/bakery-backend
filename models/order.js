// models/order.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  guestName: String,
  guestContact: String,
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
      quantity: Number,
    },
  ],
  totalAmount: Number,
  orderDate: {
    type: Date,
    default: Date.now,
  },
  pickupTime: Date,
  specialInstructions: String,
  orderStatus: String,
  // ... Any additional fields
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
