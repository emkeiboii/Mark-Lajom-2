/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

export default function About({ primary, secondary }) {
  return (
    <div
      id="about"
      className="py-48 px-4 sm:px-0 md:px-0 lg:px-36 flex items-center justify-center flex-col"
    >
      <div>
        <h1
          className="font-extrabold text-2xl mb-4 text-dark"
          style={{ color: primary }}
        >
          <span style={{ color: secondary }} className="text-secondary">
            &gt;
          </span>
          About
        </h1>
        <p className="text-dark text-justify">
          Hey! My name is Mark Lajom, after completing highschool as a graphic
          designer, i jumped on a journey to learn
          <span className="text-primary"> web development</span>. I started
          learning the basics on HTML, CSS and JavaScript, using free material
          on the internet: The Odin Project, FreeCodeCamp many youtube videos
          and various courses.
          <br />
          <br />
          Thanks to TheOdinProject i've come to understand foreign concepts to
          me such as the terminal, Git and{" "}
          <a
            href="https://github.com/emkeiboii"
            target="_blank"
            rel="noreferrer"
          >
            <span
              id="github"
              className="text-primary underline hover:opacity-80"
            >
              GitHub
            </span>
          </a>
          <br />
          <br />
          After a year of dedication, i feel ready to take on a real life job,{" "}
          <span className="text-dark">
            scared and curious of what i don't know, excited of what's to come.
          </span>
          <br />
          <br />
          Here are some tools i've been working on/with lately:
          <br />
          <br />
        </p>
        <ul className="text-dark font-mono grid grid-cols-2 gap-2">
          <li>
            <span className="text-primary">&gt;</span>JavaScript
          </li>
          <li>
            <span className="text-primary">&gt;</span>Typescript
          </li>
          <li>
            <span className="text-primary">&gt;</span>React
          </li>
          <li>
            <span className="text-primary">&gt;</span>Libraries
          </li>
        </ul>
      </div>
    </div>
  );
}
