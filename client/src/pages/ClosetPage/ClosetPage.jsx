import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import "./ClosetPage.scss";
import axios from "axios";
import ItemCard from "../../component/itemCard/ItemCard";

const categories = ["All", "Top", "Bottom", "Dress", "Footwear", "Accessory"]; // Define categories array

function ClosetPage() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const { category } = useParams(); // Get the category from the URL

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/clothing_item");
        setItems(data);
        filterClothes(category || "All", data);
      } catch (e) {
        console.error(`Could not fetch items: ${e}`);
      }
    };
    fetchItems();
  }, [category]);

  const filterClothes = (category, itemsList = items) => {
    if (category === "All") {
      setFilteredItems(itemsList);
    } else {
      const filtered = itemsList.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredItems(filtered);
    }
  };

  console.log(category, filteredItems);

  return (
    <main className="closet-page">
      <header className="closet-page__header">
        <nav className="closet-page__nav">
          {categories.map((cat) => (
            <NavLink
              key={cat}
              to={`/closet/${cat}`}
              className={({ isActive }) =>
                `closet-page__filter ${isActive ? "active" : ""}`
              }
              onClick={() => filterClothes(cat)}
            >
              {cat}
            </NavLink>
          ))}
        </nav>
      </header>
      <div className="results">
        <div className="closet-page__results">
          {filteredItems.map((item) => (
            <ItemCard
              image={item.image_url}
              name={item.name}
              alt={item.name}
              onClick={() => navigate(`/item/${item.id}`)}
              key={item.id}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ClosetPage;
