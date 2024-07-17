import axios from "axios";
import React, { useEffect, useState } from "react";
import "./PlannerPage.scss";

function PlannerPage() {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [outfitName, setOutfitName] = useState("");
  const [outfitDescription, setOutfitDescription] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/clothing_item");
        setItems(data);
      } catch (e) {
        console.error("Could not fetch items:", e);
      }
    };
    fetchItems();
  }, []);

  const handleSelectItem = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((it) => it.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleSaveOutfit = async () => {
    if (!outfitName) {
      alert("Please enter a name for your outfit.");
      return;
    }

    // set the image of the first item to be the thumbnail
    let thumbnail = "";
    if (selectedItems.length > 0) {
      thumbnail = selectedItems[0].image_url;
    } else {
      thumbnail = null;
    }

    try {
      await axios.post("http://localhost:3000/outfit", {
        name: outfitName,
        date: new Date().toISOString(),
        description: outfitDescription,
        clothing_item_ids: selectedItems.map((item) => item.id),
        thumbnail,
      });

      alert("Outfit saved successfully");
      setOutfitName("");
      setOutfitDescription("");
      setSelectedItems([]);
    } catch (error) {
      console.error("Couldn't save outfit: ", error);
      alert("Couldn't save outfit");
    }
  };

  return (
    <main className="outfit-planner">
      <header className="outfit-planner__header">
        {/* <h1 className="outfit-planner__title">Outfit Planner</h1> */}
        <input
          type="text"
          value={outfitName}
          onChange={(e) => setOutfitName(e.target.value)}
          placeholder="Outfit Name"
          className="outfit-planner__name"
        />
        <textarea
          value={outfitDescription}
          onChange={(e) => setOutfitDescription(e.target.value)}
          placeholder="Description"
          className="outfit-planner__description"
        ></textarea>
        <button onClick={handleSaveOutfit} className="outfit-planner__button">
          Save Outfit
        </button>
      </header>

      <div class="outfit-planner__selected-container">
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
      </div>

      <div className="outfit-planner__container">
        <h2>Available Items</h2>
        <div className="outfit-planner__items">
          {items.map((item) => (
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
    </main>
  );
}

export default PlannerPage;
