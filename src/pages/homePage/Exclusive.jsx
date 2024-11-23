import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import * as HomeImage from "../../components/HomePageImages/HomeImages";

// Spotlight data with discount details
const spotlightData = [
  {
    image: HomeImage.exclusive1,
    discount: "Up to 50% off",
  },
  {
    image: HomeImage.exclusive2,
    discount: "Up to 50% off",
  },
  {
    image: HomeImage.exclusive3,
    discount: "Up to 65% off",
  },
  {
    image: HomeImage.exclusive4,
    discount: "Min 40% off",
  },
  {
    image: HomeImage.exclusive5,
    discount: "Up to 35% off",
  },
  {
    image: HomeImage.exclusive6,
    discount: "Up to 35% off",
  },
  {
    image: HomeImage.exclusive9,
    discount: "Up to 35% off",
  },
  {
    image: HomeImage.exclusive8,
    discount: "Up to 35% off",
  },
  {
    image: HomeImage.exclusive9,
    discount: "Up to 35% off",
  },
  {
    image: HomeImage.exclusive4,
    discount: "Up to 35% off",
  },
];
const exclusiveSliderTwoData = [
    {
      image: HomeImage.exclusivesSl1,
    },
    {
      image: HomeImage.exclusivesSl2,
    },
    {
      image: HomeImage.exclusivesSl3,
    },
    {
      image: HomeImage.exclusivesSl4,
    },
    {
      image: HomeImage.exclusivesSl5,
    },
    {
      image: HomeImage.exclusivesSl6,
    },
    {
      image: HomeImage.exclusivesSl7,
    },
    {
      image: HomeImage.exclusivesSl8,
    },
    {
      image: HomeImage.exclusivesSl9,
    },
    {
      image: HomeImage.exclusivesSl10,
    },
  ];

const Exclusive = () => {
  const sliderRef = useRef(null);
const sliderRef2 = useRef(null);
  // Slider settings with responsive behavior
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
//   second slider 
const secondsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // Functions to control the slider via ref
  const slideNext = (e) => {
    e.stopPropagation();
    sliderRef.current && sliderRef.current.slickNext();
  };

  const slidePrev = (e) => {
    e.stopPropagation();
    sliderRef.current && sliderRef.current.slickPrev();
  };

  const slideNext2 = (e) => {
    e.stopPropagation();
    sliderRef2.current && sliderRef2.current.slickNext();
  };

  const slidePrev2 = (e) => {
    e.stopPropagation();
    sliderRef2.current && sliderRef2.current.slickPrev();
  };
  return (
    <div className="w-full h-full max-w-[1460px] mx-auto">
      {/* Title Section */}
      <div className="p-6 lg:py-10 w-full h-full font-inter">
        <h3 className="text-sm uppercase text-secondary-1 font-bold mb-1 font-inter">
          ONLY ON NYKAA
        </h3>
        <h2 className="text-2xl font-bold mb-6">Exclusive Labels to Own</h2>
      </div>

      {/* Slider Section */}
      <div className="relative px-4 mb-5">
        {/* Custom Navigation Buttons Outside the Slider */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-1/2 left-[-20px] transform -translate-y-1/2 z-10"
        >
          <button
            onClick={slidePrev}
            className="bg-white bg-opacity-50 text-secondary-1 border border-secondary-1/20 rounded-full w-14 h-14 flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="text-xl" />
          </button>
        </div>
        <div className="absolute top-1/2 right-[-20px] transform -translate-y-1/2 z-10">
          <button
            onClick={slideNext}
            className="bg-white bg-opacity-50 text-secondary-1 border border-secondary-1/20 rounded-full w-14 h-14 flex items-center justify-center"
            aria-label="Next Slide"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>

        {/* Slider Component */}
        <Slider ref={sliderRef} {...settings}>
          {/* Use px-4 for padding between cards */}
          {spotlightData.map((item, index) => (
            <div
              key={index}
              className="px-2" // Add px-4 to give spacing between cards
            >
              <div className="bg-white cursor-pointer rounded-lg overflow-hidden ">
                <img
                  src={item.image}
                  alt={`Exclusive item ${index + 1}`}
                  className="w-full h-full object-cover" // Keep consistent image height
                  loading="lazy" // Lazy load images for performance
                />
                <div className="py-4 ">
                  <h3 className="text-lg font-semibold font-inter">
                    {item.discount}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="relative px-4 mb-8">
        {/* Custom Navigation Buttons Outside the Slider */}
      </div>

      {/* second slider  */}
      <div className="relative px-4 mb-5">
        {/* Custom Navigation Buttons Outside the Slider */}
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute top-1/2 left-[-8px] transform -translate-y-1/2 z-10"
        >
          <button
            onClick={slidePrev2}
            className="bg-white bg-opacity-50 text-secondary-1 border border-secondary-1/20 rounded-full w-14 h-14 flex items-center justify-center"
            aria-label="Previous Slide"
          >
            <FaChevronLeft className="text-xl" />
          </button>
        </div>
        <div className="absolute top-1/2 right-[-8px] transform -translate-y-1/2 z-10">
          <button
            onClick={slideNext2}
            className="bg-white bg-opacity-50 text-secondary-1 border border-secondary-1/20 rounded-full w-14 h-14 flex items-center justify-center"
            aria-label="Next Slide"
          >
            <FaChevronRight className="text-xl" />
          </button>
        </div>
          
          <Slider ref={sliderRef2} {...secondsettings}>
          {/* Use px-4 for padding between cards */}
          {exclusiveSliderTwoData.map((item, index) => (
            <div
              key={index}
              className="px-2" // Add px-4 to give spacing between cards
            >
              <div className="bg-white cursor-pointer rounded-lg overflow-hidden ">
                <img
                  src={item.image}
                  alt={`Exclusive item ${index + 1}`}
                  className="w-full h-full object-cover" // Keep consistent image height
                  loading="lazy" // Lazy load images for performance
                />
                <div className="py-4 ">
                  <h3 className="text-lg font-semibold font-inter">
                    {item.discount}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Exclusive;
