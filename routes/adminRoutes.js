const express = require("express");
const router = express.Router();
const adminController = require("../controllers/adminController");

// Get a list of all users (consider this as an example; in a real scenario, you may want to limit the data exposed)
router.get("/users", adminController.getAllUsers);

module.exports = router;
