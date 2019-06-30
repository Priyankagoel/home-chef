import React from "react";
import "./recipeCard.css";
import { Link } from "react-router-dom";

export default function recipeCard(props) {
  let recipe = props.recipe;
  console.log(recipe);
  return (
    <div className="card recipe-card" key={"key-" + props.keyID}>
      <Link to={"/recipe/" + recipe.id}>
        <img
          className="card-img-top"
          src="https://via.placeholder.com/250"
          alt="Card"
          style={{ width: "100%" }}
        />
        <div className="card-body">
          {recipe.recipe_ingredients &&
            recipe.recipe_ingredients.length > 0 && (
              <div className="ingredients">
                {ingredientsList(recipe.recipe_ingredients)}
              </div>
            )}

          <h4 className="card-title">{recipe.title}</h4>
          {/* <p className="card-text">{ props.description} </p> */}
        </div>
      </Link>
    </div>
  );
}

function ingredientsList(ingredients) {
  return ingredients.map((ingredient, index) => (
    <span key={`ingredient-${index}`}>{ingredient.ingredient.name}</span>
  ));
}
