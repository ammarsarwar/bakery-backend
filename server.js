const express = require("express");
const app = express();
const cors = require("cors");
const productsRoutes = require("./routes/productsRoutes");


const PORT = process.env.PORT || 3000;
const userRoutes = require("./routes/usersRoutes");

app.use(express.json());
const corsOptions = {
  origin: "http://localhost:3001", // Your frontend's address
};

app.use(cors(corsOptions));

// Using the user routes
app.use("/api/users", userRoutes);
app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  res.send("Bakery Backend is up and running!");
});



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});



const mongoose = require('mongoose');

// ... (rest of your imports)

const MONGODB_URI =
  "mongodb://127.0.0.1:27017/bakeryapp?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2"; // Change this to your actual connection string

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('MongoDB connection error:', err);
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});
// ... (rest of your server code)
