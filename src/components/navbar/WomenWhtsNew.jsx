import React from 'react'
import * as HomeImage from '../../components/HomePageImages/HomeImages';

const WomenWhtsNew = () => {
  return (
    <section className="px-4 py-6">
    {/* Wrapper container */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
      {/* Just In Section */}
      <div>
        <h2 className="font-semibold text-lg mb-4">Just In</h2>
        <div className="flex flex-col gap-4">
          <div className="w-full h-56 bg-gray-300 flex items-center justify-center">
            <img src={HomeImage.JustIn_1} alt='firstpic'/>
          </div>
          <div className="w-full h-56 bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.JustIn_2} alt='firstpic'/>
          </div>
        </div>
      </div>

      {/* New Brands Section */}
      <div>
        <h2 className="font-semibold text-lg mb-4">New Brands</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.Savi} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.Midsummer} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.Anuvas} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.Anuvas} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.TheVeshtiCompany} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.Theater} alt='firstpic'/>
          </div>
        </div>
      </div>

      {/* New Styles Section */}
      <div>
        <h2 className="font-semibold text-lg mb-4">New Styles from</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.RsvpNykaa} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.Kotty} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.Nud} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.Kica} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.JaipurKurti} alt='firstpic'/>
          </div>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <img src={HomeImage.JaipurKurti} alt='firstpic'/>
          </div>
        </div>
      </div>

      {/* New Trends Section */}
      <div>
        <h2 className="font-semibold text-lg mb-4">New Trends</h2>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center">
            <img src={HomeImage.HighRiseTrousers} alt='firstpic'/>
            </div>
            <p className="text-gray-600 font-inter text-[8px]">High-Rise Trousers</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-24 bg-gray-300 flex items-center justify-center">
            <img src={HomeImage.PopHuedBags} alt='firstpic' className='w-full h-full object-cover'/>
            </div>
            <p className="text-gray-600 font-inter text-[8px]">Pop-Hued Bags</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center">
            <img src={HomeImage.RomanticFlorals} alt='firstpic'/>
            </div>
            <p className="text-gray-600 font-inter text-[8px]">Romantic Florals</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-28 bg-gray-300 flex items-center justify-center">
            <img src={HomeImage.FloralJewellery} alt='firstpic' className='w-full h-full object-cover'/>
            </div>
            <p className="text-gray-600 font-inter text-[8px]">Floral Jewellery</p>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-gray-300 flex items-center justify-center">
            <img src={HomeImage.CottonCore} alt='firstpic'/>
            </div>
            <p className="text-gray-600 font-inter text-[8px]">Cotton Core</p>
          </div>
          
        </div>
      </div>
    </div>
  </section>
  )
}

export default WomenWhtsNew