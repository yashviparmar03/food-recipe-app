const express = require("express");

const router = express.Router();

const {

    getFavorites,
    addFavorite,
    removeFavorite

} = require("../controllers/favoriteController");

router.get("/", getFavorites);

router.post("/", addFavorite);

router.delete("/:id", removeFavorite);

module.exports = router;