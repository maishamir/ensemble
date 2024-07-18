import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditOutfitPage() {
  const categories = [
    "All Items",
    "Top",
    "Bottom",
    "Dress",
    "Footwear",
    "Accessory",
  ]; // Define categories array

  const { id } = useParams();
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [outfitName, setOutfitName] = useState("");
  const [outfitDescription, setOutfitDescription] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Items");
  const [outfit, setOutfit] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/clothing_item");
        setItems(data);
        filterClothes("All Items", data); // Initialize with "All Items" filter
      } catch (e) {
        console.error("Could not fetch items:", e);
      }
    };

    const fetchOutfit = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/outfit/${id}`);
        setOutfit(data);
        setOutfitName(data.name);
        setOutfitDescription(data.description);
        setSelectedItems(data.clothing_items);
      } catch (e) {
        console.error("Could not fetch outfit data: ", e);
      }
    };
    fetchItems();
    if (id) {
      fetchOutfit();
    }
  }, [id]);

  const filterClothes = (category, itemsList = items) => {
    if (category === "All Items") {
      setFilteredItems(itemsList);
    } else {
      const filtered = itemsList.filter(
        (item) =>
          item.category &&
          item.category.toLowerCase() === category.toLowerCase()
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
  };

  const handleSelectCategory = (e) => {
    const selectedCategory = e.target.value;
    setSelectedCategory(selectedCategory);
    filterClothes(selectedCategory);
  };

  const handleSaveOutfit = async (e) => {
    e.preventDefault();
    if (!outfitName) {
      alert("Please enter a name for your outfit.");
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
      const response = await axios.put(`http://localhost:3000/outfit/${id}`, {
        name: outfitName,
        date: new Date().toISOString().slice(0, 19).replace("T", " "),
        description: outfitDescription,
        clothing_item_ids: JSON.stringify(selectedItems.map((item) => item.id)), // Ensure JSON format
        thumbnail,
      });

      setOutfitName("");
      setOutfitDescription("");
      setSelectedItems([]);
      navigate(`/outfit/${id}`);
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
        <input
          type="text"
          value={outfitName}
          onChange={(e) => setOutfitName(e.target.value)}
          placeholder="Outfit Name"
          className="outfit-planner__name"
        />{" "}
        <br />
        <textarea
          value={outfitDescription}
          onChange={(e) => setOutfitDescription(e.target.value)}
          placeholder="Description"
          className="outfit-planner__description"
        ></textarea>{" "}
        <br />
        <button type="submit" className="outfit-planner__button">
          Save Outfit
        </button>
      </form>
    </main>
  );
}

export default EditOutfitPage;
