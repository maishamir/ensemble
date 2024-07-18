import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.scss";

function Nav() {
  return (
    <header className="nav">
      <div className="nav__links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/closet">Closet</NavLink>
        <NavLink to="/planner">Planner</NavLink>
        <NavLink to="/add-item">Add Item</NavLink>
      </div>
      <h1 className="nav__logo">
        <Link to="/">ensemble</Link>
      </h1>
    </header>
  );
}

export default Nav;
