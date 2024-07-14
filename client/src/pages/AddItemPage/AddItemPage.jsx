import React, { useState } from "react";
import axios from "axios";
import "./AddItemPage.scss";

const placeholderImage = "https://i.pinimg.com/originals/4a/f1/4a/4af14a2c6b4f8f4f4e11e11c4df6d5b3.png";
const categories = ["Top", "Bottom", "Footwear", "Accessory", "Dress"];

function AddItemPage() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    size: "",
    image_url: "",
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleImageUpload = async (clothingItemId) => {
    if (!image) return;

    const imageData = new FormData();
    imageData.append('file', image);
    imageData.append('clothingItemId', clothingItemId); // Add clothingItemId to the form data

    try {
      const response = await axios.post('http://localhost:3000/clothing_item/upload', imageData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFormData((prevFormData) => ({
        ...prevFormData,
        image_url: response.data.path,
      }));
      alert('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error.response ? error.response.data : error.message);
      alert('Error uploading image. Please try again.');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // First, create the clothing item
      const newItemResponse = await axios.post(
        "http://localhost:3000/clothing_item",
        {
          name: formData.name,
          category: formData.category,
          size: formData.size,
        }
      );

      const clothingItemId = newItemResponse.data.id;

      // Then, upload the image with the clothingItemId
      await handleImageUpload(clothingItemId);

      // Reset the form
      setFormData({
        name: "",
        category: "",
        size: "",
        image_url: "",
      });
      setImage(null);
      alert("Item added successfully");
    } catch (e) {
      console.error("Error adding item:", e.response ? e.response.data : e.message);
      alert("Error adding item. Please try again.");
    }
  };

  return (
    <main className="add-item-page">
      <h1 className="add-item-page__title">Add a new item</h1>
      <div className="add-item">
        <div className="add-item__preview-container">
          {formData.image_url ? (
            <img
              src={formData.image_url}
              alt="Preview"
              className="add-item__preview"
            />
          ) : (
            <img src={placeholderImage} alt="Placeholder" className="add-item__preview"/>
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
            <input type="file" onChange={handleImageChange} name="file" id="file"/> {/* Ensure the field name is 'file' */}
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
