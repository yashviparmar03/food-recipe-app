const recipes = require("../data/recipes");

const getAllRecipes = (req, res) => {

    const search = req.query.search;
    const category = req.query.category;

    let filteredRecipes = recipes;

    // Search Filter
    if (search) {

        filteredRecipes = filteredRecipes.filter((recipe) =>
            recipe.title.toLowerCase().includes(search.toLowerCase())
        );

    }

    // Category Filter
    if (category) {

        filteredRecipes = filteredRecipes.filter((recipe) =>
            recipe.category.toLowerCase() === category.toLowerCase()
        );

    }

    res.json(filteredRecipes);

};

// GET SINGLE RECIPE
const getRecipeById = (req, res) => {

    const id = Number(req.params.id);

    const recipe = recipes.find(
        (item) => item.id === id
    );

    if (!recipe) {
        return res.status(404).json({
            message: "Recipe Not Found"
        });
    }

    res.json(recipe);

};
// GET ALL CATEGORIES
const getCategories = (req, res) => {

    const categories = [...new Set(recipes.map(recipe => recipe.category))];

    res.json(categories);

};

module.exports = {

    getAllRecipes,
    getRecipeById,
    getCategories

};