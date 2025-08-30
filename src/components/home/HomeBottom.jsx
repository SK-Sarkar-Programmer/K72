import React from "react";
import { Link } from "react-router";

const HomeBottom = () => {
  return (
    <div className="font-[lausanne-500] overflow-hidden">
      <div className="flex gap-[4vw] md:gap-[1.5vw] justify-center items-center">
        <Link
          to="/work"
          className="text-[9.1vw] md:text-[7.1vw] uppercase border-[.7vw] md:border-[.2vw] rounded-full leading-[5.2vw] pt-[2.8vw] md:pt-[1.8vw] px-[2.2vw] hover:text-[#D3FD50]"
        >
          Work
        </Link>
        <Link
          to="/about"
          className="text-[9.1vw] md:text-[7.1vw] uppercase border-[.7vw] md:border-[.2vw] rounded-full leading-[5.2vw] pt-[2.8vw] md:pt-[1.8vw] px-[2.2vw] hover:text-[#D3FD50]"
        >
          Agency
        </Link>
      </div>
    </div>
  );
};

export default HomeBottom;
