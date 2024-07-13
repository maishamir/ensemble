import React, { useEffect, useState } from "react";
import "./WeatherCard.scss";
import axios from "axios";

function WeatherCard({ description, suggestion }) {
  const [weather, setWeather] = useState(null);
  const [iconURL, setIconURL] = useState("");

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const { data } = await axios.get("http://localhost:3000/weather");
        setWeather(data);

        const iconCode = data.weather[0].icon;
        const iconSrc = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        setIconURL(iconSrc);
      } catch (e) {
        console.error(`Error fetching icon data: ${e}`);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="weather-card">
      {iconURL && <img src={iconURL} alt="Weather icon" />}
      <p>{suggestion}</p>
    </div>
  );
}

export default WeatherCard;
