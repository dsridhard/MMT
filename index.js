const express = require("express");
const bodyParser = require("body-parser");
const db = require("./models");
const routes = require("./routes"); // <-- all routes bundled here

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Default test route
app.get("/mmt", (req, res) => {
    res.status(200).json({ message: "This is MMT project" });
});

// Use all routes from routes/index.js
app.use("/api", routes);

// Connect to DB
db.sequelize
    .sync({ force: false, logging: false })
    .then(() => console.log("Connected to the database successfully."))
    .catch((err) => console.error("Failed to connect to the database:", err));

module.exports = app;
