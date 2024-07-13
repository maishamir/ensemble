import React, { useState } from "react";
import axios from "axios";
import "./AddItemPage.scss";
import {Link} from "react-router-dom"

const placeholderImage = "https://i.pinimg.com/originals/4a/f1/4a/4af14a2c6b4f8f4f4e11e11c4df6d5b3.png";


const categories = ["Top", "Bottom", "Footwear", "Accessory", "Dress"];

function AddItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    size: "",
    image_url: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Create the item with the provided image URL
      const newItemResp = await axios.post(
        "http://localhost:3000/clothing_item",
        {
          name: formData.name,
          category: formData.category,
          size: formData.size,
          image_url: formData.image_url,
        }
      );

      // Reset the form
      setFormData({
        name: "",
        category: "",
        size: "",
        image_url: "",
      });
      alert("Item added successfully");
    } catch (e) {
      console.error("Error adding item:", e);
      alert("Error adding item. Please try again.");
    }
  };

  return (
    <main class="add-item-page">
      <h1 className="add-item-page__title">Add a new item</h1>
      <div className="add-item">
      <div className="add-item__preview-container">
        {formData.image_url && (
          <img
            src={formData.image_url || placeholderImage}
            alt="Preview"
            className="add-item__preview"
          />
        )}
      </div>
      <form className="add-item__form" onSubmit={handleSubmit}>
        <div className="add-item__field">
          <input
            className="add-item__input"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            placeholder="Name"
          />
        </div>
        <div className="add-item__field">
          <select
            className="add-item__select"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
          >
            <option value="" disabled>
              Select a category
            </option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <div className="add-item__field">
          <input
            className="add-item__input"
            type="text"
            name="size"
            value={formData.size}
            onChange={handleInputChange}
            required
            placeholder="Size"
          />
        </div>
        <div className="add-item__field">
          <input
            className="add-item__input"
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleInputChange}
            required
            placeholder="image url"
          />
        </div>

        <button className="add-item__button" type="submit">
          Add Item
        </button>
      </form>
    </div>
    </main>
    
  );
}

export default AddItemPage;
