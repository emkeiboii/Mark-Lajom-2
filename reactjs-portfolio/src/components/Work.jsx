import works from "../services/works.json";

export default function Work() {
  return (
    <div id="work" className="pt-48 px-4 md:px-0 lg:px-0">
      <h1 className="font-extrabold text-2xl mb-4 text-dark">
        <span className="text-secondary">&gt;</span>Work
      </h1>
      {works.map((item) => (
        <div
          key={item.id}
          className="flex flex-col items-center md:items-start lg:items-start mb-52 gap-8 md:flex-row"
        >
          <img
            src={item.projectImage}
            alt=""
            className="object-cover md:max-w-xs lg:max-w-xs shadow-lg"
          />
          <div>
            <h2 className="font-mono text-primary">{item.projectName}</h2>
            <p className="text-dark text-justify">{item.description}</p>
            <div>
              <button className="font-mono outline  outline-1 rounded text-lavender py-2 px-5 hover:bg-lavender hover:bg-opacity-20 duration-200 ease-out mt-3 mr-3">
                <a href={item.projectLinkLive} target="_blank" rel="noreferrer">
                  Live Demo
                </a>
              </button>
              <button className="font-mono outline  outline-1 rounded text-lavender py-2 px-5 hover:bg-lavender hover:bg-opacity-20 duration-200 ease-out mt-3 mr-3">
                <a
                  href={item.projectLinkSource}
                  target="_blank"
                  rel="noreferrer"
                >
                  Source Code
                </a>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
