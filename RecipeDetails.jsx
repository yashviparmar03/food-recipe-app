import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../App.css";

function RecipeDetails() {

    const navigate = useNavigate();

    const { id } = useParams();
    const [recipeDetails, setRecipeDetails] = useState(null);

    // fetchRecipe //
    const fetchRecipe = async () => {

    try {

    const response = await fetch(
      `http://localhost:5000/api/recipes/${id}`
    );

    const data = await response.json();

    console.log("Recipe Details:", data);

    setRecipeDetails(data);

  } catch (error) {

    console.log(error);

  }

};

  // addToFavorites //
  const addToFavorites = async () => {

  try {

    const response = await fetch(
      "http://localhost:5000/api/favorites",
      {
        method: "POST",

        headers: {
          "Content-Type": "application/json"
        },

        body: JSON.stringify(recipeDetails)
      }
    );

    const data = await response.json();
    if (response.status === 409) {

  alert("Already Added ❤️");

} else {

  alert("Recipe Added Successfully ❤️");

}
    console.log(data);

  } catch (error) {

    console.log(error);

  }

};

//useeffect//
useEffect(() => {

  fetchRecipe();

}, [id]);

if (!recipeDetails) {

  return <h2>Loading...</h2>;

}

return (

  <div className="recipe-details">
    <Navbar />

    <button
      onClick={() => navigate(-1)}
    >
      ⬅ Back
    </button>

    <h1>{recipeDetails.title}</h1>

    <img
      src={recipeDetails.image}
      alt={recipeDetails.title}
      width="350"
    />

    <h3>🥗 Vegetarian Recipe</h3>

    <p>
      ⏱ Ready In : {recipeDetails.readyInMinutes} Minutes
    </p>

    <p>
      ⭐ Rating : {recipeDetails.rating}/5
    </p>

    <p>
      💬 Reviews : {recipeDetails.reviews}
    </p>

    <p>
      👨‍🍳 Servings : {recipeDetails.servings}
    </p>

    <h2>🥕 Ingredients</h2>

    <ul>

      {recipeDetails.ingredients.map((item, index) => (

        <li key={index}>
          {item}
        </li>

    ))}
    </ul>

    <h2>📖 Summary</h2>
    <p>
    {recipeDetails.summary}
    </p>
    
    <h2>👨‍🍳 Cooking Instructions</h2>

<ol>

  {recipeDetails.instructions.map((step, index) => (

    <li key={index}>
      {step}
    </li>

  ))}

</ol>
    <button onClick={addToFavorites}>
      ❤️ Add to Favorites
    </button>

  </div>

);

  

}

export default RecipeDetails;