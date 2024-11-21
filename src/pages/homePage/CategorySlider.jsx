import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const CategorySlider = () => {
    const sliderRef = useRef(null);

    // Slider settings
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 4,
    initialSlide: 0,
  };

  // Functions to control the slider via ref
  const slideNext = (e) => {
    e.stopPropagation(); // Prevent the dropdown from closing when clicking the slider button
    if (sliderRef.current) {
      sliderRef.current.slickNext(); // Move to the next slide
    }
  };

  const slidePrev = (e) => {
    e.stopPropagation(); // Prevent the dropdown from closing when clicking the slider button
    if (sliderRef.current) {
      sliderRef.current.slickPrev(); // Move to the previous slide
    }
  };
  return (
    <div className="relative px-4 py-5 mb-10">
      {/* Custom Buttons Outside the Slider */}
      <div onClick={(e) => e.stopPropagation()} className="absolute top-1/2 left-[10px] transform -translate-y-1/2 z-10">
        <button
          onClick={slidePrev}
          className="bg-gray-700 bg-opacity-50 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          <FaChevronLeft className="text-xl" />
        </button>
      </div>
      <div className="absolute top-1/2 right-[10px] transform -translate-y-1/2 z-10">
        <button
          onClick={slideNext}
          className="bg-gray-700 bg-opacity-50 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          <FaChevronRight className="text-xl" />
        </button>
      </div>

      {/* Slider Component */}
      <div className="px-8">
      <Slider ref={sliderRef} {...settings}>
        <div>
          <h3>What's New</h3>
        </div>
        <div>
          <h3>Sale</h3>
        </div>
        <div>
          <h3>Infant</h3>
        </div>
        <div>
          <h3>Indian Wear</h3>
        </div>
        <div>
          <h3>Western Wear</h3>
        </div>
        <div>
          <h3>Foot Wear</h3>
        </div>
        <div>
          <h3>Sports & Authentic</h3>
        </div>
        <div>
          <h3>8</h3>
        </div>
      </Slider>
      </div>
    </div>
  )
}

export default CategorySlider