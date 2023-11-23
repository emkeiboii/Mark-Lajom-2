import { Link } from "react-scroll";
import Fade from "react-reveal";

export default function Hero() {
  return (
    <div
      id="hero"
      className="py-48 px-4 sm:px-0 md:px-0 lg:px-28 flex items-center justify-center flex-col"
    >
      <div>
        <Fade>
          <h2 className="font-mono text-blue">Hey! My name is:</h2>
          <h1 className="font-extrabold text-4xl md:text-6xl lg:text-7xl -mx-1  text-blue  ">
            Mark Lajom
          </h1>
          <h2 className="font-extrabold text-4xl md:text-6xl lg:text-7xl mb-3">
            I'm a front-end web developer
          </h2>
          <p className="text-grey">
            I love coding, cooking and eating. I'm inspired by creativity and
            driven by passion
          </p>
          <button className="font-mono outline  outline-1 rounded text-lavender py-2 px-5 hover:bg-lavender hover:bg-opacity-20 duration-200 ease-out my-5 mr-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              Contact me!
            </Link>
          </button>
          <button className="font-mono outline  outline-1 rounded text-blue py-2 px-5 hover:bg-blue hover:bg-opacity-20 duration-200 ease-out my mr-4 md:hidden lg:hidden">
            CV
          </button>
        </Fade>
      </div>
    </div>
  );
}
