import Fade from "react-reveal";
export default function RSide() {
  return (
    <div className="hidden md:hidden lg:flex  bottom-0 fixed right-10 w-2 [writing-mode:vertical-rl] justify-center items-center text-dark gap-2">
      <Fade bottom cascade>
        <a
          href="emailto:marklajom.work@gmail.com"
          className="font-mono tracking-widest text-xs hover:-translate-y-1 duration-300 hover:text-primary"
        >
          marklajom.work@gmail.com
        </a>
        <hr className="w-2/12 h-20 bg-dark" />
      </Fade>
    </div>
  );
}
