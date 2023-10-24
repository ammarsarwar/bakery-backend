const Order = require("../models/order");

exports.placeOrder = async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find().populate("products");
    res.status(200).json(orders);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.orderId).populate("products");
    if (!order) return res.status(404).send("Order not found");
    res.status(200).json(order);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.updateOrderStatus = async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.orderId,
      req.body,
      { new: true }
    );
    if (!updatedOrder) return res.status(404).send("Order not found");
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
