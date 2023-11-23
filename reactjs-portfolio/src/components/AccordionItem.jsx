export default function AccordionItem({ name, description }) {
  return (
    <div className="mb-3">
      <div className="border-white border font-mono  py-2 px-6 cursor-pointer hover:text-navy hover:bg-white">
        <h3>{name}</h3>
      </div>
      <div className="border-white border font-mono  py-2 px-6 text-xs bg-white text-navy">
        <p>{description}</p>
      </div>
    </div>
  );
}
