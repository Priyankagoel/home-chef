import React, { Component } from "react";
import apiAxios from "../../configs/apiAxios";
import "./HomeSidebar.css";
import Category from "../../components/category/category";


export default class HomeSidebar extends Component {
  // static contextType = checkedIngredients;
  constructor(props){
    super(props);
  }

  state = {
    categories : [],
    // checkedIngredients : []
  };
 
 

  
  
  componentDidMount(){
    apiAxios.get("/api/categories").then(res => {
      this.setState({ categories: res.data});
    });
  }

  categoryArray = () => {
    return this.state.categories.map((category, index) => {
      return (
        <Category
          category={category}
          key={"key-" + index}
          keyID={index.toString()}
          handleChange={this.props.handleChange.bind(this)}
        />
      );

    });
  };
  // componentDidUpdate(){
  //   console.log("In sidebar component did update", this.props);

  // }

  render() { 
    return (
      <div>
        <div className="sidebar-container" >
          {this.state.categories.length > 0 && this.categoryArray()}
        </div>
      </div>
    );
  }
}
