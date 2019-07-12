import React, { Component, } from "react";
import apiAxios from "../../configs/apiAxios";
import RecipeCard from "../../components/recipeCard/recipeCard";
import HomeSidebar from '../homeSidebar/HomeSidebar';
import SelectedIngredient from "../../components/selectedIngredient/selectedIngredient";

// import  {checkedIngredients } from '../../App'

export default class Home extends Component {
 
  state = {
    recipes: [],
    categories: [],
    matchedRecord: null,
    searchedRecords: false,
    checkedIngredients: [],
    ingredients: [],
    ingredientsState: [],
    page: 1
  };

  style = {
    display: "flex",
    // justifyContent: "space-between"
    flexWrap: "wrap"
  };

  selectedIngredients = () => {
    return this.state.checkedIngredients.map((ingredient, index) => {
      return (
        <SelectedIngredient
          ingredient={ingredient}
          key={"key-" + index}
          keyID={index.toString()}
          handleChange={this.handleChange.bind(this)}
        />
      );
    });
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

  handleChange(event,id) {
    console.log(event.target);
    if(event.target.type === 'checkbox'){
      let i,count=0;
      for(i=0;i<this.state.checkedIngredients.length;i++){
          if(event.target.value === this.state.checkedIngredients[i]){
            count=1;
            break;
          }
      }
      if(count===0){
        this.setState({
          checkedIngredients : [...this.state.checkedIngredients, event.target.value]
        }, ()=>{
          console.log(this.state);
        })
      }
      else{
        let currentSelectedCategories = [...this.state.checkedIngredients];
        currentSelectedCategories.splice(i,1);
        this.setState({ checkedIngredients : currentSelectedCategories});
      }
    }
    else{
        
        console.log("...",id);
        let currentSelectedCategories = [...this.state.checkedIngredients];
        currentSelectedCategories.splice(id,1);
        this.setState({ checkedIngredients : currentSelectedCategories});
        
   
    }
  }

  componentDidMount() {
    apiAxios.get("/api/recipes").then(res => {
      this.setState({ recipes: res.data });
    });
    
    // console.log(this.context);

    apiAxios.get("/api/ingredients").then(res => {
      this.setState({ ingredients: res.data});
      for (let i = 0; i < this.state.ingredients.length; i++) {
  
        this.setState({ingredientsState: false});
        
      }
    });

  }

  render() {
    return (
      <div className="sidebar-page-wrapper" >
        <HomeSidebar handleChange={this.handleChange.bind(this)}
        />

        <div className=" container content-container">
          <h3>Selected Ingredients</h3>
          <div className="cards" style={this.style}>
            {this.state.checkedIngredients.length > 0 && this.selectedIngredients()}
          </div>
          <h1>Recipes</h1>
          <div className="cards" style={this.style}>
          {this.state.recipes.length > 0 && this.recipeCards()}

          </div>
        </div>
      </div>
    );
  }
}
// Home.contextType = checkedIngredients;
