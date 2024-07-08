import React from 'react'
import './WeatherCard.scss'
import { TiWeatherDownpour } from "react-icons/ti";

function WeatherCard() {
  return (
      <div className='weather-card'>
          <TiWeatherDownpour /> 
          <p>It's raining! How about an umbrella and a cozy windbreaker?</p>
      </div>
  )
}

export default WeatherCard