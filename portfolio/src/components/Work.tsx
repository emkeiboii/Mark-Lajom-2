import works from "../services/works.json";
import Fade from "react-reveal";
const Work = () => {
  return (
    <div id="work" className="py-48 px-4 md:px-0 lg:px-0">
      <h1 className="font-extrabold text-2xl mb-4">
        <span className="text-blue">&gt;</span>Work
      </h1>
      {works.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center md:items-start lg:items-start mb-52 gap-8 md:flex-row"
        >
          <Fade>
            <img
              src={item.projectImage}
              alt=""
              className=" h-full object-cover md:max-w-xs lg:max-w-xs shadow-lg"
            />
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
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default Work;
