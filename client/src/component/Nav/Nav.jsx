import React from "react";
import { NavLink } from "react-router-dom";
import './Nav.scss'

function Nav() {
  return (
    <div className="nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/closet">Closet</NavLink>
      <NavLink to="/planner">Planner</NavLink>
      <NavLink to="/add-item">Add Item</NavLink>
    </div>
  );
}

export default Nav;
