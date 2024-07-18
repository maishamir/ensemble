import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ImageSlider from "../../component/ImageSlider/ImageSlider";
import "./OutfitDetailsPage.scss";
import backIcon from "../../assets/arrow-ios-back.svg";
import { Link } from "react-router-dom";

function OutfitDetailsPage() {
  const { id } = useParams();
  const [outfit, setOutfit] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchOutfit = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/outfit/${id}`);
        setOutfit(data);
      } catch (error) {
        console.error("Could not fetch outfit", error);
      }
    };
    fetchOutfit();
  }, [id]);

  if (!outfit) {
    return <div>Loading...</div>;
  }

  const handleEditOutfit = () => {
    navigate(`/edit-outfit/${id}`);
  };

  const handleDeleteOutfit = async () => {
    try {
      await axios.delete(`http://localhost:3000/outfit/${id}`)
      alert("Outfit deleted successfully")
      navigate(`/closet/Outfits`)
    }

    catch (e) {
      console.error(`Could not delete outfit: ${e}`)
    }
  }

  return (
    <>
      <Link to="/closet/Outfits">
        <img
          src={backIcon}
          alt="back arrow"
          className="outfit-details__back-link"
        />
      </Link>
      <div className="outfit-details">
        <div className="outfit-details__items">
          <ImageSlider slides={outfit.clothing_items} />
        </div>
        <div className="outfit-details__info">
          <h2 className="outfit-details__name">{outfit.name}</h2>
          <p className="outfit-details__description">{outfit.description}</p>
          <div class="item-details__buttons">
            <button onClick={handleEditOutfit} className="outfit-details__edit">
              Edit
            </button>
            <button onClick={handleDeleteOutfit} className="outfit-details__edit">
              Delete
            </button>
          </div>

          <div className="outfit-details__container">
            <h2>Items in this outfit</h2>
            <div className="outfit-details__allItems">
              {outfit.clothing_items.map(item => (
                <Link to={`/item/${item.id}`}><img src={item.image_url} alt={item.name} key={item.id} /></Link>    
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OutfitDetailsPage;
