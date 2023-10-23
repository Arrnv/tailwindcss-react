import React from "react";

const Reviews = () => {
  return (
    <section className="my-84px flex flex-col lg:flex-row gap-4">
      <div className="w-[40%] text-justify">
        <h2 className="text-3xl text-[#1f3257] mb-3">
          Stories, customer pilots.
        </h2>
        <p className="hidden lg:block">
          The rear loading platform is specifically designed to act as a
          multifunctional unit which can be customized with attachments to carry
          load structures of different shapes and sizes.
        </p>
      </div>
      <div className="flex flex-col gap-3 lg:grid lg:grid-cols-2 lg:grid-rows-3 lg:w-[60%]">
        <div>
          <img src="images/Review1.png" alt="" />
        </div>
        <div>
          <img src="images/Review1.png" alt="" />
        </div>
        <div className="">
          <img src="images/Review1.png" alt="" />
        </div>
        <div>
          <img src="images/Review1.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
