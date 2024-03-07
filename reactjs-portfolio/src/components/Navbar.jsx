import { Link } from "react-scroll";
import { useScrollDirection } from "../hooks/useScrollDirection";

// eslint-disable-next-line react/prop-types
export default function Navbar({ primary, secondary }) {
  const scrollDirection = useScrollDirection();
  console.log(primary);

  const hoverNav = {
    transition: "color 0.3s ease", // Transition for smooth hover effect
  };

  function handleMouseEnter() {
    hoverNav.color = secondary;
  }
  function handleMouseLeave() {
    hoverNav.color = secondary;
  }

  return (
    <div
      className={`flex justify-between px-2 md:py-6 md:px-10 lg:py-6 lg:px-10 items-center sticky ${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } h-24 transition-all duration-500 backdrop-blur-sm shadow-lg z-50`}
    >
      <Link
        to="hero"
        style={{ color: primary }}
        className={`text-xl md:text-3xl lg:text-3xl font-bold cursor-pointer hover:text-opacity-80 duration-200 ease-in-out`}
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        emkei
      </Link>
      <ul className="flex gap-5 items-center">
        <li
          style={hoverNav}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="hover:text-primary duration-200 ease-in-out text-dark cursor-pointer"
        >
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <span style={{ color: secondary }}>&gt;</span>about
          </Link>
        </li>
        <li className="hover:text-primary duration-200 ease-in-out text-dark cursor-pointer">
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            <span style={{ color: secondary }}>&gt;</span>work
          </Link>
        </li>
        <li className="hover:text-primary duration-200 ease-in-out text-dark cursor-pointer">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
          >
            <span style={{ color: secondary }}>&gt;</span>contact
          </Link>
        </li>
        <li>
          <button
            className={`outline outline-1 rounded text-dark py-2 px-5 hover:bg-${primary} hover:text-${primary} hover:bg-opacity-20 duration-200 ease-out font-mono hidden md:block lg:block`}
          >
            CV
          </button>
        </li>
      </ul>
    </div>
  );
}
