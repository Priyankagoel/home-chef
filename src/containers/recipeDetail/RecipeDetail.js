import React, { Component } from "react";
import apiAxios from "../../configs/apiAxios";

export default class RecipeDetail extends Component {
  constructor(props) {
    super(props);
    this.state = { recipe: {}, recipeId: props.match.params.recipeId };
  }

  ingredientsList = ingredients => {
    return ingredients.map((ingredient, index) => (
      <span key={`ingredient-${index}`}>{ingredient.ingredient.name}</span>
    ));
  };

  componentDidMount() {
    apiAxios.get("/api/recipes/" + this.state.recipeId).then(res => {
      this.setState({ recipe: res.data });
    });
  }

  render() {
    let recipe = this.state.recipe;
    return (
      <div className="container">
        <h1>{recipe.title}</h1>

        <div className="recipe-detail-container">
          <div className="recipe-image-container">
            <img
              className="card-img-top"
              src="https://via.placeholder.com/250"
              alt="Card"
              style={{ width: "100%" }}
            />
            {recipe.recipe_ingredients &&
              recipe.recipe_ingredients.length > 0 && (
                <div className="ingredients">
                  {this.ingredientsList(recipe.recipe_ingredients)}
                </div>
              )}
          </div>

          <div className="recipe-description"> {recipe.description}</div>
        </div>
      </div>
    );
  }
}
