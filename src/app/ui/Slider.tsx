'use client'

import { useEffect, useState } from "react";

const slides = [
    { heading: "Your Expert Consultation", buttonText: "Learn More", buttonLink: "#", bgImage: "https://plus.unsplash.com/premium_photo-1702598808910-2226a0dc8c98?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { heading: "Stay Happy Always", buttonText: "Discover", buttonLink: "#", bgImage: "https://plus.unsplash.com/premium_photo-1658506950418-bdb36acec63e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { heading: "Always Care Your Health", buttonText: "Get Started", buttonLink: "#", bgImage: "https://plus.unsplash.com/premium_photo-1702598658235-8cd50f9377c3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];
const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };
    return (
      <div className="w-full h-[500px] md:h-[600px] overflow-hidden flex flex-col md:flex-row">
      {/* Left Side Section */}
      <div className="w-full md:w-[100px] bg-[#1d1515] flex flex-row md:flex-col items-center justify-center md:justify-between p-2 md:p-0">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          className="mb-4 md:mb-0 bg-transparent hover:text-red-700 text-white w-10 h-10 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7-7-7 7" />
          </svg>
        </button>
    
        {/* Number Buttons */}
        <div className="flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2">
          {[0, 1, 2].map((num) => (
            <button
              key={num}
              onClick={() => setCurrentIndex(num)}
              className={`bg-transparent hover:text-red-700 text-xl md:text-2xl text-white w-10 h-10 flex items-center justify-center ${
                currentIndex === num ? "bg-blue-500" : ""
              }`}
            >
              0{num + 1}
            </button>
          ))}
        </div>
    
        {/* Next Button */}
        <button
          onClick={handleNext}
          className="mt-4 md:mt-8 bg-transparent text-white w-10 h-10 flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 hover:text-red-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 10l-7 7-7-7" />
          </svg>
        </button>
      </div>
    
      {/* Slider Section */}
      <div className="relative flex-1 h-full">
        {slides.map((slide, index) => (
          <div
            key={index}
            style={{ backgroundImage: `url(${slide.bgImage})` }}
            className={`absolute inset-0 flex flex-col items-center justify-center bg-cover bg-center transition-opacity duration-1000 ${
              currentIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <h1
              className={`text-4xl md:text-6xl lg:text-8xl text-white transition-transform duration-1000 head ease-linear ${
                currentIndex === index ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              {slide.heading}
            </h1>
            <a
              href={slide.buttonLink}
              className={`mt-4 px-4 py-2 md:px-6 md:py-3 bg-blue-500 text-white rounded-full text-sm md:text-base lg:text-lg transition-transform duration-1000 ease-linear ${
                currentIndex === index ? "translate-y-0 opacity-100" : "translate-y-[200%] opacity-0"
              }`}
            >
              {slide.buttonText}
            </a>
          </div>
        ))}
    
        {/* Dots for Navigation */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 md:w-4 md:h-4 rounded-full ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
    
    );
};

export default Slider;