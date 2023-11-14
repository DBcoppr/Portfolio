import React from "react";
import { CircularMern } from "./Icons";
import Link from "next/link";

const Hireme = () => {
  return (
    <div className="absolute flex items-center justify-center overflow-hidden right-[-10px] top-[-10px]  md:fixed lg:right-[85%] lg:top-[65%] md:right-[70%] md:top-[65%]">
      <div className="w-[115px] h-auto relative flex items-center justify-center md:w-56">
        <CircularMern className={"fill-dark animate-spin-slow "} />
        <Link
          href="mailto:mdtarikh.k4@gmail.com"
          className="absolute flex items-center text-[10px] justify-center bg-dark text-light border-2 border-solid border-dark left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full w-12 h-12 shadow-md font-semibold hover:bg-light hover:text-dark md:w-20 md:h-20 md:text-base"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default Hireme;
