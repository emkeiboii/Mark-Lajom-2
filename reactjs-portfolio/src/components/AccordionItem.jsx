/* eslint-disable react/prop-types */
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
    <div
      className="mb-3 w-screen max-w-sm md:max-w-md lg:max-w-lg"
      onClick={() => handleToggle()}
      id={id}
    >
      <div
        className={`border-dark border font-mono  py-2 px-6 cursor-pointer ease-in-out hover:text-navy hover:bg-dark drop-shadow-lg ${
          isOpen ? "bg-white text-dark" : ""
        }`}
      >
        <h3 className="text-dark">{name}</h3>
      </div>
      {isOpen ? (
        <div className="border-dark border font-mono pt-4 pb-2 px-6 text-xs bg-dark text-navy">
          <p>{description}</p>
        </div>
      ) : null}
    </div>
  );
}
