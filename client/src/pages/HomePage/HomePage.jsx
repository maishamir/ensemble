import React, { useEffect } from "react";
import { useState } from "react";
import "./HomePage.scss";
import WeatherCard from "../../component/WeatherCard/WeatherCard";
import RecentItems from "../../component/RecentItems/RecentItems";
import axios from "axios";
import RecentOutfits from "../../component/RecentOutfits/RecentOutfits";

function HomePage() {
  const [recentItems, setRecentItems] = useState([]);
  const [getRecentOutfits, setRecentOutfits] = useState([]);
  const [weather, setWeather] = useState(null);

  useEffect(() => {

    const fetchWeather = async () => {
      try {
        const response = await axios.get("http://localhost:3000/weather");
        setWeather(response.data);
      } catch (e) {
        console.error("Error fetching weather data:", e);
      }
    };
    fetchWeather();
  }, []);

  const getWeatherSuggestion = (weather) => {
    if (!weather) {
      return "No data available at the moment. Try again in a bit";
    }
    const temp = weather.main.temp;

    if (temp < 10) {
      return "It's chilly out! Wear something nice and toasty.";
    }
    if (temp < 16) {
      return "It's nice and cool outside. Maybe wear a light windbreaker.";
    } else {
      return "It's nice and warm out today! Wear something light and comfortable.";
    }
  };
  return (
    <main className="home-page">
      <h1 className="home-page__greeting">Welcome back, Maisha!</h1>
      {weather && (
        <WeatherCard
          description={weather.weather[0].description}
          suggestion={getWeatherSuggestion(weather)}
        />
      )}

      <div className="home-page__items">
        <RecentItems />
        <RecentOutfits />
      </div>
    </main>
  );
}

export default HomePage;
