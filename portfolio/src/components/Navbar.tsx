import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Navbar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`flex justify-between py-6 px-10 sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 bg-navy transition-all duration-500 backdrop-blur-sm shadow-lg`}
    >
      <Link
        to="hero"
        className="text-blue text-3xl font-bold cursor-pointer hover:text-opacity-80 duration-200 ease-in-out"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        emkei
      </Link>
      <ul className="flex gap-5 items-center">
        <li className="hover:text-blue duration-200 ease-in-out">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            <span className="text-blue">&gt;</span>about
          </Link>
        </li>
        <li className="hover:text-blue duration-200 ease-in-out">
          <Link to="work" className="cursor-pointer">
            <span className="text-blue">&gt;</span>work
          </Link>
        </li>
        <li className="hover:text-blue duration-200 ease-in-out">
          <Link
            to="contact"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span className="text-blue">&gt;</span>contact
          </Link>
        </li>
        <li>
          <button className="outline outline-1 rounded text-blue py-2 px-5 hover:bg-blue hover:bg-opacity-20 duration-200 ease-out">
            CV
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
