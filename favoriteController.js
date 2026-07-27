const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/favorites.json");

// Read Favorites
const readFavorites = () => {

    const data = fs.readFileSync(filePath, "utf-8");

    return JSON.parse(data);

};

// Write Favorites
const writeFavorites = (favorites) => {

    fs.writeFileSync(

        filePath,

        JSON.stringify(favorites, null, 2)

    );

};

// GET ALL FAVORITES
const getFavorites = (req, res) => {

    const favorites = readFavorites();

    res.json(favorites);

};

// ADD FAVORITE
const addFavorite = (req, res) => {

    const favorites = readFavorites();

    const recipe = req.body;

    const alreadyExists = favorites.find(

        (item) => item.id === recipe.id

    );

    if (alreadyExists) {

        return res.status(409).json({

            message: "Recipe Already Added ❤️"

        });

    }

    favorites.push(recipe);

    writeFavorites(favorites);

    res.status(201).json({

        message: "Recipe Added Successfully ❤️",

        recipe

    });

};

// REMOVE FAVORITE
const removeFavorite = (req, res) => {

    const favorites = readFavorites();

    const id = Number(req.params.id);

    const updatedFavorites = favorites.filter(

        (recipe) => recipe.id !== id

    );

    writeFavorites(updatedFavorites);

    res.json({

        message: "Recipe Removed Successfully ❤️"

    });

};

module.exports = {

    getFavorites,
    addFavorite,
    removeFavorite

};