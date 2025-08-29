import React from "react";
import { Link } from "react-router";

const HomeBottom = () => {
  return (
    <div className="font-[lausanne-500]">
      <div className="flex gap-[1.5vw] justify-center items-center">
        <Link to="/work" className="text-lg border-1 rounded-full uppercase pt-[1.5vw] px-[2.2vw] hover:text-[#D3FD50]">Work</Link>
        <Link to="/about" className="text-lg border-1 rounded-full uppercase pt-[1.5vw] px-[2.2vw] hover:text-[#D3FD50]">Agency</Link>
      </div>
    </div>
  );
};

export default HomeBottom;
