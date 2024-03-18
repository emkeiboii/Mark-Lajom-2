/* eslint-disable no-unused-vars */
import { Link } from "react-scroll";
import { useScrollDirection } from "../hooks/useScrollDirection";

// eslint-disable-next-line react/prop-types
export default function Navbar({ primary, secondary }) {
  const scrollDirection = useScrollDirection();
  console.log(primary);

  return (
    <div
      className={`${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } items-center gap-10 transition-all duration-500 backdrop-filter backdrop-blur-lg bg-opacity-5 shadow-md flex justify-between sticky mx-10 md:mx-72 lg:mx-80 mt-5 px-5 py-2 rounded-md
       bg-white z-50`}
    >
      <Link
        to="hero"
        className={`text-xl text-dark md:text-2xl lg:text-3xl font-bold cursor-pointer hover:text-opacity-80 duration-200 ease-in-out`}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        emkei
      </Link>
      <ul className="flex gap-5 items-center">
        <li className="duration-300 ease-in-out text-dark cursor-pointer hover:opacity-80">
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <span>&gt;</span>about
          </Link>
        </li>
        <li className="hover:text-dark duration-200 ease-in-out text-dark cursor-pointer hover:opacity-80">
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            <span>&gt;</span>work
          </Link>
        </li>
        <li className="hover:text-dark duration-200 ease-in-out text-dark cursor-pointer hover:opacity-80">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span>&gt;</span>contact
          </Link>
        </li>
        <li>
          <button className="outline outline-1 rounded text-dark py-1 px-5 hover:bg-white hover:text-dark hover:bg-opacity-20 duration-200 ease-out font-mono hidden lg:block">
            CV
          </button>
        </li>
      </ul>
    </div>
  );
}
