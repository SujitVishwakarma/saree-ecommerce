import React, { useState } from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import * as HomeImage from "../../components/HomePageImages/HomeImages";

const Footer = () => {
  const [isOpenWomen, setisOpenWomen] = useState(false); 
  const [isOpenMen, setisOpenMen] = useState(false);
  const [isOpenKids, setisOpenKids] = useState(false);
  const [isOpenLuxe, setisOpenLuxe] = useState(false);
  const [isOpenTopBrands, setisOpenTopBrands] = useState(false);
  const [isOpenHoseNyka, setisOpenHoseNyka] = useState(false);

  const toggleDropdownWomen = () => {
    setisOpenWomen(!isOpenWomen); 
  };
  const toggleDropdownMen = () => {
    setisOpenMen(!isOpenMen); 
  };
  const toggleDropdownKids = () => {
    setisOpenKids(!isOpenKids); 
  };
  const toggleDropdownLuxe = () => {
    setisOpenLuxe(!isOpenLuxe); 
  };
  const toggleDropdownBrands = () => {
    setisOpenTopBrands(!isOpenTopBrands); 
  };
  const toggleDropdownNyka = () => {
    setisOpenHoseNyka(!isOpenHoseNyka); 
  };
  return (
    <footer className="w-full h-full">
      {/* Top Section */}
      <div className="w-full h-full bg-[#333333] text-white">
        <div className="py-6 px-4 w-full h-full max-w-[1200px] mx-auto">
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="mb-4 lg:mb-0">
              <h3 className="font-semibold mb-2">DOWNLOAD OUR APP</h3>
              <div className="flex gap-4">
                <div className="w-36 h-12 flex items-center justify-center cursor-pointer">
                  {/* Placeholder for Play Store */}
                  <img src={HomeImage.googlePly} alt='googlePly' />
                </div>
                <div className="w-36 h-12 flex items-center justify-center cursor-pointer ">
                  {/* Placeholder for App Store */}
                  <img src={HomeImage.appleStore} alt='googlePly' />
                </div>
              </div>
            </div>
            <div className="text-center md:text-left font-inter">
              <h3 className="font-semibold mb-2 font-inter">
                FOR ANY HELP, YOU MAY CALL US AT
              </h3>
              <p className="text-xs">1800-266-3333</p>
              <p className="text-xs font-inter">
                (Monday to Saturday: 10 am - 10 pm, Sunday: 10 am - 7 pm)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* second Section */}
      <div className="bg-[#f3f2f2] text-gray-800 py-6 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 font-inter w-full h-full max-w-[1400px] mx-auto">
          {/* Column 1 */}
          <div>
            <h4 className="font-semibold mb-2">WHO ARE WE</h4>
            <ul className="space-y-1 font-inter text-sm text-secondary-3">
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>
          {/* Column 2 */}
          <div>
            <h4 className="font-semibold mb-2">HELP</h4>
            <ul className="space-y-1 font-inter text-sm text-secondary-3">
              <li>Shipping & Return Policy</li>
              <li>Help Center</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Responsible Disclosure</li>
              <li>Sell on Nykaa Fashion</li>
            </ul>
          </div>
          {/* Column 3 */}
          <div>
            <h4 className="font-semibold mb-2">QUICKLINKS</h4>
            <ul className="space-y-1 font-inter text-sm text-secondary-3">
              <li>Offers</li>
              <li>Sitemap</li>
              <li>Style Files</li>
            </ul>
          </div>
          {/* Column 4 */}
          <div>
            <h4 className="font-semibold mb-5">{}</h4>
            <ul className="space-y-1 font-inter text-sm text-secondary-3" >
              <li>Privacy Policy</li>
              <li>Responsible Disclosure</li>
              <li>Sell on Nykaa Fashion</li>
            </ul>
          </div>
          {/* Column 5 */}
          <div>
            <h4 className="font-semibold mb-2">FOLLOW US</h4>
            <div className="flex gap-4">
              <FaInstagram className="text-2xl" />
              <FaFacebook className="text-2xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Third Section */}
      <div className="bg-white text-gray-800 py-6 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-4 font-inter w-full h-full max-w-[1400px] mx-auto whitespace-nowrap">

        {/* for mobile secreen  */}
        <div className="block lg:hidden">
          {/* Mobile Dropdown for WOMEN */}
          <div className="lg:hidden">
            <div
              className="cursor-pointer flex items-center justify-between py-2 border-b border-gray-600 lg:hidden"
              onClick={toggleDropdownWomen}
            >
              <h4 className="font-semibold">WOMEN</h4>
              {isOpenWomen ? (
                <FaChevronUp className="text-lg text-gray-600" />
              ) : (
                <FaChevronDown className="text-lg text-gray-600" />
              )}
            </div>
            {isOpenWomen && (
              <ul className="space-y-1 lg:hidden pl-4">
                <li>Women's Indianwear</li>
                <li>Women's Westernwear</li>
                <li>Women's Footwear</li>
                <li>Bags</li>
                <li>Women's Jewellery</li>
                <li>Lingerie</li>
                <li>Women's Sportswear</li>
                <li>Women's Sleep & lounge</li>
                <li>Women's Watches</li>
                <li>Fashion Accessories</li>
                {/* Add other items */}
              </ul>
            )}
          </div>
          {/* Mobile Dropdown for MEN */}
          <div className="lg:hidden">
            <div
              className="cursor-pointer flex items-center justify-between py-2 border-b border-gray-600 lg:hidden"
              onClick={toggleDropdownMen}
            >
              <h4 className="font-semibold">MEN</h4>
              {isOpenMen ? (
                <FaChevronUp className="text-lg text-gray-600" />
              ) : (
                <FaChevronDown className="text-lg text-gray-600" />
              )}
            </div>
            {isOpenMen && (
              <ul className="space-y-1 lg:hidden pl-4 ">
                <li>Women's Indianwear</li>
                <li>Women's Westernwear</li>
                <li>Women's Footwear</li>
                <li>Bags</li>
                <li>Women's Jewellery</li>
                <li>Lingerie</li>
                <li>Women's Sportswear</li>
                <li>Women's Sleep & lounge</li>
                <li>Women's Watches</li>
                <li>Fashion Accessories</li>
                {/* Add other items */}
              </ul>
            )}
          </div>
          {/* Mobile Dropdown for Kids */}
          <div className="lg:hidden">
            <div
              className="cursor-pointer flex items-center justify-between py-2 border-b border-gray-600 lg:hidden"
              onClick={toggleDropdownKids}
            >
              <h4 className="font-semibold">KIDS</h4>
              {isOpenKids ? (
                <FaChevronUp className="text-lg text-gray-600" />
              ) : (
                <FaChevronDown className="text-lg text-gray-600" />
              )}
            </div>
            {isOpenKids && (
              <ul className="space-y-1 lg:hidden pl-4 ">
                <li>Women's Indianwear</li>
                <li>Women's Westernwear</li>
                <li>Women's Footwear</li>
                <li>Bags</li>
                <li>Women's Jewellery</li>
                <li>Lingerie</li>
                <li>Women's Sportswear</li>
                <li>Women's Sleep & lounge</li>
                <li>Women's Watches</li>
                <li>Fashion Accessories</li>
                {/* Add other items */}
              </ul>
            )}
          </div>
          {/* Mobile Dropdown for LUXE */}
          <div className="lg:hidden">
            <div
              className="cursor-pointer flex items-center justify-between py-2 border-b border-gray-600 lg:hidden"
              onClick={toggleDropdownLuxe}
            >
              <h4 className="font-semibold">LUXE</h4>
              {isOpenLuxe ? (
                <FaChevronUp className="text-lg text-gray-600" />
              ) : (
                <FaChevronDown className="text-lg text-gray-600" />
              )}
            </div>
            {isOpenLuxe && (
              <ul className="space-y-1 lg:hidden pl-4 ">
                <li>Women's Indianwear</li>
                <li>Women's Westernwear</li>
                <li>Women's Footwear</li>
                <li>Bags</li>
                <li>Women's Jewellery</li>
                <li>Lingerie</li>
                <li>Women's Sportswear</li>
                <li>Women's Sleep & lounge</li>
                <li>Women's Watches</li>
                <li>Fashion Accessories</li>
                {/* Add other items */}
              </ul>
            )}
          </div>
          {/* Mobile Dropdown for NYKAHOUSE */}
          <div className="lg:hidden">
            <div
              className="cursor-pointer flex items-center justify-between py-2 border-b border-gray-600 lg:hidden"
              onClick={toggleDropdownNyka}
            >
              <h4 className="font-semibold">NYKAA HOUSE </h4>
              {isOpenHoseNyka ? (
                <FaChevronUp className="text-lg text-gray-600" />
              ) : (
                <FaChevronDown className="text-lg text-gray-600" />
              )}
            </div>
            {isOpenHoseNyka && (
              <ul className="space-y-1 lg:hidden pl-4 ">
                <li>Women's Indianwear</li>
                <li>Women's Westernwear</li>
                <li>Women's Footwear</li>
                <li>Bags</li>
                <li>Women's Jewellery</li>
                <li>Lingerie</li>
                <li>Women's Sportswear</li>
                <li>Women's Sleep & lounge</li>
                <li>Women's Watches</li>
                <li>Fashion Accessories</li>
                {/* Add other items */}
              </ul>
            )}
          </div>
        </div>
          
          {/* Women for large screens */}
          <div className="hidden lg:block font-inter">
            <h4 className="font-semibold text-sm mb-2">WOMEN</h4>
            <ul className="space-y-1 font-inter text-xs text-secondary-1">
              <li className="cursor-pointer">Women's Indianwear</li>
              <li className="cursor-pointer">Women's Westernwear</li>
              <li className="cursor-pointer">Women's Footwear</li>
              <li className="cursor-pointer">Bags</li>
              <li className="cursor-pointer">Women's Jewellery</li>
              <li className="cursor-pointer">Lingerie</li>
              <li className="cursor-pointer">Women's Sportswear</li>
              <li className="cursor-pointer">Women's Sleep & lounge</li>
              <li className="cursor-pointer">Women's Watches</li>
              <li className="cursor-pointer">Fashion Accessories</li>
            </ul>
          </div>
          {/* Mens for large screens */}
          <div className="hidden lg:block font-inter">
            <h4 className="font-semibold mb-2 font-inter text-sm">MEN</h4>
            <ul className="space-y-1 font-inter text-xs text-secondary-1">
              <li className="cursor-pointer">Women's Indianwear</li>
              <li className="cursor-pointer">Women's Westernwear</li>
              <li className="cursor-pointer">Women's Footwear</li>
              <li className="cursor-pointer">Bags</li>
              <li className="cursor-pointer">Women's Jewellery</li>
              <li className="cursor-pointer">Lingerie</li>
              <li className="cursor-pointer">Women's Sportswear</li>
              <li className="cursor-pointer">Women's Sleep & lounge</li>
              <li className="cursor-pointer">Women's Watches</li>
              <li className="cursor-pointer">Fashion Accessories</li>
            </ul>
          </div>

          
          {/* Kids for large screens */}
          <div className="hidden lg:block">
            <h4 className="font-semibold mb-2 font-inter">KIDS</h4>
            <ul className="space-y-1 font-inter text-xs text-secondary-1">
              <li className="cursor-pointer">Women's Indianwear</li>
              <li className="cursor-pointer">Women's Westernwear</li>
              <li className="cursor-pointer">Women's Footwear</li>
              <li className="cursor-pointer">Bags</li>
              <li className="cursor-pointer">Women's Jewellery</li>
              <li className="cursor-pointer">Lingerie</li>
              <li className="cursor-pointer">Women's Sportswear</li>
              <li className="cursor-pointer">Women's Sleep & lounge</li>
              <li className="cursor-pointer">Women's Watches</li>
              <li className="cursor-pointer">Fashion Accessories</li>
            </ul>
          </div>

          
          {/* Luxe for large screens */}
          <div className="hidden lg:block">
            <h4 className="font-semibold mb-2 font-inter">LUXE</h4>
            <ul className="space-y-1 font-inter text-xs text-secondary-1">
              <li className="cursor-pointer">Women's Indianwear</li>
              <li className="cursor-pointer">Women's Westernwear</li>
              <li className="cursor-pointer">Women's Footwear</li>
              <li className="cursor-pointer">Bags</li>
              <li className="cursor-pointer">Women's Jewellery</li>
              <li className="cursor-pointer">Lingerie</li>
              <li className="cursor-pointer">Women's Sportswear</li>
              <li className="cursor-pointer">Women's Sleep & lounge</li>
              <li className="cursor-pointer">Women's Watches</li>
              <li className="cursor-pointer">Fashion Accessories</li>
            </ul>
          </div>
          {/* TOP BRANDS for large screens */}
          <div className="hidden lg:block">
            <h4 className="font-semibold mb-2 font-inter">TOP BRANDS</h4>
            <ul className="space-y-1 font-inter text-xs text-secondary-1">
              <li className="cursor-pointer">Women's Indianwear</li>
              <li className="cursor-pointer">Women's Westernwear</li>
              <li className="cursor-pointer">Women's Footwear</li>
              <li className="cursor-pointer">Bags</li>
              <li className="cursor-pointer">Women's Sportswear</li>
              <li className="cursor-pointer">Women's Sleep & lounge</li>
              <li className="cursor-pointer">Women's Watches</li>
              <li className="cursor-pointer">Fashion Accessories</li>
            </ul>
          </div>
          {/* NYKAA HOUSE for large screens */}
          <div className="hidden lg:block">
            <h4 className="font-semibold mb-2 font-inter">NYKAA HOUSE</h4>
            <ul className="space-y-1 font-inter text-xs text-secondary-1">
              <li className="cursor-pointer">Women's Indianwear</li>
              <li className="cursor-pointer">Women's Westernwear</li>
              <li className="cursor-pointer">Women's Footwear</li>
              <li className="cursor-pointer">Bags</li>
              <li className="cursor-pointer">Women's Jewellery</li>
              <li className="cursor-pointer">Lingerie</li>
              <li className="cursor-pointer">Women's Sportswear</li>
              <li className="cursor-pointer">Women's Sleep & lounge</li>
              <li className="cursor-pointer">Women's Watches</li>
              <li className="cursor-pointer">Fashion Accessories</li>
            </ul>
          </div>

          {/* You can repeat the same structure for other categories */}
        </div>
      </div>
      {/* fourth section  */}
      <div className="flex bg-[#fd8985] items-center justify-center py-2 w-full h-full">
          <p className="font-inter text-white text-sm">© 2024 Sujit Vishwakarma. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
