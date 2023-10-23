import React from "react";
import Caraousel1 from "./Caraousel1";

const Features = () => {
  const slideData = [
    {
      imgsrc: "images/image2.png",
      caption: "Customize your vehicle for work.",
    },
    {
      imgsrc: "image2.jpg",
      caption: "Versatile and reliable options.",
    },
    {
      imgsrc: "image3.jpg",
      caption: "Tailored solutions for your needs.",
    },
    {
      imgsrc: "image4.jpg",
      caption: "Upgrade your fleet with us.",
    },
  ];
  return (
    <div className="mt-4">
      <Caraousel1 slideData={slideData} />
    </div>
  );
};

export default Features;
