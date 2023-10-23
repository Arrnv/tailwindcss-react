import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(true);

  return (
    <header className="w-full p-4">
      <nav className="flex justify-between items-center sm:relative sm:h-10">
        <div>
          <p className="text-[#101213] text-[24px] font-[700] italic">
            <Link to="/">Daptive</Link>
          </p>
        </div>

        <div className="absolute top-4.5 right-5 z-10 sm:hidden">
          {open ? (
            <i
              className="fa fa-bars text-3xl text-black"
              aria-hidden="true"
              onClick={() => {
                setOpen(!open);
              }}
            ></i>
          ) : (
            <i
              className="fa fa-times text-3xl text-black"
              aria-hidden="true"
              onClick={() => {
                setOpen(!open);
              }}
            ></i>
          )}
        </div>

        {/* {open && ( */}
        <div
          className={`flex flex-col h-screen z-0 w-screen items-center gap-[36px] absolute bottom-0 bg-slate-100 ${
            open ? "translate-x-full" : "translate-x-0"
          } duration-200 ease-in-out text-white justify-center h-screen z-0 sm:relative sm:flex-row sm:bg-inherit sm:translate-x-0 sm:h-10 sm:justify-end`}
        >
          <p className="text-xl text-black">
            <Link to="/form">For Business</Link>
          </p>
          <p className="text-xl text-black">
            <Link to="/">Specs</Link>
          </p>
          <p className="py-[12px] cursor-pointer px-[16px] rounded-full bg-[#15ACFF]">
            <Link to="/form">Get Now</Link>
          </p>
        </div>
        {/* )} */}
      </nav>
    </header>
  );
};

export default Navbar;
