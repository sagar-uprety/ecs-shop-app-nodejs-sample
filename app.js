const express = require("express");
const app = express();
const axios = require("axios");
const port = 3000;

// Middleware and configuration
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");

// Routes
const ordersRouter = require("./routes/orders");
const usersRouter = require("./routes/users");
const productsRouter = require("./routes/products");

// Mount routers
app.use("/orders", ordersRouter);
app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});