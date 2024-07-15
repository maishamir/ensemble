import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function OutfitDetailsPage() {
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

  if (!outfit) {
    return <div>Loading...</div>;
  }

  return (
    <div className="outfit-details">
      <img src={outfit.thumbnail} alt={outfit.name} className="outfit-details__image" />
      <h2 className="outfit-details__name">{outfit.name}</h2>
      <p className="outfit-details__description">{outfit.description}</p>
      <div className="outfit-details__items">
        {outfit.clothing_items.map(item => (
          <div key={item.id} className="outfit-details__item">
            <img src={item.image_url} alt={item.name} className="outfit-details__item-image" />
            <p className="outfit-details__item-name">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OutfitDetailsPage;
