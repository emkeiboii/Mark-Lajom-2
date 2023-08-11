import Fade from "react-reveal";
const RSide = () => {
  return (
    <div className="hidden md:hidden lg:flex  bottom-0 fixed right-10 w-2 [writing-mode:vertical-rl] justify-center items-center text-white gap-2">
      <Fade bottom cascade>
        <a
          href=""
          className="font-mono  tracking-widest text-xs hover:-translate-y-1 duration-300 hover:text-blue"
        >
          marklajom.work@gmail.com
        </a>
        <hr className="w-2/12 h-20 bg-white" />
      </Fade>
    </div>
  );
};

export default RSide;
