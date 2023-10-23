import React from "react";

const ComingSoon = () => {
  return (
    <section>
      <div className="relative rounded-lg overflow-hidden">
        {/* Background image with blur effect */}
        <div className="bg-blurImage bg-no-repeat bg-center w-full h-screen absolute filter blur-lg z-0"></div>
        <div className="relative flex flex-col items-center justify-center h-screen z-10">
          {/* Text with a contrasting color to stand out on the blurred background */}
          <h2 className="text-4xl font-bold text-white">Energy 2.0</h2>
          <h4 className="text-2xl text-[#3896ca]">Coming Soon...</h4>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
