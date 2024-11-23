import React from 'react'
import * as HomeImage from "../../components/HomePageImages/HomeImages";

const HiddenGems = () => {
  return (
    <div className='w-full h-full' style={{background:"rgb(26, 5, 5)"}}>
        <div className="flex flex-col lg:flex-row items-start w-full h-full max-w-[1460px] mx-auto lg:px-10 px-2">
            {/* left side big Image  */}
            <div className='flex flex-col lg:items-start items-center w-full h-full '>
                <div className='flex items-start w-[50%]  h-full'>
                    <img src={HomeImage.hiddenhem1} alt='hiddenhem1'className="w-full h-full object-cover" />
                    <img src={HomeImage.hiddenhem2} alt='hiddenhem2' className="w-full h-full object-cover"/>
                </div>
                <div className='flex items-start w-[50%]  h-full'>
                    <img src={HomeImage.hiddenhem5} alt='hiddenhem1' className="w-full h-full object-cover"/>
                    <img src={HomeImage.hiddenhem6} alt='hiddenhem2' className="w-full h-full object-cover"/>
                </div>
            </div>
            <div className='flex flex-col  lg:items-start items-center w-full h-full  '>
                <div className='flex items-start w-[50%]    h-full'>
                    <img src={HomeImage.hiddenhem3} alt='hiddenhem1' className="w-full h-full object-cover"/>
                    <img src={HomeImage.hiddenhem4} alt='hiddenhem2' className="w-full h-full object-cover"/>
                </div>
                <div className='flex items-start w-[50%]   h-full'>
                    <img src={HomeImage.hiddenhem7} alt='hiddenhem1' className="w-full h-full object-cover" />
                    <img src={HomeImage.hiddenhem10} alt='hiddenhem2' className="w-full h-full object-cover"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HiddenGems