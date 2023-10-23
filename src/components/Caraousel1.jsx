import React, { useState, useEffect } from "react";

const Carousel = ({ slideData }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isWideScreen, setIsWideScreen] = useState(false);

  const handleRadioChange = (index) => {
    setActiveSlide(index);
  };

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsWideScreen(window.innerWidth > 768);
    };

    checkScreenWidth(); // Check screen width on component mount

    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <div className="w-full rounded-2xl overflow-hidden relative mt-24 mb-20">
      <div className="relative">
        <div className="absolute bottom-2 left-[50%] flex gap-4 transform -translate-x-1/2 z-10">
          {slideData.map((_, index) => (
            <label
              key={index}
              className={`cursor-pointer w-2 h-2 border border-black rounded-lg text-center flex items-center justify-center ${
                index === activeSlide ? "bg-black text-white" : ""
              }`}
            >
              <input
                type="radio"
                className="sr-only"
                checked={index === activeSlide}
                onChange={() => handleRadioChange(index)}
              />
            </label>
          ))}
        </div>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-4 p-6 text-justify md:flex-1">
            <h4 className="text-4xl text-[#3896ca] italic">
              Inbuilt Reliability
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
              molestiae in expedita dicta veritatis officiis unde quod esse, cum
              ipsum!
            </p>
          </div>
          <div className="md:flex-1">
            <img src="images/image1.png" alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
