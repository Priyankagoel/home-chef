import React from "react";
import "./category.css";
// import { Link } from "react-router-dom";

export default function category(props) {
  let category = props.category;
  return (
    <div className="category-block">
        <label>{category.name}</label>
        <ul className="ingredient-list">{ingredientsList(category.ingredients)}</ul>
        
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
