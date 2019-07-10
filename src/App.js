import React from "react";
import "./App.css";
import Header from "./containers/header/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./components/pages/aboutPage";
import RecipeDetail from './containers/recipeDetail/RecipeDetail'
import Contact from "./components/pages/contactPage";
// export const checkedIngredients = React.createContext({checkedIngredients:[]});


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <checkedIngredients.Provider value="I am here"> */}
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/recipe/:recipeId" component={RecipeDetail} />
        {/* </checkedIngredients.Provider> */}
      </div>
    </Router>
  );
}

export default App;
