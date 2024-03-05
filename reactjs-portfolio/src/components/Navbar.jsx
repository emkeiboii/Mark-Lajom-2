import { Link } from "react-scroll";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function Navbar() {
  const scrollDirection = useScrollDirection();

  return (
    <div
      className={`flex justify-between  px-2 md:py-6 md:px-10 lg:py-6 lg:px-10 items-center sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 transition-all duration-500 backdrop-blur-sm shadow-lg z-50`}
    >
      <Link
        to="hero"
        className="text-primary text-xl md:text-3xl lg:text-3xl font-bold cursor-pointer hover:text-opacity-80 duration-200 ease-in-out"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        emkei
      </Link>
      <ul className="flex gap-5 items-center">
        <li className="hover:text-primary duration-200 ease-in-out text-dark">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            <span className="text-primary">&gt;</span>about
          </Link>
        </li>
        <li className="hover:text-primary duration-200 ease-in-out text-dark">
          <Link
            to="work"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            className="cursor-pointer"
          >
            <span className="text-primary">&gt;</span>work
          </Link>
        </li>
        <li className="hover:text-primary duration-200 ease-in-out text-dark">
          <Link
            to="contact"
            className="cursor-pointer"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span className="text-primary">&gt;</span>contact
          </Link>
        </li>
        <li>
          <button className="outline outline-1 rounded text-dark py-2 px-5 hover:bg-primary hover:text-primary hover:bg-opacity-20 duration-200 ease-out font-mono hidden md:block lg:block">
            CV
          </button>
        </li>
      </ul>
    </div>
  );
}
