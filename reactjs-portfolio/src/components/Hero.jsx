import { Link } from "react-scroll";

export default function Hero({ primary, secondary }) {
  return (
    <div
      id="hero"
      className="py-48 px-4 sm:px-0 md:px-0 lg:px-28 flex items-center justify-center flex-col"
    >
      <div className="text-center">
        <h2 className="font-mono text-dark">Hi! I&apos;m Mark!</h2>

        <h2
          style={{ color: primary }}
          className="font-extrabold text-4xl md:text-6xl lg:text-7xl mb-3 text-dark"
        >
          Front-end developer and Graphic designer
        </h2>
        <p style={{ color: secondary }} className="font-bold">
          I love coding, cars and food. Inspired by greatness.
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
      </div>
    </div>
  );
}
