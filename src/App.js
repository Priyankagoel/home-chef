import React from "react";
import "./App.css";
import Header from "./containers/header/Header";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/home/Home";
import About from "./components/pages/aboutPage";
import RecipeDetail from './containers/recipeDetail/RecipeDetail'
import Contact from "./components/pages/contactPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/recipe/:recipeId" component={RecipeDetail} />

      </div>
    </Router>
  );
}

export default App;
