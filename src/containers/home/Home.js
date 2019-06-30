import React, { Component } from "react";
import apiAxios from "../../configs/apiAxios";
import RecipeCard from "../../components/recipeCard/recipeCard";
import HomeSidebar from '../homeSidebar/HomeSidebar';

export default class Home extends Component {
  state = {
    recipes: [],
    matchedRecord: null,
    searchedRecords: false,
    page: 1
  };

  style = {
    display: "flex",
    // justifyContent: "space-between"
    flexWrap: "wrap"
  };

  recipeCards = () => {
    return this.state.recipes.map((recipe, index) => {
      return (
        <RecipeCard
          recipe={recipe}
          key={"key-" + index}
          keyID={index.toString()}
        />
      );
    });
  };

  componentDidMount() {
    apiAxios.get("/api/recipes").then(res => {
      this.setState({ recipes: res.data });
    });
  }

  render() {
    return (
      <div className="sidebar-page-wrapper" >
        <HomeSidebar />
        <div className=" container content-container">
          <h1>Recipes</h1>
          <div className="cards" style={this.style}>
          {this.state.recipes.length > 0 && this.recipeCards()}{this.state.recipes.length > 0 && this.recipeCards()}{this.state.recipes.length > 0 && this.recipeCards()}{this.state.recipes.length > 0 && this.recipeCards()}{this.state.recipes.length > 0 && this.recipeCards()}{this.state.recipes.length > 0 && this.recipeCards()}{this.state.recipes.length > 0 && this.recipeCards()}{this.state.recipes.length > 0 && this.recipeCards()}
          </div>
        </div>
      </div>
    );
  }
}
