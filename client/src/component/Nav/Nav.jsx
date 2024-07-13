import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <header class="nav">
      <h1 class="nav__logo">ensemble</h1>
      <div className="nav__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/closet">Closet</NavLink>
        <NavLink to="/planner">Planner</NavLink>
        <NavLink to="/add-item">Add Item</NavLink>
      </div>
    </header>
  );
}

export default Nav;
