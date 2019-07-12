import React from "react";
import "./category.css";
// import { Link } from "react-router-dom";

export default function category(props) {
  let category = props.category;
  return (
    <div className="category-block">
        <a data-toggle="collapse" href={'#' + props.keyID}  aria-expanded="false">{category.name}</a>
        <div className="collapse" id={props.keyID}  aria-expanded="false">
          <ul className="ingredient-list">{ingredientsList(category.ingredients)}</ul>
        </div>
    </div>
  );
  



function ingredientsList(ingredients) {
    return ingredients.map((ingredient, index) => (
      <li key={'key-'+index}>
      <input type="checkbox" onClick={props.handleChange} value={ingredient.name} /> 
      <span key={`ingredient-${index}`}>{ingredient.name}</span>
      </li>
    ));
  }
};
