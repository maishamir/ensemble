import React from 'react'
import './HomePage.scss'
import WeatherCard from '../../component/WeatherCard/WeatherCard'
import RecentItems from '../../component/RecentItems/RecentItems'
import Favourites from '../../component/Favourites/Favourites'

function HomePage() {
  return (
    <main className='home-page'>
      <h1 className='home-page__greeting'>Welcome back, Maisha!</h1>
      <WeatherCard />
      <RecentItems />
      <Favourites/>
    </main>
  )
}

export default HomePage