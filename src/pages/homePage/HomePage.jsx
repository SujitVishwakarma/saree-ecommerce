import React from 'react'
import Hero from '../homePage/Hero'
import CategorySlider from './CategorySlider'
import BigSlider from './BigSlider'
import BigBanner from './BigBanner'
import Spotlight from './Spotlight'
import HiddenGems from './HiddenGems'
import Exclusive from './Exclusive'
import Hottest from './Hottest'
const HomePage = () => {
  return (
    <div className='w-full h-full'>
      <Hero/>
      <CategorySlider/>
      <BigSlider/>
      <BigBanner/>
      <Spotlight/>
      <HiddenGems/>
      <Exclusive/>
      <Hottest/>
    </div>
  )
}

export default HomePage