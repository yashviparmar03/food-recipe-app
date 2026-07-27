const express = require("express");
const cors = require("cors");
const path = require("path");


const app = express();

app.use(cors());
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "images")));

const PORT = 5000;

const recipeRoutes = require("./routes/recipeRoutes");
const favoriteRoutes = require("./routes/favoriteRoutes");
const categoryRoutes = require("./routes/categoryRoutes");

app.use("/api/recipes", recipeRoutes);
app.use("/api/favorites", favoriteRoutes);
app.use("/api/categories", categoryRoutes);

app.get("/", (req, res) => {

    res.send("Welcome to Food Recipe API 🚀");

});

app.listen(PORT, () => {

    console.log(`Server is running on http://localhost:${PORT}`);

});