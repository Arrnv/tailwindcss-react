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
    <div className="w-full bg-black rounded-2xl overflow-hidden relative mt-16">
      <div className="h-[611px] bg-backgroundColor relative">
        <div className="absolute bottom-2 left-[50%] flex gap-4 transform -translate-x-1/2 z-10">
          {slideData.map((_, index) => (
            <label
              key={index}
              className={`cursor-pointer w-16 h-2 border border-white rounded-lg text-center flex items-center justify-center ${
                index === activeSlide ? "bg-white text-black" : ""
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
        <p className="text-4xl text-white px-4 pt-[24px] font-bold italic md:text-center z-20 relative">
          {slideData[activeSlide]?.caption}
        </p>
        <div className="image-container transition-transform duration-500 ease-in-out absolute top-0 z-0 flex items-center justify-center h-full w-full">
          {/* {!isWideScreen ? (
            <video
              width="100%"
              height="100%"
              autoPlay
              loop
              muted
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
              }}
            >
              <source src={slideData[activeSlide]?.vidsrc} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : ( */}
          <img
            src={slideData[activeSlide]?.imgsrc}
            alt={slideData[activeSlide]?.caption}
            className="w-full h-full object-cover"
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
