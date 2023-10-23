import React from "react";

const Information = () => {
  return (
    <section className="flex flex-col md:flex-row">
      <div className="flex flex-col gap-4 p-6 text-justify md:flex-[0.25]">
        <h4 className="text-4xl text-[#3896ca] italic">Inbuilt Reliability</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          molestiae in expedita dicta veritatis officiis unde quod esse, cum
          ipsum!
        </p>
      </div>
      <div className="md:flex-[0.75]">
        <img src="images/image1.png" alt="image" />
      </div>
    </section>
  );
};

export default Information;
