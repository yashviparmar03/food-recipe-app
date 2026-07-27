import RecipeCard from "./RecipeCard";

function RecipeList({ recipes,onViewRecipe }) {

    recipes,
    onViewRecipe

  return (

    <div className="recipe-list">

      {recipes.map((recipe) => (

        <RecipeCard
          key={recipe.id}
          recipe={recipe}
          onViewRecipe={onViewRecipe}
        />

      ))}

    </div>

  );

}

export default RecipeList;