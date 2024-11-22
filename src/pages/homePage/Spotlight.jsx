import React from 'react';
import * as HomeImage from "../../components/HomePageImages/HomeImages";
const spotlightData = [
  {
    image: HomeImage.spotlight1,
    discount: 'Up to 50% off',
    description: 'Stylish & elegant dresses',
  },
  {
    image: HomeImage.spotlight2,
    discount: 'Up to 50% off',
    description: 'Chic dresses & tops',
  },
  {
    image: HomeImage.spotlight3,
    discount: 'Up to 65% off',
    description: 'Contemporary ethnics',
  },
  {
    image: HomeImage.spotlight4,
    discount: 'Min 40% off',
    description: 'Dynamic athletic styles',
  },
  {
    image: HomeImage.spotlight5,
    discount: 'Up to 35% off',
    description: 'Gen-Z dresses across US',
  },
  {
    image: HomeImage.spotlight6,
    discount: 'Up to 35% off',
    description: 'Gen-Z dresses across US',
  },
  {
    image: HomeImage.spotlight7,
    discount: 'Up to 35% off',
    description: 'Gen-Z dresses across US',
  },
  {
    image: HomeImage.spotlight8,
    discount: 'Up to 35% off',
    description: 'Gen-Z dresses across US',
  },
  {
    image: HomeImage.spotlight9 ,
    discount: 'Up to 35% off',
    description: 'Gen-Z dresses across US',
  },
  {
    image: HomeImage.spotlight10,
    discount: 'Up to 35% off',
    description: 'Gen-Z dresses across US',
  },
];

const Spotlight = () => {
  return (
    <div className="p-6 lg:py-10 w-full h-full max-w-[1400px] mx-auto font-inter">
      <h2 className="text-sm uppercase text-secondary-1 font-bold mb-1 font-inter">In the Spotlight</h2>
      <h1 className="text-2xl font-bold mb-6">Covetable finds this Week</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {spotlightData.map((item, index) => (
          <div key={index} className="flex flex-col items-left text-left bg-white cursor-pointer rounded-lg overflow-hidden">
            <img src={item.image} alt={item.brand} className="w-full h-full object-cover" />
            <div className="py-4">
              <h3 className="text-lg font-semibold">{item.discount}</h3>
              <p className="text-black/90">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spotlight;
