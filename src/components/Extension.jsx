import React from "react";
import Carousel from "./Caraousel";

const Extension = () => {
  const slideData = [
    {
      src: "image1.jpg",
      caption: "Customize your vehicle for work.",
    },
    {
      src: "image2.jpg",
      caption: "Versatile and reliable options.",
    },
    {
      src: "image3.jpg",
      caption: "Tailored solutions for your needs.",
    },
    {
      src: "image4.jpg",
      caption: "Upgrade your fleet with us.",
    },
  ];
  return (
    <div className="relative">
      <Carousel slideData={slideData} />
    </div>
  );
};

export default Extension;
