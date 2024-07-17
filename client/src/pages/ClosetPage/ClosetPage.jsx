import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";
import "./ClosetPage.scss";
import axios from "axios";
import ItemCard from "../../component/itemCard/ItemCard";

const categories = [
  "All Items",
  "Top",
  "Bottom",
  "Dress",
  "Footwear",
  "Accessory",
  "Outfits",
]; // Define categories array

function ClosetPage() {
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [outfits, setOutfits] = useState([]);
  const { category } = useParams(); // Get the category from the URL

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/clothing_item");
        setItems(data);
        filterClothes(category || "All Items", data);
      } catch (e) {
        console.error(`Could not fetch items: ${e}`);
      }
    };

    const fetchOutfits = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/outfit");
        setOutfits(data)
      } catch (e) {
        console.error("Could not fetch outfits: ", e);
      }
    };
    fetchItems();
    fetchOutfits()
  }, [category]);

  const filterClothes = (category, itemsList = items) => {
    if (category === "All Items") {
      setFilteredItems(itemsList);
    } else if (category === "Outfits") {
      setFilteredItems([])
    } else {
      const filtered = itemsList.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredItems(filtered);
    }
  };

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
        {category === "Outfits" ? (
          <div class="closet-page__outfits">
            {outfits.map(outfit => (
              <div class="outfit" key={outfit.id} onClick={() => navigate(`/outfit/${outfit.id}`)}>
                <img src={outfit.thumbnail} alt="" class="closet-page__outfit"/>
              </div>
            ))}
          </div>
        ) : <div className="closet-page__results">
          {filteredItems.map((item) => (
            <img src={item.image_url}
              alt={item.name}
              onClick={() => navigate(`/item/${item.id}`)}
              key={item.id}
              className="closet-page__item"
            />
          ))}
        </div>}
        
      </div>
    </main>
  );
}

export default ClosetPage;
