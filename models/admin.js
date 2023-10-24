// models/admin.js
const mongoose = require("mongoose");
const argon2 = require("argon2");

const adminSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: String,
  role: String,
  // ... Any additional fields
});

// Middleware to hash password before saving
adminSchema.pre("save", async function (next) {
  if (this.isModified("password")) {
    this.password = await argon2.hash(this.password);
  }
  next();
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;
