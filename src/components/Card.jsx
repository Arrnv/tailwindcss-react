import React from "react";

const Card = ({ title, con, colors }) => {
  return (
    <div
      className={`w-full grow md:max-w-[304px] lg:w-[270px] h-[150px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex flex-col gap-4 text-white p-4`}
    >
      <p className="text-md">{title}</p>
      <p className="text-2xl">{con}</p>
    </div>
  );
};

export default Card;
