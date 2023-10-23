import React from "react";
import Card from "./Card";

const Content = () => {
  const data = [
    {
      title: "Real World Range",
      con: "110 km/per charge",
      colors: { color1: "#EB5858", color2: "#FCE5E5" },
    },
    {
      title: "Loading Capacity",
      con: "280kg",
      colors: { color1: "#75C6E9", color2: "#E9F6FC" },
    },
    {
      title: "Economy",
      con: "110 km/per Rs.25/-",
      colors: { color1: "#63CD6E", color2: "#E5F7E7" },
    },
    {
      title: "Smart Monitoring System",
      con: "Mobile Tracking & Monitoring",
      colors: { color1: "#E4BC53", color2: "#FDF6E4" },
    },
  ];

  return (
    <section className="m-4">
      <div className="flex flex-col gap-2 md:flex-row md:flex-wrap items-center">
        {data.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            con={item.con}
            colors={item.colors}
          />
        ))}
      </div>
    </section>
  );
};

export default Content;
