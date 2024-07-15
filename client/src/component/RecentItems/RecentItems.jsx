import { useState, useEffect } from "react";
import axios from "axios";
import './RecentItems.scss'
import ItemCard from "../itemCard/ItemCard";

function RecentItems() {

  const [recentItems, setRecentItems] = useState([]);
  

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/clothing_item/recent")
        setRecentItems(data)
      } catch (e) {
        console.error('Error fetching recent items: ', e);
      }
    }
    fetchItems();
  }, [])

  console.log(recentItems)
  return (
    <section className="recent-items">
          <p className="recent-items__title">Recent Items</p>
          <div className="recent-items__images">
        {/* {recentItems.map(item => ( */}
          {/* <img key={item.id} src={item.image_url} className="recent-items__image" alt={item.name} /> */ }
        {recentItems.map(item => (
          <ItemCard image={item.image_url} alt={item.name} name={item.name} key={item.id} />
          ))}
          </div>
    </section>
  );
}

export default RecentItems;
