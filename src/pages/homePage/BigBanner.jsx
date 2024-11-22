import React from "react";
import * as HomeImage from "../../components/HomePageImages/HomeImages";
const BigBanner = () => {
  return (
    <div className="w-full h-full bg-[#310914] font-inter">
      <div className="flex flex-col items-center w-full h-full max-w-[1460px] mx-auto lg:px-10 px-2">
        {/* upper paert  */}
        <div className="lg:px-10 px-2 w-full mb-8">
          <div className="flex w-full h-full justify-between">
            {/* left part  */}
            <div className="flex items-start w-[50%]  h-full">
              <img
                src={HomeImage.Bigbanner1}
                alt="Bigbanner1"
                className="w-full h-full object-cover"
              />
              <img
                src={HomeImage.Bigbanner2}
                alt="Bigbanner2"
                className="w-full h-full object-cover"
              />
            </div>
            {/* right part  */}
            <div className="flex items-start w-[50%]  h-full">
              <img
                src={HomeImage.Bigbanner3}
                alt="Bigbanner1"
                className="w-full h-full object-cover"
              />
              <img
                src={HomeImage.Bigbanner4}
                alt="Bigbanner2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        {/* lower part is here  */}
        <div className="flex lg:flex-row flex-col lg:items-start items-center w-full h-full max-w-[1460px] mx-auto mb-4 justify-between">
          {/* left part  */}
          <div className="flex items-center justify-between w-full h-full">
            <img
              src={HomeImage.Bigbanner5}
              alt="Bigbanner1"
              className="w-full h-full object-cover"
            />
            <img
              src={HomeImage.Bigbanner6}
              alt="Bigbanner2"
              className="w-full h-full object-cover"
            />
          </div>
          {/* right part  */}
          <div className="flex items-center justify-between w-full h-full">
            <img
              src={HomeImage.Bigbanner5}
              alt="Bigbanner1"
              className="w-full h-full object-cover"
            />
            <img
              src={HomeImage.Bigbanner6}
              alt="Bigbanner2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BigBanner;
