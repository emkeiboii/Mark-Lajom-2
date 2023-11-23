export default function AccordionItem({
  name,
  description,
  id,
  curOpen,
  onCurOpen,
}) {
  const isOpen = id === curOpen;

  function handleToggle() {
    onCurOpen(isOpen ? null : id);
    console.log(curOpen);
  }

  return (
    <div className="mb-3 w-96" onClick={() => handleToggle()} id={id}>
      <div
        className={`border-white border font-mono  py-2 px-6 cursor-pointer hover:text-navy hover:bg-white drop-shadow-lg ${
          isOpen ? "bg-white text-navy" : ""
        }`}
      >
        <h3>{name}</h3>
      </div>
      {isOpen ? (
        <div className="border-white border font-mono pt-4 pb-2 px-6 text-xs bg-white text-navy">
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
}
