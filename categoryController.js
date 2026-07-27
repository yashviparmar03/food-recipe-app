const recipes = require("../data/recipes");

const getCategories = (req, res) => {

    const categories = [
        ...new Set(
            recipes.map(recipe => recipe.category)
        )
    ];

    res.json(categories);

};

module.exports = {
    getCategories
};