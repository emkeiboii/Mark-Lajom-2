import React from "react";

const Hero = () => {
  return (
    <div id="hero">
      <h2 className="font-mono text-blue">Hello! My name is:</h2>
      <h1 className="font-extrabold text-8xl -mx-1 mb-3 text-blue ">
        Mark Lajom
      </h1>
      <h3 className="font-extrabold text-3xl">I'm a front-end web developer</h3>
      <p className="text-grey">
        I love coding, cooking and eating. I'm inspired by creativity and driven
        by passion
      </p>
      <button className="font-mono outline  outline-1 rounded text-lavender py-2 px-5 hover:bg-lavender hover:bg-opacity-20 duration-200 ease-out">
        Contact me!
      </button>
    </div>
  );
};

export default Hero;
