import React from "react";
import "./selectedIngredient.css";

export default function ingredientCard(props) {
    let ingredient = props.ingredient;
    console.log("ingredienti",ingredient);
    return (
      <div className="ingredient-filter" key={"key-" + props.keyID}>
        <p>{ingredient}<i className="fa fa-close icon" onClick = {(event)=>{props.handleChange(event,props.keyID);}}></i></p>
          
  
            
    
      </div>
    );
}