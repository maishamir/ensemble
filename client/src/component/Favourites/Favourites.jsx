import React from "react";
import './Favourites.scss'

function Favourites() {
  return (
    <section className="favourites">
          <p className="favourites__title">Favourites</p>
          <div class="favourites__images">
              <img src="https://unsplash.it/90/90" className="favourites__image" alt=""/>
              <img src="https://unsplash.it/90/90" className="favourites__image" alt=""/>
              <img src="https://unsplash.it/90/90" className="favourites__image" alt=""/>
          </div>
    </section>
  );
}

export default Favourites;
