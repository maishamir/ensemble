import axios from 'axios';
import React, { useState, useEffect } from 'react'
import ItemCard from '../itemCard/ItemCard';

function RecentOutfits() {

    const [recentOutfits, setRecentOutfits] = useState([]);

    useEffect(() => {
        const fetchOutfits = async () => {
            try {
                const { data } = await axios.get("http://localhost:3000/outfit/recent");
                setRecentOutfits(data)
                alert("Fetching recent outfits")
                console.log(recentOutfits)
            } catch (e) {
                console.error('Error fetching recent outfits', e);
            }
        }
        fetchOutfits();
    }, [])
  return (
      <section className="recent-outfits">
          <p className="recent-outfits__title">Recent Outfits</p>
          <div className="recent-outfit__images">
              {recentOutfits.map(item => (
                  <ItemCard image={item.thumbnail} alt={item.name} name={item.name} key={item.id} />
              ))}
          </div>
    </section>
  )
}

export default RecentOutfits