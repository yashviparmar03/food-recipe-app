import { useState, useEffect } from "react";

import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import RecipeList from "../components/RecipeList";
import "../App.css";

function Home() {

  // States
  const [recipes, setRecipes] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(false);

  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);

  // Fetch Categories
  const fetchCategories = async () => {

    try {

      const response = await fetch(
       "http://localhost:5000/api/recipes/categories"
      );

      const data = await response.json();

      console.log("Categories:", data);

      setCategories(data);

    } catch (error) {

      console.log(error);

    }

  };

  // Fetch Recipes
  const fetchRecipes = async (recipeName = "") => {

    console.log("Recipe Name:", recipeName);

    setLoading(true);

    try {

      const url =
        `http://localhost:5000/api/recipes?search=${recipeName}&category=${category}`;

      console.log("Fetch URL:", url);

      const response = await fetch(url);

      const data = await response.json();

      console.log("Response Data:", data);

      setRecipes(data);

    } catch (error) {

      console.log("Error:", error);

    } finally {

      setLoading(false);

    }

  };

  // First Time Load
  useEffect(() => {

    fetchCategories();

    

  }, []);

  // Category Change
 

  // Handle Search
  const handleSearch = (text) => {

    console.log("handleSearch received:", text);

    setHasSearched(true);

    fetchRecipes(text);

  };

  return (

    <div className="container">

      <Navbar />

      <h1>🍔 Food Recipe App</h1>

      <p className="subtitle">
        Discover Delicious Indian Vegetarian Recipes 🍛
      </p>

      <SearchBar
        onSearch={handleSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      {

        loading ? (

          <div className="spinner"></div>

        ) : recipes.length > 0 ? (

          <RecipeList recipes={recipes} />

        ) : (

          hasSearched && (

            <h2 className="no-recipes">

              😔 No Recipes Found

            </h2>

          )

        )

      }

    </div>

  );

}

export default Home;