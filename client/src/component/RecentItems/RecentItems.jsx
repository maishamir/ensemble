import React from "react";
import './RecentItems.scss'

function RecentItems() {
  return (
    <section className="recent-items">
          <p className="recent-items__title">Recent Items</p>
          <div class="recent-items__images">
              <img src="https://unsplash.it/90/90" className="recent-items__image" alt=""/>
              <img src="https://unsplash.it/90/90" className="recent-items__image" alt=""/>
              <img src="https://unsplash.it/90/90" className="recent-items__image" alt=""/>
          </div>
    </section>
  );
}

export default RecentItems;
