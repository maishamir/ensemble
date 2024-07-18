import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./PlannerPage.scss";

function PlannerPage() {
  const categories = [
    "All Items",
    "Tops",
    "Sweaters",
    "Bottoms",
    "Skirts",
    "Dresses",
    "Footwear",
    "Outerwear",
    "Loungewear",
    "Accessories",
  ]; 

  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [outfitName, setOutfitName] = useState("");
  const [outfitDescription, setOutfitDescription] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [errorMessage, setErrorMessage] = useState("")
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/clothing_item");
        setItems(data);
        filterClothes(selectedCategory, data); // Initialize with the selected category filter
      } catch (e) {
        console.error("Could not fetch items:", e);
      }
    };
    fetchItems();
  }, [selectedCategory]); // Only re-fetch items when the selected category changes

  const filterClothes = (category, itemsList = items) => {
    if (category === "All Items") {
      setFilteredItems(itemsList);
    } else {
      const filtered = itemsList.filter(
        (item) =>
          item.category && item.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredItems(filtered);
    }
  };

  const handleSelectItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((it) => it.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
    setErrorMessage("")
  };

  const handleSelectCategory = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    filterClothes(selectedCategory);
  };

  const handleSaveOutfit = async (e) => {
    e.preventDefault();
    if (!outfitName) {
      setErrorMessage("Please enter a name for your outfit.");
      return;
    }
    if (selectedItems.length === 0) {
      setErrorMessage("Please select items before saving your outfit.");
      return;
    }

    // Set the image of the first item to be the thumbnail
    let thumbnail = "";
    if (selectedItems.length > 0) {
      thumbnail = selectedItems[0].image_url;
    } else {
      thumbnail = null;
    }

    try {
      await axios.post("http://localhost:3000/outfit", {
        name: outfitName,
        date: new Date().toISOString().slice(0, 19).replace("T", " "),
        description: outfitDescription,
        clothing_item_ids: JSON.stringify(selectedItems.map((item) => item.id)), // Ensure JSON format
        thumbnail,
      });

      setOutfitName("");
      setOutfitDescription("");
      setSelectedItems([]);
      navigate('/closet/Outfits');
    } catch (error) {
      console.error("Couldn't save outfit: ", error);
    }
  };

  return (
    <main className="outfit-planner">
      <div className="outfit-planner__categories">
        <label htmlFor="categories">Category: </label>
        <select
          name="categories"
          value={selectedCategory}
          onChange={handleSelectCategory}
          className="outfit-planner__categoryPicker"
        >
          {categories.map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className="outfit-planner__container">
        <div className="outfit-planner__available-items">
          {filteredItems.map((item) => (
            <img
              src={item.image_url}
              onClick={() => handleSelectItem(item)}
              className={`outfit-planner__images ${
                selectedItems.includes(item) ? "selected" : ""
              }`}
              key={item.id}
              alt={item.name}
            />
          ))}
        </div>
      </div>

      <section className="outfit-planner__selected-items">
        <h2>Selected Items</h2>
        <div className="outfit-planner__selected">
          {selectedItems.map((item) => (
            <img
              src={item.image_url}
              alt={item.name}
              key={item.id}
              onClick={() => handleSelectItem(item)}
              className="outfit-planner__images selected"
            />
          ))}
        </div>
      </section>

      <form className="outfit-planner__form" onSubmit={handleSaveOutfit}>
        {(errorMessage !== "") ? <p className="outfit-planner__error">{errorMessage}</p> : null }
        <input
          type="text"
          value={outfitName}
          onChange={(e) => setOutfitName(e.target.value)}
          placeholder="Outfit Name"
          className="outfit-planner__name"
        /> <br/>
        <textarea
          value={outfitDescription}
          onChange={(e) => setOutfitDescription(e.target.value)}
          placeholder="Description"
          className="outfit-planner__description"
        ></textarea> <br />
        <button type="submit" className="outfit-planner__button">
          Save Outfit
        </button>
      </form>
    </main>
  );
}

export default PlannerPage;
