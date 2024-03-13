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
      className={`${
        scrollDirection === "down" ? "-top-24" : "top-0"
      } items-center gap-10 transition-all duration-500 backdrop-filter backdrop-blur-lg bg-opacity-30 shadow-lg flex justify-between sticky mx-10 md:mx-80 lg:mx-80 mt-5 px-5 py-2 rounded bg-black`}
    >
      <Link
        to="hero"
        className={`text-xl text-white md:text-2xl lg:text-3xl font-bold cursor-pointer hover:text-opacity-80 duration-200 ease-in-out`}
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
          className="duration-300 ease-in-out text-white cursor-pointer hover:opacity-80"
        >
          <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
            <span>&gt;</span>about
          </Link>
        </li>
        <li className="hover:text-white duration-200 ease-in-out text-white cursor-pointer hover:opacity-80">
          <Link to="work" spy={true} smooth={true} offset={50} duration={500}>
            <span>&gt;</span>work
          </Link>
        </li>
        <li className="hover:text-white duration-200 ease-in-out text-white cursor-pointer hover:opacity-80">
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
          <button className="outline outline-1 rounded text-white py-1 px-5 hover:bg-white hover:text-white hover:bg-opacity-20 duration-200 ease-out font-mono hidden lg:block">
            CV
          </button>
        </li>
      </ul>
    </div>
  );
}
