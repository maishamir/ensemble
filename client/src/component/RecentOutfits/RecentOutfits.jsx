import axios from "axios";
import React, { useState, useEffect } from "react";
import ItemCard from "../itemCard/ItemCard";
import "./RecentOutfits.scss";
import { Link } from "react-router-dom";

function RecentOutfits() {
  const [recentOutfits, setRecentOutfits] = useState([]);

  useEffect(() => {
    const fetchOutfits = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/outfit/recent");
        setRecentOutfits(data);
        console.log(recentOutfits);
      } catch (e) {
        console.error("Error fetching recent outfits", e);
      }
    };
    fetchOutfits();
  }, []);
  return (
    <section className="recent-outfits">
      {/* <p className="recent-outfits__title">Recent Outfits</p> */}
      <div className="recent-outfits__images">
        {recentOutfits.map((item) => (
          <Link to={`/outfit/${item.id}`}>
            <ItemCard
              image={item.thumbnail}
              alt={item.name}
              name={item.name}
              key={item.id}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default RecentOutfits;
