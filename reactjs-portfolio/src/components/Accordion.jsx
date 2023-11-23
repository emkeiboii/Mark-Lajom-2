import sprojects from "../services/smallprojects.json";
import AccordionItem from "./AccordionItem";

export default function Accordion() {
  return (
    <div className="py-48 px-4 md:px-0 lg:px-0 flex flex-col justify-center items-center gap-6">
      <h2 className="font-mono">other small projects</h2>
      <div>
        {sprojects.map((sproject) => (
          <AccordionItem
            key={sproject.id}
            name={sproject.name}
            description={sproject.description}
          />
        ))}
      </div>
    </div>
  );
}
