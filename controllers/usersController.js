
const User = require('../models/user');
const argon2 = require("argon2");
const jwt = require('jsonwebtoken');

// Registration of a new user
exports.registerUser = async (req, res) => {
    // Check if the email already exists
   
   const userExists = await User.findOne({ email: req.body.email });

   if (userExists) {
     return res.status(400).send("Email already exists");
   }
    

    // Hash the password
  //  const hashedPassword = await argon2.hash(req.body.password);

  //   const user = new User({
  //       ...req.body,
  //       password: hashedPassword
  //   });
  const user = new User(req.body);

    try {
        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};



exports.loginUser = async (req, res) => {
  try {
    // Fetch the user based on email
    const user = await User.findOne({ email: req.body.email });

    // If the user doesn't exist, send an error
    if (!user) {
      return res.status(400).send({ message: "User does not exist" });
    }

    // Check if the entered password matches the stored password hash
   const isMatch = await argon2.verify(user.password, req.body.password);
   if (!isMatch) {
     return res.status(400).send({ message: "Invalid email or password" });
   }

    // If everything is good, generate a JWT token and send it as a response
    const token = jwt.sign({ id: user._id }, "ammar123", {
      expiresIn: "1h",
    });

    res.status(200).send({ token });
  } catch (err) {
    // Handle unexpected errors
    res.status(500).send({ message: err.message });
  }
};



// Middleware to authenticate users using JWT
exports.authenticate = (req, res, next) => {
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    if (!token) return res.status(401).send('Access denied. No token provided.');

    try {
        const decoded = jwt.verify(token, "ammar123");
        req.user = decoded;
        next();
    } catch (ex) {
        res.status(400).send('Invalid token.');
    }
};

// Middleware to authorize admins
exports.authorizeAdmin = (req, res, next) => {
    if (!req.user.isAdmin) return res.status(403).send('Access denied.');
    next();
};

// You can add more user-related functions below...
