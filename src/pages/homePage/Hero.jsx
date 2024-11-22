import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h-full  lg:min-h-[300px] lg:mb-8 mb-2'>
      <div>
        <img src='/heroPoster1.avif' alt='hero-poster' className='w-full lg:h-[300px] h-auto lg:object-cover object-contain '/>
      </div>
    </div>
  )
}

export default Hero