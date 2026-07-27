import { useNavigate } from "react-router-dom";

function RecipeCard({ recipe }) {

  const navigate = useNavigate();

  return (

    <div className="recipe-card">

      <img
        src={recipe.image}
        alt={recipe.title}
      />
      
      <p className="recipe-rating">

      ⭐ {recipe.rating} ({recipe.reviews} Reviews)

      </p>

      <h2>{recipe.title}</h2>
      
      <p>⏱ {recipe.readyInMinutes} Minutes</p>

      <p>👨‍🍳 {recipe.servings} Servings</p>

      <button
      onClick={() => navigate(`/recipe/${recipe.id}`)}
      >
      View Recipe
     </button>

    </div>

  );

}

export default RecipeCard;