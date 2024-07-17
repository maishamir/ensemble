import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import ImageSlider from "../../component/ImageSlider/ImageSlider";
import "./OutfitDetailsPage.scss";
import backIcon from "../../assets/arrow-ios-back.svg";
import { Link } from "react-router-dom";



function OutfitDetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [outfit, setOutfit] = useState(null);

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

  const handleEditOutfit = (outfit) => {
    navigate(`/planner/${id}`, {state: {outfit}})
  }

  if (!outfit) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {/* <Link to="/closet/Outfits">
        {" "}
        <img
          src={backIcon}
          alt="back arrow"
          className="outfit-details__back-link"
        />
      </Link> */}
      <div className="outfit-details">
        <Link to="/closet/Outfits">
        {" "}
        <img
          src={backIcon}
          alt="back arrow"
          className="outfit-details__back-link"
        />
      </Link>
        <div className="outfit-details__items">
          <ImageSlider slides={outfit.clothing_items} />
        </div>
        <div class="outfit-details__info">
          <h2 className="outfit-details__name">{outfit.name}</h2>
          <p className="outfit-details__description">{outfit.description}</p>
          <button onClick={() => handleEditOutfit(outfit)} className="outfit-details__edit">Edit</button>
        </div>
      </div>
    </>
  );
}

export default OutfitDetailsPage;
