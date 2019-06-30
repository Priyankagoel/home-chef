import React, { Component } from "react";
import "./header.css";
import { NavLink, Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <div className="headContainer">
        <div className="header">
          <span className="appTitle">
            <Link to="/">
              {" "}
              <img
                src="/assets/images/logo.png"
                alt="Home CHEF logo"
                height="20"
                width="20"
              />{" "}
              Home CHEF
            </Link>
          </span>
          <ul className="navList">
            <li>
              <NavLink activeClassName="active" to="/" exact>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about" exact>
                About
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact" exact>
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}
