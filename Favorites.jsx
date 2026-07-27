import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";

function Favorites() {

  const [favorites, setFavorites] = useState([]);

  const fetchFavorites = async () => {

  try {

    const response = await fetch(
      "http://localhost:5000/api/favorites"
    );

    const data = await response.json();

    console.log("Favorites:", data);

    setFavorites(data);

  } catch (error) {

    console.log(error);

  }

};

  useEffect(() => {

  fetchFavorites();

}, []);

  //removeFavorites//
  const removeFavorite = async (id) => {

  try {

    await fetch(
      `http://localhost:5000/api/favorites/${id}`,
      {
        method: "DELETE"
      }
    );

    fetchFavorites();

  } catch (error) {

    console.log(error);

  }

};

  return (

    <div className="container">

      <Navbar />

      <h1>❤️ Favorite Recipes</h1>

      {

        favorites.length === 0 ? (

          <h2 className="no-recipes">

            No Favorite Recipes Yet ❤️

          </h2>

        ) : (

          <div className="recipe-list">

            {

              favorites.map((recipe) => (

                <div
                  className="recipe-card"
                  key={recipe.id}
                >

                  <img
                    src={recipe.image}
                    alt={recipe.title}
                  />

                  <h2>{recipe.title}</h2>

                  <p>⏱ {recipe.readyInMinutes} Minutes</p>

                  <p>👨‍🍳 {recipe.servings} Servings</p>

                  <Link to={`/recipe/${recipe.id}`}>

                    <button>

                      View Recipe

                    </button>

                  </Link>

                  <button
                    onClick={() => removeFavorite(recipe.id)}
                  >

                    ❌ Remove

                  </button>

                </div>

              ))

            }

          </div>

        )

      }

    </div>

  );

}

export default Favorites;