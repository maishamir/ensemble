import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ClosetPage.scss";

function ClosetPage() {
  return (
    <main className="closet-page">
      <header className="closet-page__header">
        {/* <Link to="/">&lt;</Link>
        <h1 className="closet-page__title">Closet</h1> */}
        <nav className="closet-page__nav">
          <button className="closet-page__filter">All</button>
          <button className="closet-page__filter">Tops</button>
          <button className="closet-page__filter">Bottoms</button>
          <button className="closet-page__filter">Outerwear</button>
          <button className="closet-page__filter">Outerwear</button>
          <button className="closet-page__filter">Dresses</button>
          <button className="closet-page__filter">Activewear</button>
          <button className="closet-page__filter">Undergarments</button>
          <button className="closet-page__filter">
            Loungewear
          </button>
          <button className="closet-page__filter">Footwear</button>
          <button className="closet-page__filter">Accessories</button>
          <button className="closet-page__filter">Formal</button>
          <button className="closet-page__filter">Seasonal</button>
          <button className="closet-page__filter">Miscellaneous</button>
        </nav>
        <input
          type="search"
          name="searchQuery"
          id="searchQuery"
          className="closet-page__search"
          placeholder="Search"
        />
      </header>
      <div className="results">
        {/* <p>{childData.label}</p> */}
        <div className="closet-age__results">Results show up here...</div>
      </div>
    </main>
  );
}

export default ClosetPage;
