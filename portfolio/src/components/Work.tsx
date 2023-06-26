import React from "react";
import works from "../services/works.json";

const Work = () => {
  return (
    <div className="py-48">
      <h1 className="font-extrabold text-2xl mb-4">
        <span className="text-blue">&gt;</span>Work
      </h1>
      {works.map((item) => (
        <div key={item.id} className="flex mb-52 gap-8">
          <img src={item.projectImage} alt="" className="max-w-xs" />
          <div>
            <h2 className="font-mono text-blue">{item.projectName}</h2>
            <p className="text-grey text-justify">{item.description}</p>
            <div>
              <button className="font-mono outline  outline-1 rounded text-lavender py-2 px-5 hover:bg-lavender hover:bg-opacity-20 duration-200 ease-out mt-3 mr-3">
                <a href={item.projectLinkLive} target="_blank">
                  Live Demo
                </a>
              </button>
              <button className="font-mono outline  outline-1 rounded text-lavender py-2 px-5 hover:bg-lavender hover:bg-opacity-20 duration-200 ease-out mt-3 mr-3">
                <a href={item.projectLinkSource} target="_blank">
                  Source Code
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Work;
