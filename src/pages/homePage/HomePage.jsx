import React from 'react'
import Hero from '../homePage/Hero'
import CategorySlider from './CategorySlider'
import BigSlider from './BigSlider'
import BigBanner from './BigBanner'
import Spotlight from './Spotlight'
const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <Hero/>
      <CategorySlider/>
      <BigSlider/>
      <BigBanner/>
      <Spotlight/>
    </div>
  )
}

export default HomePage