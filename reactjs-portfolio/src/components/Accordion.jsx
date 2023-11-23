import { Fade } from "react-reveal";
import sprojects from "../services/smallprojects.json";
import AccordionItem from "./AccordionItem";
import { useState } from "react";

export default function Accordion() {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="pb-48 pt-30 px-4 md:px-0 lg:px-0 flex flex-col justify-center items-center gap-6 ">
      <Fade>
        <h2 className="font-mono text-lg">other small projects</h2>
        <div>
          {sprojects.map((sproject) => (
            <AccordionItem
              key={sproject.id}
              id={sproject.id}
              name={sproject.name}
              description={sproject.description}
              curOpen={curOpen}
              onCurOpen={setCurOpen}
            />
          ))}
        </div>
      </Fade>
    </div>
  );
}
