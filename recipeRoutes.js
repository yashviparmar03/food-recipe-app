const express = require("express");

const router = express.Router();

const {

    getAllRecipes,
    getRecipeById,
    getCategories

} = require("../controllers/recipeController");

// Categories
router.get("/categories", getCategories);

// All Recipes
router.get("/", getAllRecipes);

// Single Recipe
router.get("/:id", getRecipeById);

module.exports = router;