import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./ItemDetailsPage.scss";
import backIcon from "../../assets/arrow-ios-back.svg";

function ItemDetailsPage() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [item, setItem] = useState(null);

  useEffect(() => {
    const fetchItem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/clothing_item/${id}`
        );
        setItem(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Could not fetch item", error);
        setLoading(false);
        setError(error);
      }
    };
    fetchItem();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching item</div>;
  return (
      <div className="item-details">
          <Link to="/closet"> <img
        src={backIcon}
        alt="back arrow"
        className="item-details__back-link"
      /></Link>
      
      <div class="item-details__container">
        <img src={item.image_url} alt={item.name} class="item-details__image" />

        <div class="item-details__details">
          <h1 className="item-details__name">{item.name}</h1>
          <p className="item-details__category">Category: {item.category}</p>
          <p className="item-details__size">Size: {item.size}</p>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailsPage;
