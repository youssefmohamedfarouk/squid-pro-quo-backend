// DEPENDENCIES
const express = require("express");
const cors = require("cors");
const motorcyclesController = require("./controllers/motorcyclesController");
const bidsController = require("./controllers/bidsController");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(express.json({ limit: "2MB" }));
app.use(cors());

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Squid Pro Quo!");
});

// MOTORCYCLES ROUTE
app.use("/motorcycles", motorcyclesController);

app.use("/bids", bidsController);

// 404 Page
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;
