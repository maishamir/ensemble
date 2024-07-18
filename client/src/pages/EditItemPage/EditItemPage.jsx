import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function EditItemPage() {
  const categories = ["Top", "Bottom", "Footwear", "Accessory", "Dress"];
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    size: "",
    image_url: "",
  });
  const [image, setImage] = useState(null);
  const { id } = useParams();
  const [previewURL, setPreviewURL] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/clothing_item/${id}`);
        setFormData({
          name: data.name,
          category: data.category,
          size: data.size,
          image_url: data.image_url,
        });
        setPreviewURL(data.image_url); // Ensure this is the correct field for the image URL
      } catch (e) {
        console.error("Could not fetch item data: ", e);
      }
    };
    fetchItem();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewURL(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewURL(formData.image_url);
    }
  };

  const handleImageUpload = async (clothingItemId) => {
    if (!image) return formData.image_url; // Return existing image URL if no new image is uploaded

    const imageData = new FormData();
    imageData.append("file", image);
    imageData.append("clothingItemId", clothingItemId); // Add clothingItemId to the form data

    try {
      const response = await axios.post(
        "http://localhost:3000/clothing_item/upload",
        imageData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      return response.data.path;
    } catch (error) {
      console.error(
        "Error uploading image:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let imagePath = formData.image_url;
      if (image) {
        imagePath = await handleImageUpload(id);
      }

      await axios.put(`http://localhost:3000/clothing_item/${id}`, {
        name: formData.name,
        category: formData.category,
        size: formData.size,
        image_url: imagePath,
      });

      navigate(`/item/${id}`);
    } catch (e) {
      console.error(
        "Error updating item:",
        e.response ? e.response.data : e.message
      );
    }
  };

  return (
    <main className="add-item-page">
      <h1 className="add-item-page__title">Edit Item</h1>
      <div className="add-item">
        <div className="add-item__preview-container">
          <img src={previewURL} alt="Preview" className="add-item__preview" />
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
              type="file"
              onChange={handleImageChange}
              name="file"
              id="file"
            />
          </div>
          <button className="add-item__button" type="submit">
            Update Item
          </button>
        </form>
      </div>
    </main>
  );
}

export default EditItemPage;
