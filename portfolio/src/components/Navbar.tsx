import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useScrollDirection } from "../hooks/useScrollDirection";

const Navbar = () => {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`flex justify-between py-6 px-10 sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 bg-blue-200 transition-all duration-500`}
    >
      <Link
        to="hero"
        className="text-blue text-3xl font-bold cursor-pointer"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        emkei
      </Link>
      <ul className="flex gap-5 items-center">
        <li className="">
          <Link to="about" className="cursor-pointer">
            <span className="text-blue">&gt;</span>about
          </Link>
        </li>
        <li>
          <Link to="work" className="cursor-pointer">
            <span className="text-blue">&gt;</span>work
          </Link>
        </li>
        <li>
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
          <button className="outline outline-offset-2 outline-1 rounded text-lavender py-2 px-5">
            CV
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
