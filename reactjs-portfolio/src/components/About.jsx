import Fade from "react-reveal";

export default function About() {
  return (
    <div
      id="about"
      className="py-48 px-4 sm:px-0 md:px-0 lg:px-36 flex items-center justify-center flex-col"
    >
      <div>
        <Fade>
          <h1 className="font-extrabold text-2xl mb-4">
            <span className="text-blue">&gt;</span>About
          </h1>
          <p className="text-grey text-justify">
            Hey! My name is Mark Lajom, after completing highschool as a graphic
            designer, i jumped on a journey to learn
            <span className="text-blue"> web development</span>. I started
            learning the basics on HTML, CSS and JavaScript, using free material
            on the internet: The Odin Project, FreeCodeCamp many youtube videos
            and various courses.
            <br />
            <br />
            Thanks to TheOdinProject i've come to understand foreign concepts to
            me such as the terminal, Git and{" "}
            <a href="https://github.com/emkeiboii" target="_blank">
              <span
                id="github"
                className="text-blue underline hover:opacity-80"
              >
                GitHub
              </span>
            </a>
            <br />
            <br />
            After a year of dedication, i feel ready to take on a real life job,{" "}
            <span className="text-blue">
              scared and curious of what i don't know, excited of what's to
              come.
            </span>
            <br />
            <br />
            Here are some tools i've been working on/with lately:
            <br />
            <br />
          </p>
          <ul className="text-grey font-mono grid grid-cols-2 gap-2">
            <li>
              <span className="text-blue">&gt;</span>JavaScript
            </li>
            <li>
              <span className="text-blue">&gt;</span>Typescript
            </li>
            <li>
              <span className="text-blue">&gt;</span>React
            </li>
            <li>
              <span className="text-blue">&gt;</span>Libraries
            </li>
          </ul>
        </Fade>
      </div>
    </div>
  );
}
