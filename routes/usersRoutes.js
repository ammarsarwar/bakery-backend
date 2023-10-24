const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

// User registration and login routes
router.post("/register", usersController.registerUser);
router.post("/login", usersController.loginUser);

// Sample routes that require authentication and/or admin authorization
// router.get(
//   "/somePrivateEndpoint",
//   usersController.authenticate,
//   someControllerFunction
// );
// router.get(
//   "/adminOnlyEndpoint",
//   [usersController.authenticate, usersController.authorizeAdmin],
//   adminControllerFunction
// );

module.exports = router;
